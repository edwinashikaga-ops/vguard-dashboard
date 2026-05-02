export default function AIScore({ score = 87 }) {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h3>AI Score</h3>

      <div style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: "10px solid #00d4ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px auto",
        fontSize: "24px"
      }}>
        {score}%
      </div>

      <p>System Good</p>
    </div>
  );
}