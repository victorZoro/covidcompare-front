import axios from 'axios';
import {BenchmarkRequest} from "../types/Benchmark.ts";


const API_URL: string | undefined = import.meta.env.VITE_API_URL;

export const getBenchmarks = async () => {
    return tryCatchWithThrow(async () => {
        const response = await axios.get(`${API_URL}/benchmark`);
        return response.data;
    }, 'Error fetching benchmarks');
};

export const saveBenchmark = async (benchmark: BenchmarkRequest) => {
    return tryCatchWithThrow(async () => {
        const response = await axios.post(`${API_URL}/benchmark`, benchmark);
        return response.data
    }, 'Error saving benchmark');
}

export const getBenchmark = async (id: string) => {
    return tryCatchWithThrow(async () => {
        const response = await axios.get(`${API_URL}/benchmark/${id}`);
        return response.data;
    }, 'Error fetching benchmark');
}

const tryCatchWithThrow = async <T>(fn: () => Promise<T>, message: string): Promise<T> => {
    try {
        return await fn();
    } catch (error) {
        console.error(message, error);
        throw error;
    }
};
