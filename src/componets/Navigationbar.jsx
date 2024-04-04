import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigationbar() {
    const navigate = useNavigate();

  return (
    <>
      <ul className="nav nav-pills " style={{ backgroundColor: "black" }}>
        <li className="nav-item" onClick={() => navigate("/")}>
          <Link className="nav-link text-white text-bold" to="/">
            Membership Details
          </Link>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn btn-success heigthAd"
            onClick={() => navigate("/addmember")}
          >
            Add Member
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navigationbar;
