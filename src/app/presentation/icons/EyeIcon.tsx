type Props = {
  className?: string;
  onClick?: () => void;
};

export default function EyeICon({ className, onClick }: Props) {
  return <i className={`bi bi-eye ${className}`} aria-hidden="true" onClick={onClick}></i>;
}
