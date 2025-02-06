import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ChatInterface from "../components/chatwindow";

const sampleLeftGroups = [
  [
    {
      username: "IGOR ",
      info: "ID: 6537) 01/18/25(THU)21:20:45",
      no: "NO.1077665389",
      lines: [
        ">Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?",
        ">Ze very fabric of financial reality bends to our will...",
      ],
    },
    {
      username: "IGOR ",
      info: "ID: 6537) 01/18/25(THU)21:20:45",
      no: "NO.1077665389",
      lines: [
        ">Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?",
        ">Ze very fabric of financial reality bends to our will...",
      ],
    },
  ],
  [
    {
      username: "IGOR ",
      info: "ID: 6537) 01/18/25(THU)21:20:45",
      no: "NO.1077665389",
      lines: [
        ">Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?",
        ">Ze very fabric of financial reality bends to our will...",
      ],
    },
    {
      username: "IGOR ",
      info: "ID: 6537) 01/18/25(THU)21:20:45",
      no: "NO.1077665389",
      lines: [
        ">Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?",
        ">Ze very fabric of financial reality bends to our will...",
      ],
    },
  ],
];

const sampleRightGroup = [
  {
    username: "IGOR ",
    info: "ID: 6537) 01/18/25(THU)21:20:45",
    no: "NO.1077665389",
    lines: [
      ">Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?",
      ">Ze very fabric of financial reality bends to our will...",
    ],
  },
  {
    username: "IGOR ",
    info: "ID: 6537) 01/18/25(THU)21:20:45",
    no: "NO.1077665389",
    lines: [
      ">Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?",
      ">Ze very fabric of financial reality bends to our will...",
    ],
  },
];

const ChatbotPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-col items-end justify-start pt-[55px] pb-[21px] pl-[81px] pr-[82px] box-border leading-[normal] tracking-[normal] text-center text-3xs text-pmi-dsm-color-white font-vt323 mq750:pl-10 mq750:pr-[41px] mq750:box-border">
      <FrameComponent1 />
      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-palegreen hidden z-[2]" />
      <div className="w-[5px] h-[5px] relative rounded-[50%] bg-palegreen hidden z-[3]" />
      <div className="w-[71.7px] h-[26.9px] bg-crimson border-dimgray border-[0.5px] border-solid box-border hidden flex-row items-center justify-center py-1.5 px-2 z-[4]">
        <div className="relative leading-[12px]">STOP</div>
      </div>
      <div className="w-[56.8px] h-10 bg-black border-dimgray border-[1px] border-solid box-border hidden flex-row items-center justify-center py-[7px] px-2 z-[5]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/frame.svg"
        />
      </div>
      <main className="self-stretch h-[847px] flex flex-row items-start justify-end py-0 pl-[7px] pr-0.5 box-border max-w-full mt-[-8px]">
        <section className="self-stretch flex-1 shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gray-400 border-dimgray border-[1px] border-solid box-border flex flex-row items-start justify-start py-[19px] pl-[79px] pr-[3px] relative max-w-full text-center text-3xs text-pmi-dsm-color-white font-ibm-plex-mono mq1275:flex-wrap mq1275:pl-[39px] mq1275:box-border">
          <div className="h-[847px] w-[1268px] relative shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gray-400 border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[1]" />
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/input-background@2x.png"
          />
          <div className="h-[31px] w-[15.9px] absolute !m-[0] right-[18px] bottom-[41px]">
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full min-w-[15.9px] z-[4]">
              +
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full min-w-[15.9px] z-[5]">
              +
            </div>
          </div>
          <div className="h-[31px] w-9 absolute !m-[0] bottom-[41px] left-[80px]">
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[4]">
              +
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[5]">
              +
            </div>
          </div>
          <div className="w-[466px] flex flex-col items-start justify-start gap-[62px] max-w-full mq750:gap-[31px] mq750:min-w-full mq1275:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                <div className="h-[571px] flex-1 relative max-w-full">
                  <div className="absolute top-[0px] left-[14px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border w-[430px] flex flex-col items-start justify-start pt-0 px-5 pb-[173px] gap-[60px] max-w-full z-[2] text-left text-springgreen font-vt323">
                    <div className="w-[430px] h-[571px] relative shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
                    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[3]" />
                    <div className="ml-[-20.5px] w-[430.7px] h-[31px] bg-black border-dimgray border-[1px] border-solid box-border flex flex-col items-end justify-start pt-[3px] px-[19px] pb-1 relative gap-1 max-w-[112%] z-[4] text-right text-5xs text-gray-200">
                      <div className="w-[430.7px] h-[31px] relative bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
                      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[5]" />
                      <div className="w-[116.4px] relative leading-[5px] whitespace-pre-wrap flex items-center z-[6]">
                        {" "}
                        // CHAT INTERFACE
                      </div>
                      <div className="w-[124.8px] relative leading-[5px] text-pmi-dsm-color-white whitespace-pre-wrap flex items-center z-[6]">
                        {" "}
                        FEED
                      </div>
                    </div>
                    <div className="w-[212.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[13px]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="relative tracking-[-0.05em] leading-[10px] shrink-0 z-[4]">
                          <p className="[margin-block-start:0] [margin-block-end:10px] text-gray-600">
                            <span className="text-tomato">{`IGOR `}</span>
                            <span>ID: 6537) 01/18/25(THU)21:20:45</span>
                            <span className="text-pmi-dsm-color-white whitespace-pre-wrap">{`             `}</span>
                            <span className="text-royalblue">
                              NO.1077665389
                            </span>
                          </p>
                          <p className="[margin-block-start:0] [margin-block-end:10px]">{`>Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?`}</p>
                          <p className="m-0">{`>Ze very fabric of financial reality bends to our will...`}</p>
                        </div>
                        <div className="relative tracking-[-0.05em] leading-[10px] shrink-0 z-[5] mt-[-70px]">
                          <p className="[margin-block-start:0] [margin-block-end:10px] text-gray-600">
                            <span className="text-tomato">{`IGOR `}</span>
                            <span>ID: 6537) 01/18/25(THU)21:20:45</span>
                            <span className="text-pmi-dsm-color-white whitespace-pre-wrap">{`             `}</span>
                            <span className="text-royalblue">
                              NO.1077665389
                            </span>
                          </p>
                          <p className="[margin-block-start:0] [margin-block-end:10px]">{`>Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?`}</p>
                          <p className="m-0">{`>Ze very fabric of financial reality bends to our will...`}</p>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="relative tracking-[-0.05em] leading-[10px] shrink-0 z-[4]">
                          <p className="[margin-block-start:0] [margin-block-end:10px] text-gray-600">
                            <span className="text-tomato">{`IGOR `}</span>
                            <span>ID: 6537) 01/18/25(THU)21:20:45</span>
                            <span className="text-pmi-dsm-color-white whitespace-pre-wrap">{`             `}</span>
                            <span className="text-royalblue">
                              NO.1077665389
                            </span>
                          </p>
                          <p className="[margin-block-start:0] [margin-block-end:10px]">{`>Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?`}</p>
                          <p className="m-0">{`>Ze very fabric of financial reality bends to our will...`}</p>
                        </div>
                        <div className="relative tracking-[-0.05em] leading-[10px] shrink-0 z-[5] mt-[-70px]">
                          <p className="[margin-block-start:0] [margin-block-end:10px] text-gray-600">
                            <span className="text-tomato">{`IGOR `}</span>
                            <span>ID: 6537) 01/18/25(THU)21:20:45</span>
                            <span className="text-pmi-dsm-color-white whitespace-pre-wrap">{`             `}</span>
                            <span className="text-royalblue">
                              NO.1077665389
                            </span>
                          </p>
                          <p className="[margin-block-start:0] [margin-block-end:10px]">{`>Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?`}</p>
                          <p className="m-0">{`>Ze very fabric of financial reality bends to our will...`}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[225.2px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="h-[79.9px] relative tracking-[-0.05em] leading-[10px] flex items-center shrink-0 z-[4]">
                          <span>
                            <p className="[margin-block-start:0] [margin-block-end:10px] text-gray-600">
                              <span className="text-tomato">{`IGOR `}</span>
                              <span>ID: 6537) 01/18/25(THU)21:20:45</span>
                              <span className="text-pmi-dsm-color-white whitespace-pre-wrap">{`             `}</span>
                              <span className="text-royalblue">
                                NO.1077665389
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">{`>Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?`}</p>
                            <p className="m-0">{`>Ze very fabric of financial reality bends to our will...`}</p>
                          </span>
                        </div>
                        <div className="h-[79.9px] relative tracking-[-0.05em] leading-[10px] flex items-center shrink-0 z-[5] mt-[-79.9px]">
                          <span>
                            <p className="[margin-block-start:0] [margin-block-end:10px] text-gray-600">
                              <span className="text-tomato">{`IGOR `}</span>
                              <span>ID: 6537) 01/18/25(THU)21:20:45</span>
                              <span className="text-pmi-dsm-color-white whitespace-pre-wrap">{`             `}</span>
                              <span className="text-royalblue">
                                NO.1077665389
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">{`>Tell us... did you really think ze Bogdanoff twins would miss ze greatest trade in quantum market history?`}</p>
                            <p className="m-0">{`>Ze very fabric of financial reality bends to our will...`}</p>
                          </span>
                        </div>
                      </div>
                    </div>
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
            {/* <ChatInterface
              headerLeft="// CHAT INTERFACE"
              headerRight="FEED"
              leftGroups={sampleLeftGroups}
              rightGroup={sampleRightGroup}
            /> */}
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                <div className="h-[31px] w-9 relative">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                    <div className="h-[5px] w-full absolute !m-[0] top-[9px] right-[0px] left-[0px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[2]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[3]">
                        +
                      </div>
                    </div>
                    <div className="h-[67px] w-[430px] !m-[0] absolute top-[-51px] right-[-412px] shadow-[2px_2px_8px_rgba(67,_4,_0,_0.3)] bg-black border-dimgray border-[1px] border-solid box-border flex flex-row items-end justify-start p-[11px] gap-[6.7px] z-[4] text-left text-5xs font-vt323">
                      <div className="h-[67px] w-[430px] relative shadow-[2px_2px_8px_rgba(67,_4,_0,_0.3)] bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(10px)] border-dimgray border-[0.5px] border-solid box-border mix-blend-lighten z-[1]" />
                      <div className="flex-1 bg-gray-300 border-dimgray border-[0.5px] border-solid flex flex-col items-start justify-start pt-2 px-[11px] pb-[7px] z-[2]">
                        <div className="w-[273px] h-[41px] relative bg-gray-300 border-dimgray border-[0.5px] border-solid box-border hidden" />
                        <div className="w-[210.6px] relative tracking-[-0.05em] leading-[12px] flex items-center z-[1]">{`Type your message here... (use > for greentext)`}</div>
                        <div className="w-[210.6px] relative tracking-[-0.05em] leading-[12px] flex items-center z-[1]">
                          2 Line width
                        </div>
                      </div>
                      <div className="w-[56.8px] bg-black border-dimgray border-[1px] border-solid box-border flex flex-row items-center justify-center py-[7px] px-2 z-[6]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start z-[5]">
                        <div className="h-10 w-[56.8px] bg-black border-dimgray border-[1px] border-solid box-border flex flex-row items-center justify-center py-[5px] px-2">
                          <div className="flex flex-row items-start justify-start z-[6]">
                            <img
                              className="h-[25px] w-[22.3px] relative hidden"
                              alt=""
                              src="/mingcutesendfill.svg"
                            />
                            <div className="h-10 w-[56.8px] bg-black border-dimgray border-[1px] border-solid box-border flex flex-row items-center justify-center py-[5px] px-2">
                              <img
                                className="h-[25px] w-[22.3px] relative z-[1]"
                                loading="lazy"
                                alt=""
                                src="/mingcutesendfill.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[31px] flex-1 relative leading-[5px] font-medium flex items-center justify-center z-[6]">
                      +
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[7]">
                    +
                  </div>
                </div>
                <div className="h-[31px] w-9 relative">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                    <div className="h-[5px] w-full absolute !m-[0] top-[9px] right-[0px] left-[0px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[2]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[3]">
                        +
                      </div>
                    </div>
                    <div className="h-[31px] flex-1 relative leading-[5px] font-medium flex items-center justify-center z-[6]">
                      +
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[7]">
                    +
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[109px] relative max-w-full mt-[-6px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[18px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border w-[430px] max-w-full z-[2] text-right text-5xs text-gray-200 font-vt323">
                  <div className="absolute top-[0px] left-[0px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border w-full h-full mix-blend-screen z-[3]" />
                  <div className="absolute top-[0px] left-[0px] bg-black border-dimgray border-[1px] border-solid box-border w-full h-[31px] flex flex-col items-end justify-start pt-[3px] px-[19px] pb-1 gap-1 max-w-full z-[4]">
                    <div className="w-[430px] h-[31px] relative bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
                    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[5]" />
                    <div className="w-[153px] relative leading-[5px] whitespace-pre-wrap flex items-center z-[6]">
                      {" "}
                      // SIMULATION
                    </div>
                    <div className="w-[164px] relative leading-[5px] text-pmi-dsm-color-white whitespace-pre-wrap flex items-center z-[6]">
                      {" "}
                      RUNNING
                    </div>
                  </div>
                  <div className="absolute top-[11px] left-[14px] w-[381.7px] h-[109.9px] text-3xs">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[279.6px]">
                      <FrameComponent
                        aLLSYSTEMS="ALL SYSTEMS"
                        oNLINE="ONLINE"
                        aLLSYSTEMS1="ALL SYSTEMS"
                        oNLINE1="ONLINE"
                      />
                      <FrameComponent
                        frameDivTop="30px"
                        aLLSYSTEMS="SIMULATION"
                        oNLINE="RUNNING"
                        aLLSYSTEMS1="SIMULATION"
                        oNLINE1="RUNNING"
                      />
                    </div>
                    <div className="absolute top-[41px] left-[153px] w-[228.7px] flex flex-row items-start justify-start gap-3">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="h-[27px] flex-1 relative leading-[5px] flex items-center z-[10]">
                          CLICK HERE TO END SIMULATION
                        </div>
                        <div className="h-[27px] flex-1 relative leading-[5px] flex items-center z-[13] ml-[-145px]">
                          CLICK HERE TO END SIMULATION
                        </div>
                      </div>
                      <div className="h-[26.9px] w-[71.7px] [filter:blur(10px)] bg-crimson border-dimgray border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-[7px] px-2 relative z-[5] text-center text-pmi-dsm-color-white">
                        <div className="h-[24.2px] w-[126.9px] absolute !m-[0] top-[1.3px] right-[-27.6px] leading-[12px] flex items-center justify-center">
                          STOP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[15px] left-[0px] w-9 h-[5px]">
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
                    +
                  </div>
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[7]">
                    +
                  </div>
                </div>
                <div className="absolute top-[15px] left-[430px] w-9 h-[5px]">
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
                    +
                  </div>
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[7]">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[393px] max-w-full ml-[-29px] text-right text-5xs font-vt323 mq750:gap-[196px] mq750:min-w-full mq1100:ml-0 mq450:gap-[98px]">
            <div className="w-[725px] h-[31px] relative max-w-full">
              <div className="absolute top-[0px] left-[0px] bg-black border-dimgray border-[1px] border-solid box-border w-[706px] h-[31px] flex flex-col items-end justify-start pt-[3px] px-[34px] pb-1 gap-1 max-w-full z-[12]">
                <div className="w-[703px] h-[31px] relative bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[13]" />
                <div className="w-[189.3px] relative leading-[5px] text-gray-200 whitespace-pre-wrap flex items-center z-[14]">
                  {" "}
                  // AGENT INTERACTION
                </div>
                <div className="w-[202.9px] relative leading-[5px] whitespace-pre-wrap flex items-center z-[14]">
                  {" "}
                  FEED
                </div>
                <div className="w-[724.6px] h-[440px] absolute !m-[0] bottom-[-409px] left-[-22px] text-center text-3xs font-ibm-plex-mono">
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[21.3px] w-[703.3px]">
                    <div className="absolute top-[0px] left-[0px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border w-full h-full z-[8]" />
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <div className="absolute right-[241.7px] bottom-[1px] w-[15.9px] h-[5px]">
                        <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
                          +
                        </div>
                        <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[7]">
                          +
                        </div>
                      </div>
                      <img
                        className="absolute top-[31px] left-[0px] w-[703.3px] h-[409px] object-cover z-[9]"
                        alt=""
                        src="/bot-message-background@2x.png"
                      />
                      <img
                        className="absolute top-[31px] left-[1px] w-[702.3px] h-[409px] object-contain z-[10]"
                        loading="lazy"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <div className="absolute top-[0px] left-[1px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border w-full h-full mix-blend-screen" />
                    </div>
                  </div>
                  <div className="absolute top-[15px] left-[0px] w-[44.6px] h-[5px]">
                    <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[14]">
                      +
                    </div>
                    <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[15]">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[15px] left-[680.4px] w-[44.6px] h-[5px] text-center text-3xs font-ibm-plex-mono">
                <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[14]">
                  +
                </div>
                <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[15]">
                  +
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-3xs font-ibm-plex-mono">
              <div className="self-stretch flex flex-row items-start justify-between relative gap-5 mq450:flex-wrap">
                <div className="h-[31px] w-[44.6px] relative">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                    <div className="h-[31px] flex-1 relative leading-[5px] font-medium flex items-center justify-center z-[12]">
                      +
                    </div>
                    <div className="h-[5px] w-[28.1px] absolute !m-[0] top-[10px] left-[8px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[14]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[15]">
                        +
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[13]">
                    +
                  </div>
                </div>
                <div className="h-[31px] w-[44.6px] relative">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                    <div className="h-[5px] w-[15.9px] absolute !m-[0] top-[10px] right-[14px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[7]">
                        +
                      </div>
                    </div>
                    <div className="h-[31px] flex-1 relative leading-[5px] font-medium flex items-center justify-center z-[12]">
                      +
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[13]">
                    +
                  </div>
                </div>
                <div className="h-[5px] w-[28.1px] absolute !m-[0] top-[10px] right-[269px]">
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[12]">
                    +
                  </div>
                  <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[13]">
                    +
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-3.5 box-border max-w-full mt-[-5px]">
                <div className="flex-1 flex flex-row items-start justify-start max-w-full mq750:flex-wrap">
                  <div className="h-[322px] flex-1 relative max-w-full">
                    <div className="absolute top-[0px] left-[14px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border w-[441.9px] flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[33px] max-w-full z-[14] text-5xs font-vt323">
                      <div className="self-stretch h-[322px] relative shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border hidden z-[0]" />
                      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[15]" />
                      <div className="self-stretch h-[31px] bg-black border-dimgray border-[1px] border-solid box-border flex flex-col items-end justify-start pt-[3px] px-[19px] pb-1 relative gap-1 max-w-full z-[16] text-right text-gray-200">
                        <div className="w-[441.9px] h-[31px] relative bg-black border-dimgray border-[1px] border-solid box-border hidden max-w-full z-[0]" />
                        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[17]" />
                        <div className="w-[119.5px] relative leading-[5px] whitespace-pre-wrap flex items-center z-[18]">
                          {" "}
                          // QUANTUM SURVEILLANCE
                        </div>
                        <div className="w-32 relative leading-[5px] text-pmi-dsm-color-white whitespace-pre-wrap flex items-center z-[18]">
                          {" "}
                          FEED
                        </div>
                      </div>
                      <div className="w-[297.8px] flex flex-row items-start justify-start py-0 px-[21px] box-border text-left text-aqua">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[12px] z-[16]">
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM] </span>
                              <span>
                                Updating the universal consciousness matrix...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span> Intercepting alien transmissions...</span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM] </span>
                              <span>
                                Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="m-0">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span> Initiating quantum entanglement...</span>
                            </p>
                          </div>
                          <div className="self-stretch relative leading-[12px] [filter:blur(10px)] mix-blend-screen z-[17] mt-[-232px]">
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM] </span>
                              <span>
                                Updating the universal consciousness matrix...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Scanning for anomalies in the space-time
                                continuum...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span> Intercepting alien transmissions...</span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span>
                                 Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:10px]">
                              <span className="text-gold">[1:28:21 PM] </span>
                              <span>
                                Decrypting interdimensional communiqués...
                              </span>
                            </p>
                            <p className="m-0">
                              <span className="text-gold">[1:28:21 PM]</span>
                              <span> Initiating quantum entanglement...</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[28.1px] h-[31px] absolute !m-[0] bottom-[-15px] left-[-14px] text-3xs font-ibm-plex-mono">
                        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                          <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[-15px]">
                            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[4]">
                              +
                            </div>
                            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[5]">
                              +
                            </div>
                          </div>
                          <div className="h-[31px] flex-1 relative leading-[5px] font-medium flex items-center justify-center z-[16]">
                            +
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[17]">
                          +
                        </div>
                      </div>
                      <div className="w-[28.1px] h-[31px] absolute !m-[0] right-[-14.1px] bottom-[-15px] text-3xs font-ibm-plex-mono">
                        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                          <div className="h-full w-[15.9px] absolute !m-[0] top-[0px] right-[-4.9px] bottom-[0px]">
                            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full min-w-[15.9px] z-[4]">
                              +
                            </div>
                            <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full min-w-[15.9px] z-[5]">
                              +
                            </div>
                          </div>
                          <div className="h-[31px] flex-1 relative leading-[5px] font-medium flex items-center justify-center z-[16]">
                            +
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[17]">
                          +
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[15px] left-[0px] w-[28.1px] h-[5px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[18]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[19]">
                        +
                      </div>
                    </div>
                    <div className="absolute top-[15px] left-[441.9px] w-[28.1px] h-[5px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[18]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[19]">
                        +
                      </div>
                    </div>
                  </div>
                  <div className="h-[322px] w-[266px] relative ml-[-11px] mq750:flex-1 mq750:ml-0">
                    <div className="absolute top-[0px] left-[7.9px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border w-[250.1px] flex flex-col items-end justify-start pt-0 px-0 pb-[198px] gap-[15px] z-[2] text-right text-5xs text-gray-200 font-vt323">
                      <div className="self-stretch h-[322px] relative shadow-[2px_2px_8px_rgba(0,_0,_0,_0.25)] bg-black border-dimgray border-[1px] border-solid box-border hidden z-[0]" />
                      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[3]" />
                      <div className="self-stretch h-[31px] bg-black border-dimgray border-[1px] border-solid box-border flex flex-col items-end justify-start pt-[3px] px-[11px] pb-1 relative gap-1 z-[4]">
                        <div className="w-[250.1px] h-[31px] relative bg-black border-dimgray border-[1px] border-solid box-border hidden z-[0]" />
                        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(15px)] border-pmi-dsm-color-white border-[0.5px] border-solid box-border mix-blend-screen z-[5]" />
                        <div className="w-[103px] relative leading-[5px] whitespace-pre-wrap flex items-center z-[6]">
                          {" "}
                          // QUANTUM SURVEILLANCE
                        </div>
                        <div className="w-[72.9px] relative leading-[5px] text-pmi-dsm-color-white whitespace-pre-wrap flex items-center z-[6]">
                          {" "}
                          FEED
                        </div>
                      </div>
                      <div className="w-[179px] flex flex-row items-start justify-end py-0 px-[15px] box-border text-3xs text-pmi-dsm-color-white">
                        <div className="flex-1 flex flex-row items-start justify-start opacity-[0.54] z-[4]">
                          <div className="flex-1 [filter:blur(10px)] flex flex-col items-end justify-start gap-1 opacity-[0.54] mix-blend-screen z-[5]">
                            <div className="w-[141px] flex flex-row items-start justify-start">
                              <div className="flex-1 relative leading-[16px]">
                                [DOCUMENT CLASS: QUANTAM CLEARANCE]
                              </div>
                              <div className="flex-1 relative leading-[16px] ml-[-141px]">
                                [DOCUMENT CLASS: QUANTAM CLEARANCE]
                              </div>
                            </div>
                            <div className="w-[137px] flex flex-row items-start justify-start text-gray-100">
                              <div className="flex-1 relative leading-[16px]">
                                [BOGDANOFF RESEARCH PROTOCOL 7749]
                              </div>
                              <div className="flex-1 relative leading-[16px] ml-[-137px]">
                                [BOGDANOFF RESEARCH PROTOCOL 7749]
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start text-gray-100">
                              <div className="flex-1 relative leading-[16px]">
                                [TIMELINE MANIPULATION MANUAL v2.025]
                              </div>
                              <div className="flex-1 relative leading-[16px] ml-[-149px]">
                                [TIMELINE MANIPULATION MANUAL v2.025]
                              </div>
                            </div>
                            <div className="w-[133px] flex flex-row items-start justify-start">
                              <div className="flex-1 relative leading-[16px]">
                                [CAUTION: MEMETIC HAZARD PRESENT]
                              </div>
                              <div className="flex-1 relative leading-[16px] ml-[-133px]">
                                [CAUTION: MEMETIC HAZARD PRESENT]
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[15px] left-[0px] w-[15.9px] h-[5px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[7]">
                        +
                      </div>
                    </div>
                    <div className="absolute top-[15px] left-[250.1px] w-[15.9px] h-[5px]">
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[6]">
                        +
                      </div>
                      <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[7]">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChatbotPage;
