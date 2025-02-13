import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { BenchmarkResponse } from "../../types/Benchmark";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { countries } from "../../data/Countries.ts";

interface ChartData {
    data: BenchmarkResponse;
}

export default function TotalCasesOverTime({ data }: ChartData) {
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
        const casesA = sortedDataA.map(entry => entry.totalCases);
        const casesB = sortedDataB.map(entry => entry.totalCases);

        const options = {
            title: {
                text: "Casos Totais x Tempo",
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
                name: "Casos Totais",
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
                    data: casesA,
                    smooth: true,
                },
                {
                    name: countryBName,
                    type: "line",
                    data: casesB,
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
