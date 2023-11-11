import ThemeProvider from "./components/theming/ThemeProvider";
import ThemeToggle from "./components/theming/ThemeToggle";
import { Button } from "./components/ui/button";
import "@/css/globals.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mkfd-ui-theme">
      <div className="relative flex min-h-screen flex-col">
        <div className="flex gap-5">
          <Button>Click</Button>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
