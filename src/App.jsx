import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReportPage from "./pages/ReportPage";
import CallLogPage from "./pages/CallLogPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReportPage />} />
        <Route path="/logs" element={<CallLogPage />} />
        <Route path="/edit/:index" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
