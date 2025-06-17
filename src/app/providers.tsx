"use client";

import { createContext, SetStateAction, useState } from "react";
import { Position, Window } from "./components/types/components.types";
import NoiseCanvas from "./components/modules/Noise";
import Image from "next/image";

export const ModalContext = createContext<
  | {
      windows: Window[];
      setWindows: (e: SetStateAction<Window[]>) => void;
      position: Position;
      setPosition: (e: SetStateAction<Position>) => void;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Window[]>([Window.Gallery]);
  const [position, setPosition] = useState<Position>({
    gallery: { x: 0, y: 0 },
    about: { x: 0, y: 0 },
    languages: { x: 0, y: 0 },
  });

  return (
    <ModalContext.Provider
      value={{
        position,
        setPosition,
        windows,
        setWindows,
      }}
    >
      <NoiseCanvas />
      <div className="absolute z-[-1] top-0 left-0 w-full h-full flex opacity-85">
        <Image
          layout="fill"
          objectFit="cover"
          draggable={false}
          src={`/images/bg.png`}
          alt="Dhäwu Home | Emma-Jane MacKinnon-Lee"
        />
      </div>
      {children}
    </ModalContext.Provider>
  );
}
