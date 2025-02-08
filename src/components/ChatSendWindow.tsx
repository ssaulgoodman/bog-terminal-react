import { Button, Input } from "antd";

interface SubmitWindowProps {
  inputText: string;
  onInputChange: (text: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function ChatsendWindow({
  inputText,
  onInputChange,
  onSubmit,
  isLoading,
}: SubmitWindowProps) {
  return (
    <div className="flex gap-2">
      <Input
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        onPressEnter={onSubmit}
        placeholder="Type a message..."
        disabled={isLoading}
      />
      <Button onClick={onSubmit} loading={isLoading} type="primary">
        Send
      </Button>
    </div>
  );
}
