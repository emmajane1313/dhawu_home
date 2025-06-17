"use client";

import { useEffect, useRef } from "react";

export default function NoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const noise = (ctx: CanvasRenderingContext2D) => {
      const w = ctx.canvas.width;
      const h = ctx.canvas.height;
      const idata = ctx.createImageData(w, h);
      const data = idata.data;

      const colorPool = [
        [1, 33, 105],
        [228, 0, 43],
        [204, 0, 0],
        [255, 255, 0],
      ];

      for (let i = 0; i < data.length; i += 4) {
        const isColor = Math.random() < 0.1;
        if (isColor) {
          const [r, g, b] =
            colorPool[Math.floor(Math.random() * colorPool.length)];
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
        } else {
          const grey = (255 * Math.random()) | 0;
          data[i] = grey;
          data[i + 1] = grey;
          data[i + 2] = grey;
        }
        data[i + 3] = 255;
      }

      ctx.putImageData(idata, 0, 0);
    };

    let toggle = true;
    const loop = () => {
      toggle = !toggle;
      if (toggle) {
        requestAnimationFrame(loop);
        return;
      }
      noise(ctx);
      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
}
