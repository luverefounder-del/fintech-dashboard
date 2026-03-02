type Props = {
  onClose: () => void;
};

export default function PaymentMethodModal({ onClose }: Props) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Choose Payment Method</h2>

        <div style={optionStyle}>
          <strong>USDT (TRC20)</strong>
          <p>Pay via cryptocurrency</p>
        </div>

        <div style={optionStyle}>
          <strong>INR (UPI)</strong>
          <p>Pay via UPI transfer</p>
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

const optionStyle = {
  background: "#1f2937",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px"
};
