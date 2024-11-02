import { Chart } from "react-google-charts";
export default function DahsobardChart() {
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2020", 1000, 400],
        ["2021", 1170, 460],
        ["2022", 660, 1120],
        ["2023", 1030, 540],
      ];

      const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
      };
  return (
    <Chart
    chartType="LineChart"
    width="100%"
    height="100%"
    data={data}
    options={options}
    legendToggle
  />
  );
}
