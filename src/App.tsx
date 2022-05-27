import { useState } from "react";
import Login from "./pages/login";
import Home from "./pages/home";

export type Ipages = {
  type: "login" | "home";
};

function App() {
  const [page, setPage] = useState<Ipages>({ type: "login" });

  return (
    <>
      {page.type === "login" && (
        <Login setPage={(page: Ipages) => setPage(page)} />
      )}
      {page.type === "home" && <Home />}
    </>
  );
}

export default App;
