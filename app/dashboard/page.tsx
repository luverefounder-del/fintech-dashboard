export default function Dashboard() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <img
          src="https://dummyimage.com/100x100/1e6bff/ffffff&text=E"
          className="logo"
        />
        <div className="brand">ElitePay</div>
      </div>

      {/* Total Funds */}
      <div className="card">
        <div className="total-title">Total Funds Available</div>
        <div className="total-amount">₹7,76,85,830</div>
        <div style={{ textAlign: "center", opacity: 0.6 }}>
          Demo portfolio
        </div>
      </div>

      {/* Pure Fund */}
      <div className="card">
        <div className="fund-row">
          <div>
            <div className="fund-name">Pure Fund</div>
            <div className="fund-amount">₹1,14,11,990</div>
          </div>
        </div>
        <button className="btn">Withdraw</button>
      </div>

      {/* Stock Fund */}
      <div className="card">
        <div className="fund-row">
          <div>
            <div className="fund-name">Stock Fund</div>
            <div className="fund-amount">₹2,03,78,348</div>
          </div>
        </div>
        <button className="btn">Withdraw</button>
      </div>

      {/* Political Fund */}
      <div className="card">
        <div className="fund-row">
          <div>
            <div className="fund-name">Political Fund</div>
            <div className="fund-amount">₹4,58,95,492</div>
          </div>
        </div>
        <button className="btn">Withdraw</button>
      </div>
    </>
  );
}
