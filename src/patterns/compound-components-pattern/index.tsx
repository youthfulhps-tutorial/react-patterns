import { SelectContextProvider, SelectContextValue } from "./useSelectContext";
import { ReactNode } from "react";
import Select from "./Select";
import OptionList from "./OptionList";

type CompoundComponentsPatternSelectProps = {
  children: ReactNode;
} & SelectContextValue;

function CompoundComponentsPatternSelect({
  children,
  selectableOptions,
  onChange,
}: CompoundComponentsPatternSelectProps) {
  return (
    <SelectContextProvider value={{ selectableOptions, onChange }}>
      {children}
    </SelectContextProvider>
  );
}

CompoundComponentsPatternSelect.Select = Select;
CompoundComponentsPatternSelect.OptionList = OptionList;

export default CompoundComponentsPatternSelect;
