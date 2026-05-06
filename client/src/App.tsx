import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ValueForValue from "./pages/ValueForValue";
import About from "./pages/About";
import Books from "./pages/Books";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/value-for-value"} component={ValueForValue} />
      <Route path={"/about"} component={About} />
      <Route path={"/books"} component={Books} />
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
