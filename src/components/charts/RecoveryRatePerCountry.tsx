import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { BenchmarkResponse } from "../../types/Benchmark";
import { countries } from "../../data/Countries.ts";

interface ChartData {
    data: BenchmarkResponse;
}

export default function RecoveryRatePerCountry({ data }: ChartData) {
    const [chartOptions, setChartOptions] = useState<any>(null);

    useEffect(() => {
        if (!data) return;

        const countryA = data.countryA;
        const countryB = data.countryB;

        const countryAName = countries[countryA.name].name;
        const countryBName = countries[countryB.name].name;

        const options = {
            title: {
                text: "Taxa de Recuperação x Taxa de Mortes",
                left: "center",
            },
            tooltip: {
                trigger: "item",
            },
            legend: {
                show: false,
            },
            series: [
                {
                    name: countryAName,
                    type: "pie",
                    radius: "50%",
                    center: ["25%", "50%"],
                    data: [
                        { value: countryA.recoveryRate, name: "Taxa de Recuperação" },
                        { value: countryA.deathRate, name: "Taxa de Mortes" },
                    ],
                },
                {
                    name: countryBName,
                    type: "pie",
                    radius: "50%",
                    center: ["75%", "50%"],
                    data: [
                        { value: countryB.recoveryRate, name: "Taxa de Recuperação" },
                        { value: countryB.deathRate, name: "Taxa de Mortes" },
                    ],
                },
            ],
        };
        setChartOptions(options);
    }, [data]);

    return chartOptions ? <ReactECharts option={chartOptions} className="min-w-full h-400" /> : null;
}
