export type Props = {
  items: Item[];
  selectedItem: string;
  onChangeItem: (text: string) => void;
};

type Item = {
  label: string;
  value: string;
};
