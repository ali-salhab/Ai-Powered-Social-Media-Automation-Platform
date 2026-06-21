import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Accounts from "./pages/Accounts";
import AiComposer from "./pages/AiComposer";
import Scheduler from "./pages/Scheduler";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/me" element={<Me />} /> */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/aicomposer" element={<AiComposer />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Route>
      </Routes>
    </>
  );
}
