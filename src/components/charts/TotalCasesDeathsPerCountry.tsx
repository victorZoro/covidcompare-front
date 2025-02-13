import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { BenchmarkResponse } from "../../types/Benchmark";
import { countries } from "../../data/Countries.ts";

interface ChartData {
    data: BenchmarkResponse;
}

export default function TotalCasesDeathsPerCountry({ data }: ChartData) {
    const [chartOptions, setChartOptions] = useState<any>(null);

    useEffect(() => {
        if (!data) return;

        const countryA = data.countryA;
        const countryB = data.countryB;

        const countryAName = countries[countryA.name].name;
        const countryBName = countries[countryB.name].name;

        const categories = ["Casos Totais", "Mortes Totais"];
        const valuesA = [countryA.totalCases, countryA.totalDeaths];
        const valuesB = [countryB.totalCases, countryB.totalDeaths];

        const options = {
            title: {
                text: "Casos e Mortes Totais por País",
                left: "center",
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: {
                data: [countryAName, countryBName],
                top: 30,
            },
            xAxis: {
                type: "category",
                data: categories,
            },
            yAxis: {
                type: "value",
                name: "Quantidade",
            },
            series: [
                {
                    name: countryAName,
                    type: "bar",
                    data: valuesA,
                },
                {
                    name: countryBName,
                    type: "bar",
                    data: valuesB,
                },
            ],
            grid: {
                left: 80,
            },
        };

        setChartOptions(options);
    }, [data]);

    return chartOptions ? <ReactECharts option={chartOptions} className="min-w-full h-400" /> : null;
}
