import "./Menu.css";

export type MenuProps = {
  actions: string[];
};

export function Menu({ actions }: MenuProps) {
  return (
    <ul className="menu">
      {actions.map((action) => (
        <li key={action}>
          <button>{action}</button>
        </li>
      ))}
    </ul>
  );
}
