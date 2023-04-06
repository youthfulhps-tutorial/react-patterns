export const selectableOptions = ["Banana", "Apple", "Orange"] as const;
export type SelectableOptionKey = typeof selectableOptions[number];
