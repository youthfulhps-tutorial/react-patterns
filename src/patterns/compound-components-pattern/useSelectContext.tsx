import {
  ChangeEventHandler,
  createContext,
  ReactNode,
  useContext,
} from "react";
import type { SelectableOptionKey } from "../../_shared/types";

export type SelectContextValue = {
  selectableOptions: readonly SelectableOptionKey[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

type SelectContextProviderProps = {
  children: ReactNode;
  value: SelectContextValue;
};

const selectContextInitialValue: SelectContextValue = {
  selectableOptions: ["Orange", "Banana", "Apple"],
  onChange: (e) => console.log(e),
};

const SelectContext = createContext<SelectContextValue>(
  selectContextInitialValue
);

function SelectContextProvider({
  children,
  value,
}: SelectContextProviderProps) {
  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}

function useSelectContext() {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error("Select context must be used within a SelectProvider");
  }

  return context;
}

export { SelectContextProvider, useSelectContext };
