import React, { ChangeEventHandler, useState } from "react";
import GeneralSelect from "./patterns/general";
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
    </div>
  );
}

export default App;
