import { ChangeEventHandler, useState } from "react";
import { selectableOptions, SelectableOptionKey } from "../../_shared/types";

function useSelect() {
  const [selectedOption, setSelectedOption] =
    useState<SelectableOptionKey>("Banana");

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedOption(e.target.value as SelectableOptionKey);
  };

  return {
    selectableOptions,
    selectedOption,
    setSelectedOption,
    handleSelectChange,
  };
}

export default useSelect;
