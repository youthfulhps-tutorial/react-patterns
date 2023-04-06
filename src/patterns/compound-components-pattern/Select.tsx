import { ReactNode } from "react";
import { useSelectContext } from "./useSelectContext";

type SelectProps = {
  children: ReactNode;
};

function Select({ children }: SelectProps) {
  const { onChange } = useSelectContext();
  return <select onChange={onChange}>{children}</select>;
}

export default Select;
