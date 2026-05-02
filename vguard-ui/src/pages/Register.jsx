import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    plan: "",
    ktp: null
  });

  // 🔥 INI TARUH DI SINI
  const submit = async () => {
    const data = new FormData();

    data.append("name", form.name);
    data.append("business", form.business);
    data.append("phone", form.phone);
    data.append("plan", form.plan);
    data.append("ktp", form.ktp);

    await fetch("http://localhost:3000/register", {
      method: "POST",
      body: data
    });

    alert("✅ Data masuk, menunggu approval");
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Register</h1>

      <input
        placeholder="Nama"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Usaha"
        onChange={e => setForm({ ...form, business: e.target.value })}
      />

      <input
        placeholder="No HP"
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />

      <select
        onChange={e => setForm({ ...form, plan: e.target.value })}
      >
        <option value="">Pilih Paket</option>
        <option value="V-LITE">V-LITE</option>
        <option value="V-PRO">V-PRO</option>
        <option value="V-SIGHT">V-SIGHT</option>
        <option value="V-ENTERPRISE">V-ENTERPRISE</option>
      </select>

      {/* 🔥 UPLOAD KTP */}
      <input
        type="file"
        onChange={e => setForm({ ...form, ktp: e.target.files[0] })}
      />

      {/* 🔥 BUTTON */}
      <button onClick={submit}>
        Daftar
      </button>
    </div>
  );
}