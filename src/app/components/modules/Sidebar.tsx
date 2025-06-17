import Image from "next/image";
import {
  SidebarButtonProps,
  SidebarProps,
  Window,
} from "../types/components.types";
import { useContext } from "react";
import { ModalContext } from "@/app/providers";

export default function Sidebar({ dict }: SidebarProps) {
  const context = useContext(ModalContext);
  return (
    <div className="flex flex-col absolute top-4 left-4 items-center gap-4 p-2">
      <SidebarButton
        label={dict?.about}
        icon="about"
        onClick={() =>
          context?.setWindows((prev) =>
            !prev?.includes(Window.About) ? [...prev, Window.About] : prev
          )
        }
      />
      <SidebarButton
        label={dict?.gall}
        icon="gallery"
        onClick={() =>
          context?.setWindows((prev) =>
            !prev?.includes(Window.Gallery) ? [...prev, Window.Gallery] : prev
          )
        }
      />
      <SidebarButton
        label={dict?.lang}
        icon="idioma"
        onClick={() =>
          context?.setWindows((prev) =>
            !prev?.includes(Window.Languages)
              ? [...prev, Window.Languages]
              : prev
          )
        }
      />
    </div>
  );
}

export function SidebarButton({ label, icon, onClick }: SidebarButtonProps) {
  return (
    <div
      className={`w-fit h-fit flex flex-col items-center justify-center rounded-lg cursor-pointer hover:opacity-70 active:scale-95 transition-all text-xs text-white`}
      onClick={onClick}
    >
      <div className="w-fit h-fit flex relative">
        <div className="relative w-8 h-8 flex">
          <Image
            draggable={false}
            src={`/images/${icon}.png`}
            layout="fill"
            alt={icon}
          />
        </div>
      </div>
      <div className="relative w-fit h-fit text-center flex">{label}</div>
    </div>
  );
}
