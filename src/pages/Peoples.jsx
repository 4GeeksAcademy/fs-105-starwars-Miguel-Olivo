import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { GetAllPeople } from "../services/fetchs.js";
import { useNavigate } from "react-router-dom";

function Peoples() {
  const { store, dispatch } = useGlobalReducer();
  const { peoples, favorites } = store;
  const navigate = useNavigate();

  useEffect(() => {
    GetAllPeople(dispatch);
  }, [dispatch]);

  const handleAddFavorito = (peopleName) => {
    if (favorites.includes(peopleName)) {
      alert("Ya existe en favoritos");
    } else {
      dispatch({ type: "ADD_favorites", payload: peopleName });
    }
  };

  const styles = {
    container: {
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      padding: "2rem",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      color: "#FFD700",
      fontSize: "2rem",
      marginBottom: "2rem",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
    },
    card: {
      backgroundColor: "#111",
      border: "1px solid #FFD700",
      borderRadius: "12px",
      padding: "1rem",
      width: "45%",
      boxShadow: "0 0 10px rgba(255, 215, 0, 0.2)",
    },
    button: {
      backgroundColor: "#FFD700",
      color: "#000",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      marginRight: "0.5rem",
      marginTop: "0.5rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Personajes</h1>
      {peoples.length > 0 ? (
        <div style={styles.grid}>
          {peoples.map((people, index) => (
            <div key={index + 1} style={styles.card}>
              <p><strong>Nombre:</strong> {people.name}</p>
              <p><strong>Género:</strong> {people.gender}</p>
              <p><strong>Color de ojos:</strong> {people.eye_color}</p>
              <button style={styles.button} onClick={() => navigate(`/character/${index + 1}`)}>
                Detalle
              </button>
              <button style={styles.button} onClick={() => handleAddFavorito(people.name)}>
                ⭐
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#FFD700" }}>Cargando personajes...</p>
      )}
    </div>
  );
}

export default Peoples;
