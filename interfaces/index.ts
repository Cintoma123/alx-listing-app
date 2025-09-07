export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}