import {Main} from "../../components/Main.tsx";
import LastUpdates from "../../components/LastUpdates.tsx";
import {Card} from "primereact/card";
import {CountryInput} from "../../components/CountryInput";

export function Home() {
    return (
        <Main
            className="flex flex-col justify-center items-center gap-12"
        >
            <Card>
                <div className="p-4 flex flex-col items-center gap-4">
                    <span>
                        <b>Escolha dois países </b>
                        para comparar dados sobre a pandemia de COVID-19.
                    </span>
                    <CountryInput />
                </div>
            </Card>
            <LastUpdates />
        </Main>
    );
}