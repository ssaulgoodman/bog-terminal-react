import { Card } from 'antd';
import { BackroomDialogue } from '../types';

interface QuantumSurveillanceProps {
  backroomDialogue?: BackroomDialogue;
  responseTime?: number;
}

export function QuantumSurveillance({ backroomDialogue, responseTime }: QuantumSurveillanceProps) {
  return (
      <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
        {responseTime && (
          <div className="text-xs text-yellow-500">
            Response Time: {responseTime.toFixed(2)}ms
          </div>
        )}
        {backroomDialogue && (
          <div className="flex flex-col gap-2">
            {backroomDialogue.igor.map((text, index) => (
              <div key={`igor-${index}`} className="text-lg">
                <strong className="text-red-500">Igor:</strong> {text}
              </div>
            ))}
            {backroomDialogue.grichka.map((text, index) => (
              <div key={`grichka-${index}`} className="text-lg">
                <strong className="text-blue-500">Grichka:</strong> {text}
              </div>
            ))}
            <div className="text-xs text-gray-500">
              {new Date(backroomDialogue.timestamp).toLocaleTimeString()}
            </div>
          </div>
        )}
      </div>
  );
} 