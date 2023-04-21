import { Dispatch, SetStateAction, useState } from "react";
import { SelectableOptionKey } from "../../_shared/types";

type HeadlessSelectProps = {
  selectedOption: SelectableOptionKey;
  setSelectedOption: Dispatch<SetStateAction<SelectableOptionKey>>;
};

type HeadlessPatternSelectProps = {
  children: (props: HeadlessSelectProps) => JSX.Element;
};

function HeadlessPatternSelect(props: HeadlessPatternSelectProps) {
  const [selectedOption, setSelectedOption] =
    useState<SelectableOptionKey>("Banana");

  if (!props.children || typeof props.children !== "function") return null;

  return props.children({
    selectedOption,
    setSelectedOption,
  });
}

export default HeadlessPatternSelect;
