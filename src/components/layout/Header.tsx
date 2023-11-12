import ThemeToggle from "../theming/ThemeToggle";
import imgUrl from "@/assets/mkfd-logo.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center">
        <div className="flex items-center gap-3">
          <img className="h-12 w-12" src={imgUrl} alt="app logo" />
          <h2>mkfd</h2>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
