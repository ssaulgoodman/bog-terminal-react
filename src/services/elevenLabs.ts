interface VoiceSettings {
  stability: number;
  similarity_boost: number;
  style: number;
  use_speaker_boost: boolean;
  speaking_rate: number;
}

export async function generateSpeech(text: string, voiceId?: string): Promise<ArrayBuffer> {
  const defaultVoiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID;
  const apiKey = import.meta.env.VITE_ELEVENLABS_XI_API_KEY;
  const modelId = import.meta.env.VITE_ELEVENLABS_MODEL_ID;
  const selectedVoiceId = voiceId || defaultVoiceId;

  console.log('Using voice ID:', selectedVoiceId);
  console.log('Using model ID:', modelId);

  if (!apiKey) {
    throw new Error("ELEVENLABS_XI_API_KEY not configured");
  }

  const elevenLabsApiUrl = `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoiceId}`;

  console.log('API URL:', elevenLabsApiUrl);

  const voiceSettings: VoiceSettings = {
    stability: 0.6,
    similarity_boost: 1.0,
    style: 0.66,
    use_speaker_boost: true,
    speaking_rate: 1.0
  };

  const response = await fetch(elevenLabsApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
    },
    body: JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: voiceSettings
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`ElevenLabs API error: ${response.status} - ${errorText}`);
  }

  return await response.arrayBuffer();
} 