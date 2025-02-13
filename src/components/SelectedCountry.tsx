import { Button } from 'primereact/button';
import {Country} from "../types/Country.ts";

export interface SelectedCountryDisplayProps {
    selectedCountry: Country | null;
    setSelectedCountry: (country: Country | null) => void;
}

function SelectedCountryDisplay(props: SelectedCountryDisplayProps) {
    const { selectedCountry, setSelectedCountry } = props;

    return (
        <div className="flex items-center justify-between px-3 py-2">
            {selectedCountry ? (
                <>
          <span>
            <b>{selectedCountry.name}</b> foi selecionado.
          </span>
                    <Button
                        type="button"
                        onClick={function () { setSelectedCountry(null); }}
                        label="Limpar"
                        className="p-button-text"
                    />
                </>
            ) : (
                'Nenhum país foi selecionado.'
            )}
        </div>
    );
}

export default SelectedCountryDisplay;
