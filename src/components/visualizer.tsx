"use client";

import SelectCmponent from "@/components/select-component";
import SliderComponent from "@/components/slider-component";
import { useSortingAlgorithmContext } from "@/hooks/use-sorting-algorithm";
import { generateAnimationArray } from "@/lib/algo";
import { sortingAlgorithmsData } from "@/lib/constant";
import { SortingAlgorithmType } from "@/lib/types";
import { algorithmOptions } from "@/lib/utils";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

export default function VisualzerComponent() {
  const {
    arrayToSort,
    isSorting,
    setAnimationSpeed,
    animationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation,
  } = useSortingAlgorithmContext();
  const router = useRouter();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    router.push(`visualizer/?algorithm=${e.target.value}`);
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }

    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation,
    );
  };

  return (
    <main className="absolute top-0 h-screen w-screen z-[-2]  bg-gradient-to-t from-indigo-950 via-purple-950 to-pink-950">
      <div className="flex h-full justify-center">
        <div id="content-container" className="flex w-full flex-col ">
          <div className="h-[66px] relative flex items-center justify-between w-full bg-gradient-to-b from-indigo-950 via-purple-750 to-indigo-950 shadow-lg">
            <div className="container m-auto">
              <header className="flex items-center justify-between w-full ">
                <h1 className="text-gray-300 text-2xl font-semibold hidden md:flex">
                  Sorting Visulizer
                </h1>
                <div className="flex items-center justify-center gap-4 ">
                  <SliderComponent
                    isDisabled={isSorting}
                    value={animationSpeed}
                    handleChange={(e) =>
                      setAnimationSpeed(Number(e.target.value))
                    }
                  />
                  <SelectCmponent
                    options={algorithmOptions}
                    defaultValue={selectedAlgorithm}
                    onChange={handleSelectChange}
                    isDisabled={isSorting}
                  />
                  <button
                    className="flex items-center justify-center"
                    onClick={handlePlay}
                  >
                    {requiresReset ? (
                      <RxReset className="text-gray-400 h-8 w-8" />
                    ) : (
                      <FaPlayCircle className="text-system-green60 h-8 w-8" />
                    )}
                  </button>
                </div>
              </header>
            </div>

            <div className="hidden sm:flex absolute top-[120%] left-0 w-full">
              <div className="container m-auto">
                <div className="flex w-full text-white p-4 rounded border border-black bg-gradient-to-t from-indigo-900  to-blue-950 gap-6">
                  <div className="flex flex-col items-start justify-start w-3/4">
                    <h3 className="text-lg">
                      {sortingAlgorithmsData[selectedAlgorithm]?.title}
                    </h3>
                    <p className="text-sm text-grey-500 pt-2">
                      {sortingAlgorithmsData[selectedAlgorithm].description}
                    </p>
                  </div>

                  <div className="flex flex-col items-start justify-start w-1/4 gap-2">
                    <h3 className="text-lg">Time Complexity</h3>
                    <div className="flex flex-col gap-2">
                      <p className="flex w-full text-sm text-gray-200">
                        <span className="w-28">Worst Case:</span>
                        <span>
                          {sortingAlgorithmsData[selectedAlgorithm].worstCase}
                        </span>
                      </p>
                      <p className="flex w-full text-sm text-gray-200">
                        <span className="w-28">Average Case:</span>
                        <span>
                          {sortingAlgorithmsData[selectedAlgorithm].averageCase}
                        </span>
                      </p>
                      <p className="flex w-full text-sm text-gray-200">
                        <span className="w-28">Best Case:</span>
                        <span>
                          {sortingAlgorithmsData[selectedAlgorithm].bestCase}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto ">
            <div className="relative h-[calc(100vh-300px)] w-full">
              <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
                {arrayToSort.map((value, index) => (
                  <div
                    key={index}
                    className="array-line relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
                    style={{ height: `${value}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
