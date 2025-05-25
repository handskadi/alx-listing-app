export interface CardProps {
  image: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
