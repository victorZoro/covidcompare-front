import {Country, CountryResponse} from "./Country.ts";

export type Benchmark = {
    countryA: Country,
    countryB: Country,
}

export interface BenchmarkRequest {
    countryA: string,
    countryB: string,
}

export interface BenchmarkResponse {
    id: string,
    countryA: CountryResponse,
    countryB: CountryResponse,
    updatedAt: Date,
    views: number,
}

export interface BenchmarkSimpleResponse {
    id: string,
    countryA: string,
    countryB: string,
    updatedAt: Date,
    views: number,
}