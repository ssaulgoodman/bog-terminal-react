import React from 'react';

// A reusable component for a chat message block.
// For the left column, the first message in a group uses z-[4] and no top margin,
// while the second uses z-[5] with a negative margin (mt-[-70px]).
// (The right column version uses a slightly different height and margin.)
const ChatMessage = ({ message, variant = 'left', index = 0 }) => {
  // Pick styles based on which column (left/right) and the index within the group.
  let extraClasses = '';
  if (variant === 'left') {
    extraClasses = index === 0 ? 'z-[4]' : 'z-[5] mt-[-70px]';
  } else if (variant === 'right') {
    extraClasses = index === 0
      ? 'h-[79.9px] relative tracking-[-0.05em] leading-[10px] flex items-center shrink-0 z-[4]'
      : 'h-[79.9px] relative tracking-[-0.05em] leading-[10px] flex items-center shrink-0 z-[5] mt-[-79.9px]';
  }
  return (
    <div className={`relative tracking-[-0.05em] leading-[10px] shrink-0 ${extraClasses}`}>
      <p className="[margin-block-start:0] [margin-block-end:10px] text-gray-600">
        <span className="text-tomato">{message.username}</span>
        <span>{message.info}</span>
        <span className="text-pmi-dsm-color-white whitespace-pre-wrap">{`             `}</span>
        <span className="text-royalblue">{message.no}</span>
      </p>
      {message.lines.map((line, i) => (
        <p key={i} className={i === message.lines.length - 1 ? 'm-0' : '[margin-block-start:0] [margin-block-end:10px]'}>
          {line}
        </p>
      ))}
    </div>
  );
};

const ChatInterface = ({
  // Header texts
  headerLeft = '// CHAT INTERFACE',
  headerRight = 'FEED',
  // For the left column, we expect an array of groups. Each group is an array of two message objects.
  leftGroups = [],
  // For the right column we expect an array of two message objects.
  rightGroup = []
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
        <div className="h-[571px] flex-1 relative max-w-full">
          <div className="absolute top-[0px] left-[14px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border w-[430px] flex flex-col items-start justify-start pt-0 px-5 pb-[173px] gap-[60px] max-w-full z-[2] text-left text-springgreen font-vt323">
            {/* Hidden background and blurred overlay */}
            <div className="w-[430px] h-[571px] relative shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[3]" />
            {/* Header */}
            <div className="ml-[-20.5px] w-[430.7px] h-[31px] bg-black border-dimgray border-[1px] border-solid box-border flex flex-col items-end justify-start pt-[3px] px-[19px] pb-1 relative gap-1 max-w-[112%] z-[4] text-right text-5xs text-gray-200">
              <div className="w-[430.7px] h-[31px] relative bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[5]" />
              <div className="w-[116.4px] relative leading-[5px] whitespace-pre-wrap flex items-center z-[6]">
                {headerLeft}
              </div>
              <div className="w-[124.8px] relative leading-[5px] text-pmi-dsm-color-white whitespace-pre-wrap flex items-center z-[6]">
                {headerRight}
              </div>
            </div>
            {/* Left column messages */}
            <div className="w-[212.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[13px]">
              {leftGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="self-stretch flex flex-col items-start justify-start">
                  {group.map((message, msgIndex) => (
                    <ChatMessage
                      key={msgIndex}
                      message={message}
                      variant="left"
                      index={msgIndex}
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* Right column messages */}
            <div className="w-[225.2px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                {rightGroup.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message}
                    variant="right"
                    index={index}
                  />
                ))}
              </div>
            </div>
            {/* Plus icons at the bottom corners */}
            <div className="w-[27.3px] h-[31px] absolute !m-[0] bottom-[-12px] left-[-14px] text-center text-pmi-dsm-color-white font-ibm-plex-mono">
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[4]">
                +
              </div>
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[5]">
                +
              </div>
            </div>
            <div className="w-[27.3px] h-[31px] absolute !m-[0] right-[-14px] bottom-[-12px] text-center text-pmi-dsm-color-white font-ibm-plex-mono">
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[4]">
                +
              </div>
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[5]">
                +
              </div>
            </div>
          </div>
          {/* Plus icons at the top edges */}
          <div className="absolute top-[15px] left-[0px] w-[27.3px] h-[5px]">
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
              +
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[7]">
              +
            </div>
          </div>
          <div className="absolute top-[15px] left-[430.7px] w-[27.3px] h-[5px]">
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
              +
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[7]">
              +
            </div>
          </div>
        </div>
      </div>
      {/* Plus icons in the footer row */}
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <div className="h-[5px] w-9 relative">
          <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
            +
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[7]">
            +
          </div>
        </div>
        <div className="h-[5px] w-9 relative">
          <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
            +
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[7]">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
