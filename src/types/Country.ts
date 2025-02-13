export type Country = {
    name: string;
    code: string;
    englishName: string;
}

export interface CountryDropdownProps {
    placeholder: string;
    onChange: (countryName: string) => void;
}

export interface CountryResponse {
    id: string,
    name: string,
    totalCases: number,
    totalDeaths: number,
    totalRecovered: number,
    deathRate: number,
    recoveryRate: number,
    data: CovidData[],
    updatedAt: Date,
}

export interface CovidData {
    date: Date,
    totalCases: number,
    totalDeaths: number,
    newCases: number,
    newDeaths: number,
}


