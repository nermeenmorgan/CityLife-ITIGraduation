import React, { useContext } from "react";
import { DataContext } from "../../Context/Data";

export default function Completion() {
  const { userData } = useContext(DataContext);
  console.log(userData);
  return (
    <>
      {userData === null ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <i
              className="fa-sharp fa-regular fa-circle-check text-center"
              style={{ color: "#14992a", fontSize: 180 }}
            ></i>
            <h1 className="text-center" style={{ fontSize: 80 }}>
              Payment Success, {userData.name}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
