export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  audioURL?: string | "";
}

export interface SpeechResponse {
  text: string;
  audioUrl: string;
}

export interface DialogueCharacter {
  name: string;
  voiceId: string;
  text: string;
}

export interface DualSpeechResponse {
  igor: SpeechResponse;
  grichka: SpeechResponse;
  timestamp: number;
}

export interface BackroomDialogue {
  igor: string[];
  grichka: string[];
  timestamp: number;
}

export interface ParsedResponse {
  direct: {
    igor: string[];
    grichka: string[];
  };
  backroom: {
    igor: string[];
    grichka: string[];
  };
}

// Updated parse function to handle both direct and backroom dialogue
export function parseCompleteDialogue(text: string): ParsedResponse {
  const lines = text.split('\n').filter(line => line.trim());
  const direct = {
    igor: [] as string[],
    grichka: [] as string[]
  };
  const backroom = {
    igor: [] as string[],
    grichka: [] as string[]
  };
  
  let isBackroom = false;
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('Igor:')) {
      const text = trimmedLine.replace('Igor:', '').trim();
      if (isBackroom) {
        backroom.igor.push(text);
      } else {
        direct.igor.push(text);
      }
    } else if (trimmedLine.startsWith('Grichka:')) {
      const text = trimmedLine.replace('Grichka:', '').trim();
      if (isBackroom) {
        backroom.grichka.push(text);
      } else {
        direct.grichka.push(text);
        isBackroom = true; // After first Grichka response, switch to backroom
      }
    }
  });

  return { direct, backroom };
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'igor' | 'grichka';
  timestamp: number;
}