import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { GetDetailPeople } from "../services/fetchs.js";

function Character() {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const { detailPeople } = store;

  useEffect(() => {
    GetDetailPeople(dispatch, id);
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
      fontSize: "2rem",
      textAlign: "center",
      marginBottom: "2rem",
    },
    card: {
      backgroundColor: "#1a1a1a",
      borderRadius: "10px",
      padding: "2rem",
      boxShadow: "0 0 12px rgba(255, 215, 0, 0.2)",
      maxWidth: "500px",
      margin: "0 auto",
    },
    detail: {
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Detalle del Personaje</h1>
      {detailPeople !== null ? (
        <div style={styles.card}>
          <p style={styles.detail}><strong>Nombre:</strong> {detailPeople.name}</p>
          <p style={styles.detail}><strong>Altura:</strong> {detailPeople.height}</p>
          <p style={styles.detail}><strong>Color de ojos:</strong> {detailPeople.eye_color}</p>
          <p style={styles.detail}><strong>Color de cabello:</strong> {detailPeople.hair_color}</p>
          <p style={styles.detail}><strong>Año de nacimiento:</strong> {detailPeople.birth_year}</p>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Leyendo detalle del personaje...</p>
      )}
    </div>
  );
}

export default Character;
