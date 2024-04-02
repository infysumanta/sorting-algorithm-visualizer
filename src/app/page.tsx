import HomeTiles from "@/components/home-tiiles";
import { sortingAlgorithmsData } from "@/lib/constant";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#004680] to-[#4484BA] h-screen w-screen p-10">
      <div className="text-4xl text-center font-bold text-white">
        Sorting Visualizer
      </div>
      <div className="text-center text-white text-lg mt-5">
        Select a sorting algorithm to visualize
      </div>
      <div className="container m-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(sortingAlgorithmsData).map(([key, value]) => {
            return (
              <div key={key}>
                <HomeTiles value={value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
