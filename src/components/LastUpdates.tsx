import {BenchmarkCard} from "./BenchmarkCard.tsx";
import {useEffect, useState} from "react";
import {getBenchmarks} from "../api/api.ts";
import {BenchmarkSimpleResponse} from "../types/Benchmark.ts";

export default function LastUpdates() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getBenchmarks();
            setData(data);
        }
        getData();
    }, [])

    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <header>
                <h2 className="font-bold text-indigo-400">
                    Últimas Atualizações
                </h2>
            </header>
            <section className="flex gap-4">
                {data ? data.map((benchmark: BenchmarkSimpleResponse) =>
                    <BenchmarkCard key={benchmark.id} data={benchmark} />)
                    : <p>Carregando...</p>
                }
            </section>
        </div>
    );
}