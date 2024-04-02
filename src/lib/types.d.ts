/**
 * Represents the type for select options.
 */
export type SelectOptionsType = {
  label: string;
  value: string;
};

/**
 * Represents the type of animation speed for the sorting algorithm visualizer.
 * It can be one of the following values: "slow", "medium", "fast", or "lightning".
 */
export type AnimateSpeedType = "slow" | "medium" | "fast" | "lighning";

/**
 * Represents the type of sorting algorithm.
 * Possible values are: "bubble", "insertion", "selection", "merge", "quick".
 */
export type SortingAlgorithmType =
  | "bubble"
  | "insertion"
  | "selection"
  | "merge"
  | "quick";

/**
 * Represents information about an algorithm.
 */
export type AlgorithmInfo = {
  /**
   * The title of the algorithm.
   */
  title: string;

  /**
   * A description of the algorithm.
   */
  description: string;

  /**
   * The worst-case time complexity of the algorithm.
   */
  worstCase: string;

  /**
   * The average-case time complexity of the algorithm.
   */
  averageCase: string;

  /**
   * The best-case time complexity of the algorithm.
   */
  bestCase: string;

  /**
   * The key of the algorithm.
   */
  key: string;
};

/**
 * Represents the data structure for sorting algorithms.
 */
export type SortingAlgorithmsData = {
  [key in SortingAlgorithmType]: AlgorithmInfo;
};

/**
 * Represents an array of animations for visualizing sorting algorithms.
 * Each animation consists of a pair of a number array and a boolean value.
 */
export type AnimationArrayType = [number[], boolean][];

/**
 * Represents the context type for the sorting algorithm.
 */
export interface SortingAlgorithmContextType {
  /**
   * The array to be sorted.
   */
  arrayToSort: number[];

  /**
   * The selected sorting algorithm.
   */
  selectedAlgorithm: SortingAlgorithmType;

  /**
   * Indicates whether the sorting is in progress.
   */
  isSorting: boolean;

  /**
   * Sets the selected sorting algorithm.
   * @param algorithm - The sorting algorithm to be set.
   */
  setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;

  /**
   * Sets the sorting status.
   * @param isSorting - The sorting status to be set.
   */
  setIsSorting: (isSorting: boolean) => void;

  /**
   * The animation speed for the sorting visualization.
   */
  animationSpeed: number;

  /**
   * Sets the animation speed.
   * @param speed - The animation speed to be set.
   */
  setAnimationSpeed: (speed: number) => void;

  /**
   * Resets the array and animation.
   */
  resetArrayAndAnimation: () => void;

  /**
   * Runs the animation for the sorting visualization.
   * @param animations - The array of animations to be run.
   */
  runAnimation: (animations: AnimationArrayType) => void;

  /**
   * Indicates whether the animation is complete.
   */
  isAnimationComplete: boolean;

  /**
   * Indicates whether a reset is required.
   */
  requiresReset: boolean;
}
