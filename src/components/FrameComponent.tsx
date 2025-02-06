import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  aLLSYSTEMS?: string;
  oNLINE?: string;
  aLLSYSTEMS1?: string;
  oNLINE1?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivTop,
  aLLSYSTEMS,
  oNLINE,
  aLLSYSTEMS1,
  oNLINE1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full h-[79.9px] text-left text-3xs text-gray-200 font-vt323 ${className}`}
      style={frameDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] leading-[10px] flex items-center w-full h-full z-[8]">
        <span className="w-full">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            {aLLSYSTEMS}
          </p>
          <p className="m-0 text-pmi-dsm-color-white">{oNLINE}</p>
        </span>
      </div>
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <div className="absolute top-[0px] left-[0px] leading-[10px] flex items-center w-full h-full z-[11]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              {aLLSYSTEMS1}
            </p>
            <p className="m-0 text-pmi-dsm-color-white">{oNLINE1}</p>
          </span>
        </div>
        <div className="absolute top-[43px] left-[39px] rounded-[50%] bg-palegreen w-[5px] h-[5px] z-[13]" />
      </div>
    </div>
  );
};

export default FrameComponent;
