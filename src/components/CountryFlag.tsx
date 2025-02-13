import {Country} from "../types/Country.ts";

interface CountryFlagProps {
    country: Country;
    width?: string;
}
export default function CountryFlag({ country, width = "24px" }: CountryFlagProps) {
    return (
        <img
            alt={country.name}
            src={`https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png`}
            className={`mr-2 flag flag-${country.code.toLowerCase()}`}
            style={{ width }} // ✅ Corrected
        />
    );
}
