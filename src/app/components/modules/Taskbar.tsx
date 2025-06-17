import { ModalContext } from "@/app/providers";
import Image from "next/image";
import { useContext } from "react";
import { ComponentProps } from "../types/components.types";

export default function Taskbar({ dict, lang }: ComponentProps) {
  const context = useContext(ModalContext);
  return (
    <div className="fixed bottom-0 left-0 right-0 h-fit galaxy:gap-0 gap-3 galaxy:h-6 flex items-center justify-center galaxy:justify-between bg-gray-300 border-t text-center border-gray-500 z-50 galaxy:flex-nowrap flex-wrap">
      <div className="relative w-fit h-fit flex items-center h-full border-r border-gray-500 flex-row gap-2">
        <div className="h-full px-2 flex items-center bg-gray-100 border border-white border-t-gray-500 border-l-gray-500 font-bold text-xs flex-row gap-1">
          <div className="relative w-4 h-4 flex">
            <Image
              alt="start"
              src={"/images/start.png"}
              draggable={false}
              layout="fill"
            />
          </div>
          <div className="relative w-fit h-fit flex sm:whitespace-nowrap"> {dict?.start}</div>
        </div>
        <div className="flex p-1 relative text-xs border border-gray-500 shadow-inner">
          Dhäwu
        </div>
        {context?.windows?.map((window, indice) => {
          return (
            <div
              key={indice}
              className="flex p-1 w-fit h-fit relative text-xs border border-gray-500 shadow-inner sm:whitespace-nowrap"
            >
              {dict?.[window]}
            </div>
          );
        })}
      </div>
      <h1
        className="relative w-full h-fit mr-2 text-center text-xs galaxy:text-right text-black/80"
        dir={["en", "es", "pt", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"}
      >
        {dict?.made}{" "}
        <a
          href="https://emmajanemackinnonlee.com"
          className="text-blue-700 underline"
        >
          Emma-Jane MacKinnon-Lee
        </a>
      </h1>
    </div>
  );
}
