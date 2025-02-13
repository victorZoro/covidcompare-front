import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { getBenchmark } from '../../api/api.ts';
import { BenchmarkResponse } from '../../types/Benchmark.ts';
import { useToast } from '../../components/ToastProvider.tsx';
import TotalCasesOverTime from '../../components/charts/TotalCasesOverTime.tsx';
import TotalDeathsOverTime from '../../components/charts/TotalDeathsOverTime.tsx';
import {Main} from '../../components/Main.tsx';
import {Card} from "primereact/card";
import NewCasesOverTime from "../../components/charts/NewCasesOverTime.tsx";
import NewDeathsOverTime from "../../components/charts/NewDeathsOverTime.tsx";
import TotalCasesDeathsPerCountry from "../../components/charts/TotalCasesDeathsPerCountry.tsx";
import RecoveryRatePerCountry from "../../components/charts/RecoveryRatePerCountry.tsx";

export function Dashboard() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [benchmark, setBenchmark] = useState<BenchmarkResponse | null>(null);
    const toast = useToast();

    useEffect(() => {
        const fetchBenchmark = async () => {
            try {
                const data = await getBenchmark(id || '');
                setBenchmark(data);
            } catch (error: any) {
                console.error('Error fetching benchmark', error);
                if (error.response && error.response.status === 404) {
                    toast.current?.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Benchmark not found'
                    });
                    navigate('/not-found');
                } else {
                    toast.current?.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'An error occurred while fetching the benchmark'
                    });
                }
            }
        };
        fetchBenchmark();
    }, [id, toast]);

    if (!benchmark) {
        return <div>Loading...</div>;
    }

    return (
        <Main
            className="flex flex-col justify-center items-center gap-12 w-full h-full p-8"
        >
            <span className="text-indigo-400 font-[700] text-3xl">Dashboard</span>
            <section className="grid grid-cols-4 md:grid-cols-3 gap-6 w-full">
                <Card className="shadow-md rounded-lg p-8 w-full h-96">
                    <TotalCasesOverTime data={benchmark} />
                </Card>
                <Card className="shadow-md rounded-lg p-8 w-full h-96">
                    <TotalDeathsOverTime data={benchmark} />
                </Card>
                <Card className="shadow-md rounded-lg p-8 w-full h-96">
                    <NewCasesOverTime data={benchmark} />
                </Card>
                <Card className="shadow-md rounded-lg p-8 w-full h-96">
                    <NewDeathsOverTime data={benchmark} />
                </Card>
                <Card className="shadow-md rounded-lg p-8 w-full h-96">
                    <TotalCasesDeathsPerCountry data={benchmark} />
                </Card>
                <Card className="shadow-md rounded-lg p-8 w-full h-96">
                    <RecoveryRatePerCountry data={benchmark} />
                </Card>
            </section>
        </Main>
    );
}
