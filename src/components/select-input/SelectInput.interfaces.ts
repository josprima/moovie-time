export type OptionType = {
  label: string;
  value: string;
};

export interface SelectInputProps {
  value: string;
  onSelect: (option: OptionType) => void;
  options: OptionType[];
}
