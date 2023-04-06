import { useSelectContext } from "./useSelectContext";

function OptionList() {
  const { selectableOptions } = useSelectContext();
  return (
    <>
      {selectableOptions.map((selectableOption) => (
        <option key={selectableOption} value={selectableOption}>
          {selectableOption}
        </option>
      ))}
    </>
  );
}

export default OptionList;
