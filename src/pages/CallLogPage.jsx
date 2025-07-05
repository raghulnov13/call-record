import { useEffect, useState } from "react";
import axios from "axios"; // ✅ Import axios
import { saveAs } from "file-saver";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";




function CallLogPage() {
  const [logs, setLogs] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const exportToCSV = () => {
    const csv = Papa.unparse(logs);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `CallLogs-${new Date().toISOString()}.csv`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/calls?number=${query}`)
      .then((res) => setLogs(res.data));
  }, [query]);

  return (
    <div className="container">
      <h2>📚 Call Log</h2>
      <input
        placeholder="Search by Phone"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
      />
      <table>
        <thead>
          <tr>
            <th>Phone</th>
            <th>Reason</th>
            <th>Solution</th>
            <th>Status</th>
            <th>Person</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{log.phone}</td>
              <td>{log.reason}</td>
              <td>{log.solution}</td>
              <td>{log.status}</td>
              <td>{log.person}</td>
              <td>{new Date(log.date).toLocaleString()}</td>
              <td>
                <button onClick={() => navigate(`/edit/${i}`)}>✏️ Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={exportToCSV} style={{ marginBottom: "10px" }}>
        📤 Export to CSV
      </button>
    </div>
  );
}

export default CallLogPage;
