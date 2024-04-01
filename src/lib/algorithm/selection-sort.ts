import { AnimationArrayType } from "@/lib/types";

/**
 * Sorts an array using the selection sort algorithm.
 * @param array - The array to be sorted.
 * @param animations - An array to store the animations for visualization.
 */
function runSelectionSort(array: number[], animations: AnimationArrayType) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([[j, i], false]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    animations.push([[i, array[minIndex]], true]);
    animations.push([[minIndex, array[i]], true]);
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}

/**
 * Generates an animation array for the selection sort algorithm.
 *
 * @param isSorting - A boolean indicating whether the sorting process is currently running.
 * @param array - The array to be sorted.
 * @param runAnimation - A function that runs the animation using the generated animation array.
 */
export function generateSelectionSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runSelectionSort(auxiliaryArray, animations);
  runAnimation(animations);
}
