import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import added here

function ReportPage() {
  const [form, setForm] = useState({
    phone: "",
    reason: "",
    solution: "",
    status: "Pending",
    person: "Raghul",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.phone || !form.reason || !form.solution) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");

    // ✅ Send data to backend
    axios.post("http://localhost:5000/api/calls", form).then(() => {
      setForm({
        phone: "",
        reason: "",
        solution: "",
        status: "Pending",
        person: "Raghul",
      });
      navigate("/logs");
    });
  };

  return (
    <div className="container">
      <h2>📋 Report a Call</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone/User Name"
        />
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Call Reason"
        />
        <textarea
          name="solution"
          value={form.solution}
          onChange={handleChange}
          placeholder="Call Solution"
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Pending</option>
          <option>Complete</option>
        </select>
        <select name="person" value={form.person} onChange={handleChange}>
          <option>Raghul</option>
          <option>Hari</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportPage;
