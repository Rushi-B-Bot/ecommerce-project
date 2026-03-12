import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Home Page</h1>

      <div style={{display:"flex", gap:"20px"}}>
        <div onClick={handleProductClick} style={{border:"1px solid black", padding:"20px", cursor:"pointer"}}>
          Product 1
        </div>

        <div onClick={handleProductClick} style={{border:"1px solid black", padding:"20px", cursor:"pointer"}}>
          Product 2
        </div>

        <div onClick={handleProductClick} style={{border:"1px solid black", padding:"20px", cursor:"pointer"}}>
          Product 3
        </div>
      </div>
    </div>
  );
}

export default HomePage;