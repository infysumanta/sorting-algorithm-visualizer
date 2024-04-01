import { generateBubbleSortAnimationArray } from "./algorithm/bubble-sort";
import { generateInsertionSortAnimationArray } from "./algorithm/insertion-sort";
import { generateMergeSortAnimationArray } from "./algorithm/merge-sort";
import { generateQuickSortAnimationArray } from "./algorithm/quick-sort";
import { generateSelectionSortAnimationArray } from "./algorithm/selection-sort";
import { SortingAlgorithmType } from "./types";

/**
 * Generates an animation array based on the selected sorting algorithm.
 * @param selectedAlgorithm - The selected sorting algorithm.
 * @param isSorting - Indicates whether the sorting process is currently running.
 * @param array - The array to be sorted.
 * @param runAnimation - A callback function to run the animation.
 */
export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: [number[], boolean][]) => void,
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}
