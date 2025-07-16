type Props = {
  label: React.ReactNode;
  children: React.ReactNode;
};

export function Dropdown({ label, children }: Props) {
  return (
    <li className="nav-item dropdown">
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="languageDropdown">
        {children}
      </ul>
    </li>
  );
}
