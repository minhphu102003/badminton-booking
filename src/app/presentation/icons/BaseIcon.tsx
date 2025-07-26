type BaseIconProps = React.HTMLAttributes<HTMLSpanElement> & {
  iconClass: string;
};

export default function BaseIcon({ iconClass, className = '', ...rest }: BaseIconProps) {
  return (
    <span className={className} {...rest}>
      <i className={iconClass}></i>
    </span>
  );
}
