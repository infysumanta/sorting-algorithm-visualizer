import { sortingAlgorithmsData } from "@/lib/constant";

export default function Home() {
  return (
    <>
      {Object.entries(sortingAlgorithmsData).map(([key, value]) => {
        return (
          <div key={key}>
            <h2>{value.title}</h2>
            <p>{value.description}</p>
            <p>Worst Case: {value.worstCase}</p>
            <p>Average Case: {value.averageCase}</p>
            <p>Best Case: {value.bestCase}</p>
          </div>
        );
      })}
    </>
  );
}
