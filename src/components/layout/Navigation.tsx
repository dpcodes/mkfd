import { Link } from "@tanstack/react-router";

export default function Navigation() {
  return (
    <nav className="ml-5 flex gap-4 font-medium">
      <Link to="/characters" activeProps={{ className: "font-bold" }}>
        Characters
      </Link>
      <Link to="/kameos" activeProps={{ className: "font-bold" }}>
        Kameos
      </Link>
    </nav>
  );
}
