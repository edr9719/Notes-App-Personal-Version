export type NewCategoryProps = {
  newCategory: string;
  setNewCategory: (value: string) => void;
  addNewCategory: () => void;
  setShowAddCategory: (value: boolean) => void;
};

export type ButtonProps = {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  styles?: string;
};
