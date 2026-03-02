"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem("eliteUser");

    if (!storedUser) {
      alert("No account found. Please signup first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.name);
      router.push("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
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
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 12,
            background: "#3b82f6",
            borderRadius: 8,
            border: "none",
            color: "white",
            fontWeight: 600,
            marginTop: 10,
            cursor: "pointer"
          }}
        >
          Login
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
