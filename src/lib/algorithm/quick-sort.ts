import { AnimationArrayType } from "@/lib/types";

/**
 * Partitions the given array around a pivot element and returns the index of the pivot element.
 *
 * @param array - The array to be partitioned.
 * @param begin - The starting index of the partition.
 * @param finish - The ending index of the partition.
 * @param animations - An array to store the animations for visualization.
 * @returns The index of the pivot element after partitioning.
 */
function partition(
  array: number[],
  begin: number,
  finish: number,
  animations: AnimationArrayType,
) {
  let i = begin;
  let j = finish + 1;
  const condition = true;
  const pivot = array[begin];
  while (condition) {
    while (array[++i] <= pivot) {
      if (i === finish) break;
      animations.push([[i], false]);
    }
    while (array[--j] >= pivot) {
      if (j === begin) break;
      animations.push([[j], false]);
    }
    if (j <= i) break;
    animations.push([[i, array[j]], true]);
    animations.push([[j, array[i]], true]);
    [array[i], array[j]] = [array[j], array[i]];
  }
  animations.push([[begin, array[j]], true]);
  animations.push([[j, array[begin]], true]);
  [array[begin], array[j]] = [array[j], array[begin]];
  return j;
}

/**
 * Runs the quicksort algorithm on the given array.
 *
 * @param array - The array to be sorted.
 * @param begin - The starting index of the subarray to be sorted.
 * @param finish - The ending index of the subarray to be sorted.
 * @param animations - An array to store the animations for visualization.
 */
function runQuickort(
  array: number[],
  begin: number,
  finish: number,
  animations: AnimationArrayType,
) {
  if (begin < finish) {
    const part = partition(array, begin, finish, animations);
    runQuickort(array, begin, part - 1, animations);
    runQuickort(array, part + 1, finish, animations);
  }
}

/**
 * Generates the animation array for the Quick Sort algorithm.
 *
 * @param isSorting - A boolean indicating whether the sorting process is currently running.
 * @param array - The array to be sorted.
 * @param runAnimation - A function that runs the animation for the sorting process.
 * @returns If `isSorting` is true or the length of the array is less than or equal to 1, the function returns `undefined`. Otherwise, it returns the sorted array.
 */
export function generateQuickSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return array;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runQuickort(auxiliaryArray, 0, array.length - 1, animations);
  runAnimation(animations);
}
