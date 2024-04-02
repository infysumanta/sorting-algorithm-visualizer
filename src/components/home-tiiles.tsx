"use client";
import { AlgorithmInfo } from "@/lib/types";
import { useRouter } from "next/navigation";

interface Props {
  value: AlgorithmInfo;
}
export default function HomeTiles({ value }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/visualizer?algorithm=${value.key}`);
  };
  return (
    <div
      className="p-4 rounded-lg shadow-md cursor-pointer bg-gradient-to-b from-[#C6FFDD] to-[#FBD786]"
      onClick={onClick}
    >
      <h2 className="text-2xl font-semibold">{value.title}</h2>
      <p>{value.description}</p>
      <p>
        <span className="font-semibold">Worst Case:</span> {value.worstCase}
      </p>
      <p>
        <span className="font-semibold">Average Case:</span> {value.averageCase}
      </p>
      <p>
        <span className="font-semibold">Best Case:</span> {value.bestCase}
      </p>
    </div>
  );
}
