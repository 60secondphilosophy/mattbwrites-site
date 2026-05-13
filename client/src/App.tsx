import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import ValueForValue from "./pages/ValueForValue";
import Books from "./pages/Books";
import BonusMaterial from "./pages/BonusMaterial";
import Blog from "./pages/Blog";
import AirHockey from "./pages/AirHockey";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/value-for-value"} component={ValueForValue} />
      <Route path={"/about"} component={About} />
      <Route path={"/books"} component={Books} />
      <Route path={"/bonus"} component={BonusMaterial} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/air-hockey"} component={AirHockey} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
