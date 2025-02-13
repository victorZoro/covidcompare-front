import CountryFlag from "./CountryFlag.tsx";
import {Country} from "../types/Country.ts";

interface CountryComponentProps {
    country: Country;
    labelClassName?: string;

}

export default function CountryComponent({ country, labelClassName }: CountryComponentProps) {
    return (
        <div className="flex items-center">
            <CountryFlag country={country} />
            <span className={labelClassName}>{country.name}</span>
        </div>
    );
}