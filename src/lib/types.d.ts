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
