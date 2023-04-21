import React, { ChangeEventHandler, useState } from "react";
import { selectableOptions, SelectableOptionKey } from "./_shared/types";
import GeneralSelect from "./patterns/general";
import CompoundComponentsPatternSelect from "./patterns/compound-components-pattern";
import CustomHookPatternSelect from "./patterns/custom-hook-pattern";
import useSelect from "./patterns/custom-hook-pattern/useSelect";
import HeadlessPatternSelect from "./patterns/headless-parttern";

function App() {
  const [selectedOption, setSelectedOption] =
    useState<SelectableOptionKey>("Banana");

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedOption(e.target.value as SelectableOptionKey);
  };

  const useSelectReturnProps = useSelect();

  return (
    <div>
      <GeneralSelect
        selectableOptions={selectableOptions}
        onChange={handleSelectChange}
      />
      <CompoundComponentsPatternSelect
        selectableOptions={selectableOptions}
        onChange={handleSelectChange}
      >
        <CompoundComponentsPatternSelect.Select>
          <CompoundComponentsPatternSelect.OptionList />
        </CompoundComponentsPatternSelect.Select>
      </CompoundComponentsPatternSelect>
      <CustomHookPatternSelect
        selectableOptions={useSelectReturnProps.selectableOptions}
        onChange={useSelectReturnProps.handleSelectChange}
      />
      <HeadlessPatternSelect>
        {({ selectedOption, setSelectedOption }) => (
          <select
            onChange={(e) =>
              setSelectedOption(e.target.value as SelectableOptionKey)
            }
          >
            {selectableOptions.map((selectableOption) => (
              <option key={selectableOption} value={selectableOption}>
                {selectableOption}
              </option>
            ))}
          </select>
        )}
      </HeadlessPatternSelect>
    </div>
  );
}

export default App;
