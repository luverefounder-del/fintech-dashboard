type Props = {
  title: string;
  amount: string;
  onWithdraw: () => void;
};

export default function DashboardCard({ title, amount, onWithdraw }: Props) {
  return (
    <div style={{
      background: "#111827",
      padding: "20px",
      borderRadius: "15px",
      marginBottom: "20px",
      border: "1px solid #1f2937"
    }}>
      <h3 style={{ color: "#9ca3af", marginBottom: "10px" }}>{title}</h3>

      <h2 style={{ color: "#3b82f6", marginBottom: "20px" }}>
        ₹{amount}
      </h2>

      <button
        onClick={onWithdraw}
        style={{
          width: "100%",
          padding: "12px",
          background: "#1e3a8a",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        Withdraw
      </button>
    </div>
  );
}
