import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display";
import { useRef, useState } from "react";
import { MotionSync } from "live2d-motionsync";
// import { ChatWindow } from "./components/ChatWindow";
import { QuantumSurveillance } from "../components/QuantumSurveillance";
// import { ModelControls } from "./components/ModelControls";
import { useSpeechHandler } from "../components/SpeechHandler";
import { DualSpeechResponse, ChatMessage } from "../types";
import PixiCanvas from "../live2d/PixiCanvas";
import { Button, Card, Spin } from "antd";

// Expose PIXI globally if needed.
(window as any).PIXI = PIXI;

export default function App() {
  // Refs to access models and motion sync from PixiCanvas.
  const leftMotionSync = useRef<MotionSync | undefined>(undefined);
  const rightMotionSync = useRef<MotionSync | undefined>(undefined);

  const leftModelName = "igor"; // Predefined left model
  const rightModelName = "igor"; // Predefined right model

  const [loading, setLoading] = useState(true);

  const leftModelRef = useRef<Live2DModel | null>(null);
  const rightModelRef = useRef<Live2DModel | null>(null);

  const [inputText, setInputText] = useState("");
  const {
    generateDualSpeech,
    isLoading,
    error,
    backroomDialogue,
    responseTime,
  } = useSpeechHandler("ae17b46d-720c-00a4-8b0f-c96b433a0951");
  const [lastResponse, setLastResponse] = useState<
    DualSpeechResponse | undefined
  >();
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Example function to test motion sync
  const MotionTesting = async () => {
    const leftModel = leftModelRef.current;
    console.log("This is getting called! ", leftModel);
    if (leftModel) {
      console.log("Left Model is available!");
      leftModel.motion("");
    } else {
      console.error("Left Model is not loaded yet.");
    }
  };

  const handleSubmit = async () => {
    if (!inputText.trim()) return;

    try {
      // Add user message.
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text: inputText,
        sender: "user",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMessage]);

      const response = await generateDualSpeech(inputText);
      if (!response) {
        throw new Error("No response generated");
      }

      // Play Igor first, then Grichka.
      const playSequentially = async () => {
        // Add Igor's message and play audio.
        const igorMessage: ChatMessage = {
          id: Date.now().toString(),
          text: response.igor.text,
          sender: "igor",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, igorMessage]);

        const igorAudio = new Audio(response.igor.audioUrl);
        leftMotionSync.current?.play(response.igor.audioUrl);

        await new Promise<void>((resolve) => {
          igorAudio.onended = () => resolve;
          igorAudio.play();
        });

        // Add Grichka's message and play audio.
        const grichkaMessage: ChatMessage = {
          id: Date.now().toString(),
          text: response.grichka.text,
          sender: "grichka",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, grichkaMessage]);
        rightMotionSync.current?.play(response.grichka.audioUrl);
      };

      await playSequentially();
      setInputText("");
    } catch (err) {
      console.error("Response generation failed:", err);
    }
  };

  return (
    <div className="size-full flex">
      <div className="flex-1 relative flex flex-col">
        {/* Canvas and Models */}
        <div className="flex-1 relative">
          <PixiCanvas
            leftModelName={leftModelName}
            rightModelName={rightModelName}
            leftModelRef={leftModelRef}
            rightModelRef={rightModelRef}
            leftMotionSync={leftMotionSync}
            rightMotionSync={rightMotionSync}
            setLoading={setLoading}
          />
          {loading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Spin />
            </div>
          )}
        </div>

        {/* Model Controls */}
        {/* <div className="flex gap-4 p-4 justify-center">
          <ModelControls model={leftModelRef.current} label="Left" />
          <ModelControls model={rightModelRef.current} label="Right" />
        </div> */}
      </div>

      <div className="w-[400px] flex flex-col gap-2 justify-center p-4">
        {/* <ChatWindow
          inputText={inputText}
          onInputChange={setInputText}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
          messages={messages}
        /> */}

        <QuantumSurveillance
          backroomDialogue={backroomDialogue}
          responseTime={responseTime}
        />

        <Card title="Controls" className="w-full">
          <div className="flex flex-col gap-2">
            <Button
              danger
              onClick={() => {
                leftMotionSync.current?.reset();
                rightMotionSync.current?.reset();
              }}
            >
              Stop All
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
