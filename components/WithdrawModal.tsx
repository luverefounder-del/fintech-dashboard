type Props = {
  onClose: () => void;
  onSelectPlan: () => void;
};

export default function WithdrawModal({ onClose, onSelectPlan }: Props) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Choose Withdrawal Plan</h2>

        <div style={planStyle} onClick={onSelectPlan}>
          <p>Plan 1 - Deposit ₹5,000</p>
          <strong>Get ₹20,000 INR</strong>
        </div>

        <div style={planStyle} onClick={onSelectPlan}>
          <p>Plan 2 - Deposit ₹10,000</p>
          <strong>Get ₹40,000 INR</strong>
        </div>

        <div style={planStyle} onClick={onSelectPlan}>
          <p>Plan 3 - Deposit ₹20,000</p>
          <strong>Get ₹80,000 INR</strong>
        </div>

        <button onClick={onClose} style={{ marginTop: 15 }}>Close</button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "#111827",
  padding: "25px",
  borderRadius: "15px",
  width: "90%",
  maxWidth: "400px",
  color: "#fff"
};

const planStyle = {
  background: "#1f2937",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px",
  cursor: "pointer"
};
