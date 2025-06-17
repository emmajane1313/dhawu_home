import { itemStringToLocale, LOCALES_DISPLAY } from "@/app/lib/constantes";
import {
  LanguagesProps,
  ComponentProps,
  Window,
} from "../types/components.types";
import { useContext } from "react";
import { ModalContext } from "@/app/providers";
import { useDraggable } from "@dnd-kit/core";
import Bar from "./Bar";

export default function Languages({
  changeLanguage,
  lang,
  dict,
}: ComponentProps & LanguagesProps) {
  const context = useContext(ModalContext);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "languages",
  });
  const base = context?.position.languages || { x: 0, y: 0 };
  const finalTransform = `translate3d(${(transform?.x || 0) + base.x}px, ${
    (transform?.y || 0) + base.y
  }px, 0)`;

  return (
    <div
      ref={setNodeRef}
      className={`absolute border-2 cursor-grab active:cursor-grabbing border-gray-800 bg-gray-200 w-3/4 galaxy:w-1/2 md:w-[360px] shadow-2xl will-change-transform`}
      style={{
        transform: finalTransform,
        zIndex: ((context?.windows?.indexOf(Window.Languages) ?? 0) + 1) * 10,
      }}
      {...listeners}
      {...attributes}
    >
      <Bar
        lang={lang}
        dict={dict}
        info={dict?.system}
        onClick={() =>
          context?.setWindows((prev) =>
            prev?.filter((item) => item !== Window.Languages)
          )
        }
      />
      <div className="mt-4 border-t border-gray-400 p-2 flex flex-col gap-3">
        <div
          className="font-bold text-blue-800 text-xs"
          dir={["en", "es", "br", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"}
        >
          {dict?.select}
        </div>
        <div
          dir={["en", "es", "br", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"}
          className="flex flex-wrap w-full h-fit gap-2 relative"
        >
          {LOCALES_DISPLAY.map((locale, indice) => {
            return (
              <div
                key={indice}
                className={`w-16 h-12 border-2 flex items-center justify-center text-xs font-bold cursor-pointer ${
                  lang == itemStringToLocale[locale] && "border-yellow-400"
                }`}
                onClick={() => changeLanguage(itemStringToLocale[locale])}
              >
                <div className="w-full h-full flex items-center justify-center text-black">
                  {locale}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
