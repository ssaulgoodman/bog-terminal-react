import { useRef, useState } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import { DefaultCard } from "../components/DefaultCard";
import PixiCanvas from "../live2d/PixiCanvas";
import { Live2DModel } from "pixi-live2d-display";
import { MotionSync } from "live2d-motionsync";
import { useSpeechHandler } from "../components/SpeechHandler";
import { BackroomDialogue, ChatMessage, DualSpeechResponse } from "../types";
import { Spin } from "antd";
import { MessagesWindow } from "../components/chatwindow";
import { ChatsendWindow } from "../components/ChatSendWindow";
import { QuantumSurveillance } from "../components/QuantumSurveillance";

const testMessages: ChatMessage[] = [
  {
    id: "1",
    text: "Hello, how are you?",
    sender: "user",
    timestamp: 1707391200000, // Example timestamp
  },
  {
    id: "2",
    text: "I'm doing well, thank you!",
    sender: "igor",
    timestamp: 1707391260000,
  },
  {
    id: "3",
    text: "What's the plan for today?",
    sender: "user",
    timestamp: 1707391320000,
  },
  {
    id: "4",
    text: "We need to review the latest reports.",
    sender: "grichka",
    timestamp: 1707391380000,
  },
  {
    id: "5",
    text: "Alright, let's get started.",
    sender: "igor",
    timestamp: 1707391440000,
  },
  
];
const dialogues: BackroomDialogue[] = [
  {
    igor: ["Did you hear that noise?", "Something is definitely wrong."],
    grichka: ["Yes, stay quiet. We need to move carefully.", "This place gives me the chills."],
    timestamp: 1707392012
  },
];
function Aipage() {
  // Refs to access models and motion sync from PixiCanvas.
  const leftMotionSync = useRef<MotionSync | undefined>(undefined);
  const rightMotionSync = useRef<MotionSync | undefined>(undefined);

  const leftModelName = "GrichkaRig5"; // Predefined left model
  const rightModelName = "GrichkaRig5"; // Predefined right model


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

        await leftMotionSync.current?.play(response.igor.audioUrl);
        // Add Grichka's message and play audio.
        const grichkaMessage: ChatMessage = {
          id: Date.now().toString(),
          text: response.grichka.text,
          sender: "grichka",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, grichkaMessage]);
        await rightMotionSync.current?.play(response.grichka.audioUrl);
      };

      await playSequentially();
      setInputText("");
    } catch (err) {
      console.error("Response generation failed:", err);
    }
  };
  return (
    <div className="w-full h-screen relative bg-gray-500 overflow-hidden flex flex-col justify-start pt-[55px] pb-[21px] px-[81px] box-border leading-[normal] tracking-[normal] text-center text-3xs text-pmi-dsm-color-white font-vt323">
      <FrameComponent1 />
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
        alt=""
        src="/input-background@2x.png"
      />
      <div className="flex gap-4 z-10 h-[calc(100vh-100px)]">
        {/* Left column */}
        <div className="flex flex-col gap-4 w-1/2">
          <DefaultCard
            className="h-[60%]"
            childrenClassname="flex-1 overflow-y-auto p-2"
            headerContent={"// QUANTUM SURVEILLANCE"}
          >
            <MessagesWindow error={error} messages={messages} />
          </DefaultCard>
          
          <DefaultCard
            className="h-[10%] flex  justify-center"
            childrenClassname="px-5"
          >
            <ChatsendWindow
              inputText={inputText}
              onInputChange={setInputText}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </DefaultCard>
          
          <DefaultCard
            className="h-[30%]"
            headerContent={"// SIMULATION"}
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 w-1/2">
          <DefaultCard
            className="h-[60%] overflow-hidden"
            headerContent={"// AGENT INTERACTION"}
          >
            <div className="relative h-full">
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
          </DefaultCard>
          
          <div className="grid grid-cols-2 gap-4 h-[40%]">
            <DefaultCard
              className="h-full"
              childrenClassname="h-full overflow-y-auto"
              headerContent={"// QUANTUM SURVEILLANCE"}
            >
              <QuantumSurveillance
                backroomDialogue={backroomDialogue}
                responseTime={responseTime}
              />
            </DefaultCard>
            
            <DefaultCard
              className="h-full"
              headerContent={"// QUANTUM SURVEILLANCE"}
            >
            </DefaultCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aipage;