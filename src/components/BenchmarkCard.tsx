import {Card} from "primereact/card";
import CountryFlag from "./CountryFlag.tsx";
import {Country} from "../types/Country.ts";
import {BenchmarkSimpleResponse} from "../types/Benchmark.ts";
import {countries} from "../data/Countries.ts";
import {useNavigate} from "react-router-dom";
import {format} from "date-fns";

interface BenchmarkCardProps {
    data: BenchmarkSimpleResponse;
}

export function BenchmarkCard({data} : BenchmarkCardProps) {
    const navigate = useNavigate();

    const header = (
        <div className="flex items-center justify-end">
            <i className="pi pi-external-link text-gray-600 group-hover:text-blue-500 duration-200"></i>
        </div>
    );

    const handleCardClick = () => {
        navigate(`/dashboard/${data.id}`);
    }

    const getCountry = (name: string) => {
        const country: Country = countries[name];
        return <div className="flex items-center">
            <CountryFlag country={country} />
            <span className="text-lg font-bold capitalize">{country.name}</span>
        </div>
    }

    const getBenchmarkTitle = (): React.ReactNode => {
        return <div className="flex gap-2">
            <span>{getCountry(data.countryA)}</span>
            x
            <span>{getCountry(data.countryB)}</span>
        </div>
    };

    return (
        <Card
            header={header}
            className="p-2 w-80 h-40 cursor-pointer rounded-lg shadow-md hover:scale-110 transition-transform duration-300 group"
            onClick={() => handleCardClick()}
        >
            <div className="flex flex-col items-center">
                {getBenchmarkTitle()}
                <span className="text-sm text-gray-500">
                    Atualizado em {format(new Date(data.updatedAt), 'dd/MM/yyyy \'às\' HH:mm')}
                </span>
            </div>
        </Card>
    );
}