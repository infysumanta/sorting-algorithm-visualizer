import { AnimationArrayType } from "@/lib/types";

/**
 * Merges two sorted subarrays into a single sorted subarray.
 *
 * @param array - The array containing the subarrays to be merged.
 * @param begin - The starting index of the first subarray.
 * @param middle - The ending index of the first subarray and the starting index of the second subarray.
 * @param finish - The ending index of the second subarray.
 * @param animations - An array to store the animations for visualization.
 */
function merge(
  array: number[],
  begin: number,
  middle: number,
  finish: number,
  animations: AnimationArrayType,
) {
  const left = array.slice(begin, middle);
  const right = array.slice(middle, finish);

  let i = 0;
  let j = 0;
  let k = begin;
  while (i < left.length && j < right.length) {
    animations.push([[begin + i, middle + j], false]);
    if (left[i] <= right[j]) {
      animations.push([[k, left[i]], true]);
      array[k] = left[i];
      i += 1;
    } else {
      animations.push([[k, right[j]], true]);
      array[k] = right[j];
      j += 1;
    }
    k++;
  }
  while (i < left.length) {
    animations.push([[begin + i], false]);
    animations.push([[k, left[i]], true]);
    array[k] = left[i];
    i += 1;
    k += 1;
  }
  while (j < right.length) {
    animations.push([[middle + j], false]);
    animations.push([[k, right[j]], true]);
    array[k] = right[j];
    j += 1;
    k += 1;
  }
}

/**
 * Runs the merge sort algorithm on the given array and returns the animations array.
 *
 * @param array - The array to be sorted.
 * @returns The animations array containing the steps of the merge sort algorithm.
 */
function runMergeSort(array: number[]) {
  const animations: AnimationArrayType = [];
  for (let k = 1; k < array.length; k = 2 * k) {
    for (let i = 0; i < array.length; i += 2 * k) {
      const begin = i;
      const middle = i + k;
      const finish = Math.min(i + 2 * k, array.length);
      merge(array, begin, middle, finish, animations);
    }
  }
  return animations;
}

/**
 * Generates the animation array for the merge sort algorithm.
 *
 * @param isSorting - A boolean indicating whether the sorting is in progress.
 * @param array - The array to be sorted.
 * @param runAnimation - A function to run the animations.
 */
export function generateMergeSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const auxiliaryArray = array.slice();
  const animations = runMergeSort(auxiliaryArray);
  runAnimation(animations);
}
