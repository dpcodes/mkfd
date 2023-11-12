import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import ThemeProvider from "./components/theming/ThemeProvider";
import "@/css/globals.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mkfd-ui-theme">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
