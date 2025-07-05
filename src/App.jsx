import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
=======
import Home from "./pages/Home";
>>>>>>> 498269e (Initial commit)
import ReportPage from "./pages/ReportPage";
import CallLogPage from "./pages/CallLogPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<ReportPage />} />
=======
        <Route path="/" element={<Home />} /> {/* 👈 New Home Page */}
        <Route path="/report" element={<ReportPage />} />
>>>>>>> 498269e (Initial commit)
        <Route path="/logs" element={<CallLogPage />} />
        <Route path="/edit/:index" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
