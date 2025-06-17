import { useDraggable } from "@dnd-kit/core";
import { ComponentProps, Window } from "../types/components.types";
import { useContext } from "react";
import { ModalContext } from "@/app/providers";
import Bar from "./Bar";

export default function About({ dict, lang }: ComponentProps) {
  const context = useContext(ModalContext);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "about",
  });
  const base = context?.position.about || { x: 0, y: 0 };
  const finalTransform = `translate3d(${(transform?.x || 0) + base.x}px, ${
    (transform?.y || 0) + base.y
  }px, 0)`;

  return (
    <div
      ref={setNodeRef}
      className={`absolute border-2 cursor-grab active:cursor-grabbing border-gray-800 bg-gray-200 w-3/4 galaxy:w-1/2 md:w-[400px] shadow-2xl will-change-transform`}
      style={{
        transform: finalTransform,
        zIndex: ((context?.windows?.indexOf(Window.About) ?? 0) + 1) * 10,
      }}
      {...listeners}
      {...attributes}
    >
      <Bar
        lang={lang}
        dict={dict}
        info={dict?.title}
        onClick={() =>
          context?.setWindows((prev) =>
            prev?.filter((item) => item !== Window.About)
          )
        }
      />
      <div
        className="overflow-auto h-[calc(100%-50px)] p-2 text-xs whitespace-pre-wrap leading-snug"
        dir={["en", "es", "br", "gd", "ym"]?.includes(lang) ? "ltr" : "rtl"}
        dangerouslySetInnerHTML={{ __html: dict?.content ?? "" }}
      ></div>
    </div>
  );
}
