import type { ChangeEventHandler } from "react";
import { SelectableOptionKey } from "../_shared/types";

type GeneralSelectProps = {
  selectableOptions: readonly SelectableOptionKey[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

function GeneralSelect({ selectableOptions, onChange }: GeneralSelectProps) {
  return (
    <select onChange={onChange}>
      {selectableOptions.map((selectableOption) => (
        <option key={selectableOption} value={selectableOption}>
          {selectableOption}
        </option>
      ))}
    </select>
  );
}

export default GeneralSelect;
