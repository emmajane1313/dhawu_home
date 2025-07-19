"use client";

import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { ComponentProps, Window } from "../types/components.types";
import { useContext, useState } from "react";
import { ModalContext } from "@/app/providers";
import { PAGINAS } from "@/app/lib/constantes";
import Bar from "./Bar";

export default function Gallery({ dict, lang }: ComponentProps) {
  const context = useContext(ModalContext);
  const [indice, setIndice] = useState<number>(1);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "gallery",
  });
  const base = context?.position.gallery || { x: 0, y: 0 };
  const finalTransform = `translate3d(${(transform?.x || 0) + base.x}px, ${
    (transform?.y || 0) + base.y
  }px, 0)`;

  return (
    <div
      ref={setNodeRef}
      className={`absolute border-2 cursor-grab active:cursor-grabbing border-gray-800 bg-gray-200 w-3/4 galaxy:w-1/2 md:w-[640px] shadow-2xl will-change-transform`}
      style={{
        transform: finalTransform,
        zIndex: ((context?.windows?.indexOf(Window.Gallery) || 0) + 1) * 10,
      }}
      {...listeners}
      {...attributes}
    >
      <Bar
        lang={lang}
        dict={dict}
        info={`${dict?.viewer} - ${PAGINAS[indice - 1]?.titulo}`}
        onClick={() =>
          context?.setWindows((prev) =>
            prev?.filter((item) => item !== Window.Gallery)
          )
        }
      />
      <div className="relative w-full flex flex-col">
        <div
          className={`flex justify-center items-center bg-black ${
            PAGINAS[indice - 1]?.active && "hover:opacity-70 cursor-pointer"
          }`}
          onClick={() =>
            PAGINAS[indice - 1]?.active &&
            window.open(PAGINAS[indice - 1]?.enlace)
          }
        >
          <Image
            src={PAGINAS[indice - 1]?.cover}
            alt={PAGINAS[indice - 1]?.titulo}
            objectFit="cover"
            width={400}
            height={300}
          />
        </div>
        <div className="px-4 py-2 bg-white text-sm border-t border-gray-400">
          <div className="font-bold mb-2">{PAGINAS[indice - 1]?.titulo}</div>
          <div className="flex items-center justify-between">
            <div
              className="px-2 py-1 border border-black bg-gray-200 text-xs cursor-pointer active:scale-95"
              onClick={() =>
                setIndice((prev) => (prev > 1 ? indice - 1 : PAGINAS.length))
              }
            >
              {dict?.prev}
            </div>
            <span
              className="text-xs"
              dir={
                ["en", "es", "pt", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"
              }
            >{`${indice} ${dict?.of} ${PAGINAS.length}`}</span>
            <div
              className="px-2 py-1 border border-black bg-gray-200 text-xs cursor-pointer active:scale-95"
              onClick={() =>
                setIndice((prev) => (prev < PAGINAS.length ? indice + 1 : 1))
              }
            >
              {dict?.next}
            </div>
          </div>
          <div
            dir={["en", "es", "pt", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"}
            className="mt-2 text-xs"
          >{`${dict?.reg} ${indice} ${dict?.of} ${PAGINAS.length}`}</div>
        </div>
      </div>
    </div>
  );
}
