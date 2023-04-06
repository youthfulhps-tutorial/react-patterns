import React, { ChangeEventHandler, useState } from "react";
import GeneralSelect from "./patterns/general";
import CompoundComponentsPatternSelect from "./patterns/compound-components-pattern";
import { selectableOptions, SelectableOptionKey } from "./_shared/types";

function App() {
  const [selectedOption, setSelectedOption] =
    useState<SelectableOptionKey>("Banana");

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedOption(e.target.value as SelectableOptionKey);
  };

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
    </div>
  );
}

export default App;
