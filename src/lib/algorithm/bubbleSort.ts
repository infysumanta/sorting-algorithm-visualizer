import { AnimationArrayType } from "@/lib/types";

/**
 * Sorts an array using the bubble sort algorithm.
 * @param array - The array to be sorted.
 * @param animations - An array to store the animations for visualization.
 */
function runBubbleSort(array: number[], animations: AnimationArrayType) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([[j, j + 1], false]);
      if (array[j] > array[j + 1]) {
        animations.push([[j, array[j + 1]], true]);
        animations.push([[j + 1, array[j]], true]);
        [[array[j], array[j + 1]]] = [[array[j + 1], array[j]]];
      }
    }
  }
}

/**
 * Generates the animation array for the Bubble Sort algorithm.
 *
 * @param isSorting - A boolean indicating whether the sorting is in progress.
 * @param array - The array of numbers to be sorted.
 * @param runAnimation - A function that runs the animation with the generated animation array.
 * @returns void
 */
export function generateBubbleSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runBubbleSort(auxiliaryArray, animations);
  runAnimation(animations);
}
