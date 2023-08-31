"use client";

import {
  ExcalidrawAPIRefValue,
  ExcalidrawProps,
} from "@excalidraw/excalidraw/types/types";
import { useEffect, useState } from "react";

export default function DrawingCanvas() {
  const [ExcaliDraw, setExcaliDraw] = useState<React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      Omit<ExcalidrawProps, "forwardedRef"> &
        React.RefAttributes<ExcalidrawAPIRefValue>
    >
  > | null>(null);
  useEffect(() => {
    import("@excalidraw/excalidraw").then((canvas) =>
      setExcaliDraw(canvas.Excalidraw)
    );
  }, []);

  return (
    <div className="h-screen w-screen">
      <>{ExcaliDraw && <ExcaliDraw UIOptions={{}} />}</>
    </div>
  );
}
