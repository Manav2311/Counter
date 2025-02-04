import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div style={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      width: "100vw",
      backgroundColor: "#0f172a",
      color: "#e2e8f0",
      padding: "20px",
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden"
    }}>
      <div style={{
        backgroundColor: "#1e293b", 
        padding: "6rem", 
        borderRadius: "20px", 
        boxShadow: "0 12px 40px rgba(0,0,0,0.9)",
        textAlign: "center",
        width: "80vw",
        maxWidth: "800px",
        position: "relative"
      }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#f1f5f9", marginBottom: "30px" }}>Counter</h1>
        <div 
          style={{ fontSize: "80px", fontWeight: "bold", color: "#38bdf8", margin: "30px 0", position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <button 
            onClick={increment} 
            style={{ padding: "24px 32px", backgroundColor: "#10b981", color: "#fff", borderRadius: "12px", border: "none", cursor: "pointer", transition: "0.3s", fontSize: "32px" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#059669"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#10b981"}
          >
            ➕ INCREMENT
          </button>
          <span style={{ minWidth: "140px", textAlign: "center" }}>{count}</span>
          <button 
            onClick={decrement} 
            style={{ padding: "24px 32px", backgroundColor: "#f87171", color: "#fff", borderRadius: "12px", border: "none", cursor: "pointer", transition: "0.3s", fontSize: "32px" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#dc2626"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#f87171"}
          >
            ➖ DECREMENT
          </button>
        </div>
        <button 
          onClick={reset} 
          style={{ marginTop: "40px", padding: "22px 32px", backgroundColor: "#64748b", color: "#fff", borderRadius: "12px", border: "none", cursor: "pointer", transition: "0.3s", fontSize: "26px", display: "block", margin: "40px auto", width: "80%" }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#475569"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#64748b"}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;