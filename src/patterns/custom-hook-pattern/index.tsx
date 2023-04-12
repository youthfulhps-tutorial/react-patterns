import { SelectableOptionKey } from "../../_shared/types";
import { ChangeEventHandler } from "react";
import GeneralSelect from "../general";

type CustomHookPatternSelectProps = {
  selectableOptions: readonly SelectableOptionKey[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

function CustomHookPatternSelect(props: CustomHookPatternSelectProps) {
  return <GeneralSelect {...props} />;
}

export default CustomHookPatternSelect;
