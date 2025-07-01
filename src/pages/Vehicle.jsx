import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams, useNavigate } from "react-router-dom";
import { GetAllVehicles, GetDetailVehicle } from "../services/fetchs";

function Vehicle() {
  const { store, dispatch } = useGlobalReducer();
  const { vehicles, detailVehicle } = store;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      GetDetailVehicle(dispatch, id);
    } else {
      GetAllVehicles(dispatch);
    }
  }, [dispatch, id]);

   const styles = {
    container: {
      backgroundColor: "#000000",
      fontFamily: "Arial, sans-serif",
      color: "#FFFFFF",
      padding: "2rem",
      minHeight: "100vh",
    },
    title: {
      color: "#FFD700",
      textAlign: "center",
      fontSize: "2rem",
      marginBottom: "2rem",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
    },
    card: {
      backgroundColor: "#1a1a1a",
      borderRadius: "10px",
      padding: "1.5rem",
      width: "45%",
      boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
    },
    button: {
      backgroundColor: "#FFD700",
      color: "#000",
      border: "none",
      borderRadius: "6px",
      padding: "0.5rem 1rem",
    },
  };
    return (
    <div style={styles.container}>
      <h1 style={styles.title}>Vehículos</h1>
      <div style={styles.grid}>
        { }
      </div>
    </div>
  );
}

export default Vehicle;

