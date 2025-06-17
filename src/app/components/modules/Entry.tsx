"use client";

import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { DndContext } from "@dnd-kit/core";
import NoiseCanvas from "./Noise";
import Sidebar from "./Sidebar";
import Image from "next/image";
import useDnd from "../hooks/useDnd";
import { Window } from "../types/components.types";
import Gallery from "./Gallery";
import Taskbar from "./Taskbar";
import About from "./About";
import Languages from "./Languages";
import { useContext } from "react";
import { ModalContext } from "@/app/providers";

export default function Entry({ dict, lang }: { dict: any; lang: string }) {
  const context = useContext(ModalContext);
  const { sensors, changeLanguage, handleDragEnd } = useDnd();

  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden">
      <Sidebar dict={dict} />
      <DndContext
        onDragEnd={handleDragEnd}
        sensors={sensors}
        modifiers={[restrictToWindowEdges]}
      >
        {context?.windows.includes(Window.Gallery) && (
          <Gallery lang={lang} dict={dict} />
        )}
        {context?.windows.includes(Window.About) && (
          <About lang={lang} dict={dict} />
        )}
        {context?.windows.includes(Window.Languages) && (
          <Languages changeLanguage={changeLanguage} dict={dict} lang={lang} />
        )}
      </DndContext>
      <Taskbar lang={lang} dict={dict} />
    </div>
  );
}
