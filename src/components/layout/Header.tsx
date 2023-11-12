import ThemeToggle from "../theming/ThemeToggle";
import imgUrl from "@/assets/mkfd-logo.jpg";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-12 w-12" src={imgUrl} alt="app logo" />
          <h2 className="font-extrabold">mkfd</h2>
        </div>

        <Navigation />
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
