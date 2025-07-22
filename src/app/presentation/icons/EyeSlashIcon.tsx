type Props = {
  className?: string;
  onClick?: () => void;
};

export default function EyeSlashIcon({ className, onClick }: Props) {
  return <i className={`bi bi-eye-slash ${className}`} onClick={onClick}></i>;
}
