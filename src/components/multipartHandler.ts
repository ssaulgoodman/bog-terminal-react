export interface MultipartPart {
  headers: string;
  body: Uint8Array;
}

export function parseMultipartMixed(arrayBuffer: ArrayBuffer, boundary: string) {
  const decoder = new TextDecoder();
  const data = new Uint8Array(arrayBuffer);
  const boundaryBytes = `--${boundary}`.split('').map(char => char.charCodeAt(0));
  const parts: { headers: Record<string, string>; body: Uint8Array }[] = [];
  
  let position = 0;
  while (position < data.length) {
    // Find next boundary
    const boundaryIndex = findSequence(data, boundaryBytes, position);
    if (boundaryIndex === -1) break;
    
    position = boundaryIndex + boundaryBytes.length;
    
    // Skip \r\n after boundary
    position += 2;
    
    // Parse headers
    const headers: Record<string, string> = {};
    while (position < data.length) {
      const lineEnd = findSequence(data, [13, 10], position);
      if (lineEnd === position) {
        position += 2;
        break;
      }
      
      const line = decoder.decode(data.slice(position, lineEnd));
      const [key, value] = line.split(': ');
      headers[key.toLowerCase()] = value;
      position = lineEnd + 2;
    }
    
    // Find next boundary for body
    const bodyStart = position;
    const nextBoundary = findSequence(data, boundaryBytes, position);
    const bodyEnd = nextBoundary !== -1 ? nextBoundary - 2 : data.length; // -2 to remove \r\n
    
    const body = data.slice(bodyStart, bodyEnd);
    parts.push({ headers, body });
    
    position = bodyEnd;
  }
  
  return parts;
}

function findSequence(data: Uint8Array, sequence: number[], start: number): number {
  outer: for (let i = start; i <= data.length - sequence.length; i++) {
    for (let j = 0; j < sequence.length; j++) {
      if (data[i + j] !== sequence[j]) continue outer;
    }
    return i;
  }
  return -1;
}

export function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function binaryStringToUint8Array(binary: string): Uint8Array {
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
