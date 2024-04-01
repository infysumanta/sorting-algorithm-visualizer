import { SortingAlgorithmsData } from "./types";

export const sortingAlgorithmsData: SortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Bubble Sort is a straightforward comparison-based sorting algorithm. It iterates through the list, repeatedly comparing adjacent elements and swapping them if they are in the wrong order. Larger elements gradually 'bubble up' towards the end of the list with each pass until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion Sort constructs the final sorted array incrementally. It takes each unsorted element and inserts it into its proper position among the previously sorted elements. This process continues until all elements are appropriately placed, resulting in a fully sorted list.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection Sort operates by iteratively locating the minimum element from the unsorted part of the list and swapping it with the element at the current position. This process progresses through each position in the list, gradually expanding the boundary between the sorted and unsorted sections until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge Sort divides the unsorted list into n sublists, each containing one element (a list of one element is inherently sorted). It then merges these sublists in a recursive manner, continually producing new sorted sublists until only one remains, which is the fully sorted list. This algorithm employs a divide-and-conquer strategy by recursively splitting the list in half and merging the sorted halves.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick Sort chooses a 'pivot' element from the array and partitions the remaining elements into two sub-arrays based on whether they are less than or greater than the pivot. These sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the fully sorted array.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
