import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { BenchmarkResponse } from "../../types/Benchmark";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { countries } from "../../data/Countries.ts";

interface ChartData {
    data: BenchmarkResponse;
}

export default function NewDeathsOverTime({ data }: ChartData) {
    const [chartOptions, setChartOptions] = useState<any>(null);

    useEffect(() => {
        if (!data) return;

        const countryA = data.countryA;
        const countryB = data.countryB;

        const countryAName = countries[countryA.name].name;
        const countryBName = countries[countryB.name].name;

        const sortedDataA = [...countryA.data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        const sortedDataB = [...countryB.data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        const dates = sortedDataA.map(entry => format(new Date(entry.date), "dd/MM/yyyy", { locale: ptBR }));
        const deathsA = sortedDataA.map(entry => entry.newDeaths);
        const deathsB = sortedDataB.map(entry => entry.newDeaths);

        const options = {
            title: {
                text: "Novas Mortes x Tempo",
                left: "center",
            },
            tooltip: {
                trigger: "axis",
            },
            legend: {
                data: [countryAName, countryBName],
                top: 30,
            },
            xAxis: {
                type: "category",
                data: dates,
                axisLabel: {
                    show: false,
                },
                axisTicks: {
                    show: true,
                }
            },
            yAxis: {
                type: "value",
                name: "Novas Mortes",
                axisLabel: {
                    formatter: function (value: number) {
                        return value.toLocaleString();
                    }
                }
            },
            dataZoom: [
                {
                    type: "slider",
                    start: 0,
                    end: 10,
                    bottom: "10%",
                },
                {
                    type: "inside",
                },
            ],
            series: [
                {
                    name: countryAName,
                    type: "line",
                    data: deathsA,
                    smooth: true,
                },
                {
                    name: countryBName,
                    type: "line",
                    data: deathsB,
                    smooth: true,
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
