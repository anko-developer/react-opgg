import "./App.css";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header/Header";
import { RoitApiProvider } from "./context/RoitApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <RoitApiProvider>
        <QueryClientProvider client={queryClient}>
            <Outlet />
        </QueryClientProvider>
      </RoitApiProvider>
    </>
  );
}

export default App;
