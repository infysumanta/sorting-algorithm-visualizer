/**
 * The animation speed for the sorting algorithm visualizer.
 * This constant represents the minimum number of milliseconds between each animation frame.
 */
export const MNI_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

/**
 * Generates a random number within the specified range.
 *
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (inclusive).
 * @returns A random number within the specified range.
 */
export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Represents the available sorting algorithm options.
 */
export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
];
