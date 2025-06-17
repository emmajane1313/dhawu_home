import { FunctionComponent, JSX } from "react";
import { BarProps } from "../types/components.types";
import Image from "next/image";

const Bar: FunctionComponent<BarProps> = ({
  info,
  onClick,
  dict,
  lang,
}): JSX.Element => {
  return (
    <>
      <div className="bg-blue-900 text-white text-sm px-2 py-1 font-bold flex justify-between">
        <div
          className="relative w-fit h-fit flex"
          dir={["en", "es", "br", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"}
        >
          {info}
        </div>
        <div className="relative w-fit h-fit flex gap-2 flex-row">
          <div className="relative flex w-3 h-4">
            <Image
              src={"/images/sc.png"}
              alt="southern cross"
              layout="fill"
              draggable={false}
            />
          </div>
          <div
            className="w-4 h-4 bg-white text-black text-xs cursor-pointer active:scale-95 flex items-center justify-center text-center"
            onClick={() => onClick()}
          >
            x
          </div>
        </div>
      </div>
      <div
        className="flex gap-4 text-xs px-2 py-1 border-b border-gray-300 bg-gray-100"
        dir={["en", "es", "br", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"}
      >
        <div className="relative w-fit h-fit">{dict?.file}</div>
        <div className="relative w-fit h-fit">{dict?.edit}</div>
        <div className="relative w-fit h-fit">{dict?.view}</div>
        <div className="relative w-fit h-fit">{dict?.help}</div>
      </div>
    </>
  );
};

export default Bar;
