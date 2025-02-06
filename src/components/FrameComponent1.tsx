import type { FC } from "react";
import type { JSX } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FC<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-col items-end justify-start gap-[25.6px] max-w-full text-center text-3xs text-pmi-dsm-color-white font-ibm-plex-mono ${className}`}
    >
      <nav className="m-0 self-stretch flex flex-row items-start justify-between pt-[18.7px] px-0 pb-0 box-border gap-5 max-w-full text-left text-3xs text-black font-ibm-plex-mono">
        <div className="h-[95px] w-[1340px] relative hidden max-w-full text-2xs">
          <div className="absolute h-[52.63%] w-[3.73%] top-[7.37%] right-[14.93%] bottom-[40%] left-[81.34%] shadow-[0px_0px_15px_rgba(163,_255,_255,_0.5)] hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [backdrop-filter:blur(50px)] rounded-mini [background:linear-gradient(180deg,_rgba(143,_143,_143,_0.5),_rgba(0,_0,_0,_0.3))] border-bgdanoff-new-fil border-[1px] border-solid box-border" />
            <img
              className="absolute h-[66.6%] w-[66.6%] top-[17.4%] right-[16%] bottom-[16%] left-[17.4%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconparktelegram.svg"
            />
          </div>
          <div className="absolute h-[37.89%] w-[9.48%] top-[22.11%] right-[90.52%] bottom-[40%] left-[0%] hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [backdrop-filter:blur(50px)] rounded-xl bg-pmi-dsm-color-white flex flex-row items-center justify-center py-[17px] px-3.5 box-border gap-[5px] whitespace-nowrap">
              <img
                className="h-4 w-2 relative"
                alt=""
                src="/weuibackoutlined.svg"
              />
              <div className="relative leading-[16px] uppercase font-medium">
                Back to Main
              </div>
            </div>
          </div>
          <div className="absolute h-[52.63%] w-[3.73%] top-[7.37%] right-[7.46%] bottom-[40%] left-[88.81%] shadow-[0px_0px_15px_rgba(163,_255,_255,_0.5)] hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [backdrop-filter:blur(50px)] rounded-mini [background:linear-gradient(180deg,_rgba(143,_143,_143,_0.5),_rgba(0,_0,_0,_0.3))] border-bgdanoff-new-fil border-[1px] border-solid box-border" />
            <img
              className="absolute h-[66.6%] w-[66.6%] top-[17.4%] right-[16%] bottom-[16%] left-[17.4%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-14.svg"
            />
          </div>
          <img
            className="absolute top-[7.37%] left-[96.27%] w-0 h-0 hidden"
            alt=""
          />
          <div className="absolute h-full w-[38.66%] top-[0px] right-[30.67%] bottom-[0px] left-[30.67%] hidden text-5xl">
            <div className="absolute h-[38.95%] w-[51.74%] top-[61.05%] right-[0%] bottom-[0%] left-[48.26%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.5)] rounded-13xl bg-pmi-dsm-color-white" />
              <div className="absolute top-[24.32%] left-[7.84%] tracking-[0.5em] leading-[50px] flex items-center [text-shadow:0px_1px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap">
                SIMULATOR
              </div>
            </div>
            <img
              className="absolute h-[80.84%] w-[96.53%] top-[0%] right-[3.47%] bottom-[19.16%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/bogdanoff-logo-highres-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[415.7px] flex flex-col items-start justify-start max-w-full">
          <div className="[backdrop-filter:blur(50px)] rounded-xl bg-pmi-dsm-color-white flex flex-row items-start justify-start py-2.5 pl-[22px] pr-[21px] gap-[5px] z-[1]">
            <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
              <img
                className="w-1.5 h-[11.3px] relative"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="relative leading-[16px] uppercase font-medium">
              BACK TO MAIN
            </div>
          </div>
        </div>
        <div className="w-[180.7px] flex flex-col items-start justify-start pt-[29.2px] px-0 pb-0 box-border text-center">
          <div className="self-stretch rounded-13xl bg-pmi-dsm-color-white flex flex-row items-start justify-start py-[7.4px] px-3.5 relative z-[1]">
            <div className="h-[30.5px] w-[180.7px] relative rounded-13xl bg-pmi-dsm-color-white hidden z-[0]" />
            <a className="[text-decoration:none] h-[15.7px] flex-1 relative tracking-[0.76em] leading-[15.7px] font-bold text-[inherit] flex items-center justify-center z-[1]">
              SIMULATOR
            </a>
            <img
              className="h-[63.3px] w-[337px] absolute !m-[0] top-[-47.9px] left-[-168.5px] object-cover z-[2]"
              alt=""
              src="/bogdanoff-logo-highres-1-1@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[23.3px]">
          <div className="[backdrop-filter:blur(50px)] rounded-lg bg-pmi-dsm-color-white flex flex-row items-start justify-start pt-[6.3px] px-1.5 pb-1.5 z-[1]">
            <div className="h-[36.7px] w-[36.7px] relative [backdrop-filter:blur(50px)] rounded-lg bg-pmi-dsm-color-white hidden" />
            <img
              className="h-[24.4px] w-[24.4px] relative rounded-mini z-[1]"
              alt=""
              src="/iconparktelegram-1.svg"
            />
          </div>
          <div className="h-[36.7px] w-[36.7px] relative [backdrop-filter:blur(50px)] rounded-lg bg-pmi-dsm-color-white z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [backdrop-filter:blur(50px)] rounded-lg bg-pmi-dsm-color-white hidden" />
            <img
              className="absolute h-[66.49%] w-[66.49%] top-[17.17%] right-[16.08%] bottom-[16.35%] left-[17.44%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/group-14-1.svg"
            />
          </div>
          <div className="[backdrop-filter:blur(50px)] rounded-xl bg-pmi-dsm-color-white flex flex-row items-start justify-start py-2.5 px-6 z-[1]">
            <div className="relative leading-[16px] uppercase font-medium">
              0x2d68...0126
            </div>
          </div>
        </div>
      </nav>
      <div className="w-[1192px] flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full mq1275:w-3">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1275:hidden">
          <div className="h-[5px] w-[27.3px] relative">
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[2]">
              +
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[3]">
              +
            </div>
          </div>
          <div className="h-[5px] w-[301.3px] relative">
            <div className="absolute top-[0px] left-[0px] w-[27.3px] h-[5px]">
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[2]">
                +
              </div>
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[3]">
                +
              </div>
            </div>
            <div className="absolute top-[0px] left-[2.3px] w-[44.6px] h-[5px]">
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[4]">
                +
              </div>
              <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[5]">
                +
              </div>
            </div>
          </div>
          <div className="h-[5px] w-[44.6px] relative">
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-medium flex items-center justify-center w-full h-full z-[2]">
              +
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[5px] font-light flex items-center justify-center w-full h-full z-[3]">
              +
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
