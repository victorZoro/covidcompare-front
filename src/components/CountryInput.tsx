import {Button} from "primereact/button";
import {saveBenchmark} from "../api/api.ts";
import CountryDropdown from "./CountryDropdown.tsx";
import {useState} from 'react';
import {useToast} from "./ToastProvider.tsx";
import {useNavigate} from "react-router-dom";

export  function CountryInput() {
    const navigate = useNavigate();
    const [countryA, setCountryA] = useState<string>("");
    const [countryB, setCountryB] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();

    const handleSaveBenchmark = async () => {
        if (!countryA || !countryB) {
            toast.current?.show({
                severity: 'warn',
                summary: 'Atenção',
                detail: 'Selecione dois países para salvar o benchmark'
            });
            return;
        }
        setLoading(true);
        try {
            const benchmark = await saveBenchmark({ countryA, countryB });
            toast.current?.show({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Benchmark salvo com sucesso'
            });
            navigate(`/dashboard/${benchmark.id}`);
        } catch (error: any) {
            console.error("Error saving benchmark", error);
            const errorMessage = error.status === 404
                ? `Não existem dados para o país ${error.response.data.errors.field}`
                : 'Erro ao salvar benchmark';
            toast.current?.show({
                severity: 'error',
                summary: 'Erro',
                detail: errorMessage
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <section className="flex w-150 gap-4 justify-center">
                <CountryDropdown placeholder="País 1" onChange={(country) => setCountryA(country|| "")} />
                <CountryDropdown placeholder="País 2" onChange={(country) => setCountryB(country || "")} />
            </section>
            <section className="w-full flex justify-center">
                <Button
                    label="Comparar Dados"
                    icon="pi pi-chart-bar"
                    loading={loading}
                    loadingIcon="pi pi-spin pi-spinner"
                    className="w-50 min-h-12 p-button"
                    onClick={handleSaveBenchmark}
                    pt={{
                        icon: { className: "text-white" },
                        label: { className: "font-bold" }
                    }}
                />
            </section>
        </div>
    )
}