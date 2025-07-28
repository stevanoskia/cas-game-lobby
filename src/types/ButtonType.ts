export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "icon";
  icon?: "heart";
  active?: boolean;
}