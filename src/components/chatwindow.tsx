import { DualSpeechResponse, ChatMessage } from "../types";

interface MessageWindowProps {
  error: string | null;
  lastResponse?: DualSpeechResponse;
  messages: ChatMessage[];
}

export function MessagesWindow({
  error,
  messages,
}: MessageWindowProps) {
  return (
      <div className="flex flex-col gap-4 w-full h-full">
        {error && <div className="text-red-500">{error}</div>}

        <div className="flex flex-col gap-8 flex-1 overflow-y-auto text-lg">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${
                message.sender === "user"
                  ? "bg-blue-400 ml-auto"
                  : "bg-gray-700"
              } p-2 rounded max-w-[80%]`}
            >
              {message.sender === "user" ? (
                <div>{message.text}</div>
              ) : (
                <div>
                  <strong>
                    {message.sender === "igor" ? "Igor:" : "Grichka:"}
                  </strong>{" "}
                  {message.text}
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
  );
}
