"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleSignup = () => {
    localStorage.setItem("eliteUser", JSON.stringify(form));
    alert("Account Created Successfully");
    router.push("/login");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }}>
      <div style={{
        width: 350,
        padding: 30,
        background: "#1e293b",
        borderRadius: 15
      }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Create Account</h2>

        <input placeholder="Full Name"
          onChange={e => setForm({...form,name:e.target.value})}
          style={inputStyle} />

        <input placeholder="Email Address"
          onChange={e => setForm({...form,email:e.target.value})}
          style={inputStyle} />

        <input placeholder="Phone Number"
          onChange={e => setForm({...form,phone:e.target.value})}
          style={inputStyle} />

        <input type="password" placeholder="Password"
          onChange={e => setForm({...form,password:e.target.value})}
          style={inputStyle} />

        <button onClick={handleSignup}
          style={{
            width: "100%",
            padding: 12,
            background: "#3b82f6",
            borderRadius: 8,
            border: "none",
            color: "white",
            fontWeight: 600,
            marginTop: 10
          }}>
          Signup
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
  borderRadius: 8,
  border: "none"
};
