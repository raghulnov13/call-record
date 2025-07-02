import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EditPage() {
  const { index } = useParams();
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/calls").then((res) => {
      setForm(res.data[index]);
    });
  }, [index]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/api/calls/${index}`, form).then(() => {
      navigate("/logs");
    });
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>✏️ Edit Call Log</h2>
      <form onSubmit={handleUpdate}>
        <input name="phone" value={form.phone} onChange={handleChange} />
        <textarea name="reason" value={form.reason} onChange={handleChange} />
        <textarea
          name="solution"
          value={form.solution}
          onChange={handleChange}
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Pending</option>
          <option>Complete</option>
        </select>
        <select name="person" value={form.person} onChange={handleChange}>
          <option>Raghul</option>
          <option>Hari</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPage;
