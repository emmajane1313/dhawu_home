import { ModalContext } from "@/app/providers";
import {
  DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

const useDnd = () => {
  const router = useRouter();
  const context = useContext(ModalContext);
  const path = usePathname();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { delta, active } = event;
    if (!delta) return;
    context?.setPosition((prev) => {
      const prevPos = prev[active.id as keyof typeof prev] || { x: 0, y: 0 };
      return {
        ...prev,
        [active.id]: {
          x: prevPos.x + delta.x,
          y: prevPos.y + delta.y,
        },
      };
    });
  };

  const changeLanguage = (lang: string) => {
    const segments = path.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${lang}; path=/; SameSite=Lax`;

    router.push(newPath);
  };

  return {
    sensors,
    changeLanguage,
    handleDragEnd,
  };
};

export default useDnd;
