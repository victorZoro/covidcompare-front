import {useState} from 'react';
import {Dropdown, DropdownChangeEvent} from 'primereact/dropdown';
import {ChevronDownIcon} from 'primereact/icons/chevrondown';
import {ChevronRightIcon} from 'primereact/icons/chevronright';
import {Country, CountryDropdownProps} from "../types/Country.ts";
import CountryComponent from "./CountryComponent.tsx";
import {countries} from "../data/Countries.ts";
import SelectedCountry from "./SelectedCountry.tsx";

export default function CountryDropdown({ placeholder, onChange }: CountryDropdownProps) {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const selectedCountryTemplate = (option: Country | null, props: any) => {
        return option ? <CountryComponent country={option} />
            : <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: Country) => {
        return <CountryComponent country={option} />;
    };

    const panelFooterTemplate = () => {
        return <SelectedCountry
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
        />;
    };

    const handleCountryChange = (e: DropdownChangeEvent) => {
        setSelectedCountry(e.value);
        onChange(e.value.englishName);
    }

    return (
        <Dropdown
            value={selectedCountry}
            onChange={handleCountryChange}
            options={Object.values(countries)}
            optionLabel='name'
            placeholder={placeholder}
            valueTemplate={selectedCountryTemplate}
            itemTemplate={countryOptionTemplate}
            className='h-12 w-full items-center'
            panelFooterTemplate={panelFooterTemplate}
            filter
            showClear
            dropdownIcon={(opts: any) => {
                return opts.iconProps['data-pr-overlay-visible'] ? (
                    <ChevronRightIcon {...opts.iconProps} />
                ) : (
                    <ChevronDownIcon {...opts.iconProps} />
                );
            }}
        />
    );
}
