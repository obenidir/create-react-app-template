import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./router";
import Context from "./context";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Context>
        <Router />
      </Context>
    </QueryClientProvider>
  );
}

export default App;
