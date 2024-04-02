import VisualzerComponent from "@/components/visualizer";
import { Suspense } from "react";

export default function VisualizerPage() {
  return (
    <>
      <Suspense>
        <VisualzerComponent />
      </Suspense>
    </>
  );
}
