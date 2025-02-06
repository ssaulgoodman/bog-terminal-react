import { useState, useCallback } from "react";
import { generateSpeech as elevenLabsGenerate } from "../services/elevenLabs";
import { convertToWav } from "./converttowav";
import { DualSpeechResponse, BackroomDialogue, parseCompleteDialogue } from "../types";

const VOICE_IDS = {
  igor: "ohItIVrXTBI80RrUECOD", // Default voice for Igor
  grichka: "ohItIVrXTBI80RrUECOD" // same voice for Grichka
};

// Add an environment variable for the API endpoint
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:3000";

export function useSpeechHandler(agentId: string, endpoint: string = API_URL) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [backroomDialogue, setBackroomDialogue] = useState<BackroomDialogue | undefined>();
  const [responseTime, setResponseTime] = useState<number>(0);

  const generateDualSpeech = useCallback(
    async (inputText: string): Promise<DualSpeechResponse | null> => {
      setIsLoading(true);
      setError(null);
      const startTime = performance.now();

      try {
        if (!agentId) {
          throw new Error("Agent ID is required");
        }

        const response = await fetch(`${endpoint}/${agentId}/simpletext`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputText, roomId: "room-id", userId: "user-id" }),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${errorBody}`);
        }

        const data = await response.json();
        const { direct, backroom } = parseCompleteDialogue(data.text);

        // Generate speech for direct dialogue
        const [igorAudio, grichkaAudio] = await Promise.all([
          elevenLabsGenerate(direct.igor.join(' '), VOICE_IDS.igor),
          elevenLabsGenerate(direct.grichka.join(' '), VOICE_IDS.grichka)
        ]);

        // Convert both to WAV
        const igorBlob = new Blob([igorAudio], { type: 'audio/mpeg' });
        const grichkaBlob = new Blob([grichkaAudio], { type: 'audio/mpeg' });

        const [igorWav, grichkaWav] = await Promise.all([
          convertToWav(igorBlob, 48000),
          convertToWav(grichkaBlob, 48000)
        ]);

        // Update backroom dialogue
        setBackroomDialogue({
          igor: backroom.igor,
          grichka: backroom.grichka,
          timestamp: Date.now()
        });

        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        console.log(`Total response time: ${timeTaken.toFixed(2)}ms`);
        setResponseTime(timeTaken);

        return {
          igor: {
            text: direct.igor.join('\n'),
            audioUrl: URL.createObjectURL(igorWav)
          },
          grichka: {
            text: direct.grichka.join('\n'),
            audioUrl: URL.createObjectURL(grichkaWav)
          },
          timestamp: Date.now(),
        };

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        console.error("Error generating response:", err);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [agentId, endpoint]
  );

  return { generateDualSpeech, isLoading, error, backroomDialogue, responseTime };
}