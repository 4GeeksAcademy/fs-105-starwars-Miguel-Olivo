import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

function Favorite() {
  const { store, dispatch } = useGlobalReducer();
  const { favorites } = store;

  const handleRemoveFavorito = (name) => {
    dispatch({
      type: "REMOVE_favorites",
      payload: name,
    });
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
      fontSize: "2rem",
      color: "#FFD700",
      marginBottom: "2rem",
    },
    cardGrid: {
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
      width: "calc(50% - 1rem)",
      boxSizing: "border-box",
      boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
      textAlign: "center",
    },
    button: {
      marginTop: "1rem",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#333",
      color: "#FFD700",
      cursor: "pointer",
    },
    emptyText: {
      textAlign: "center",
      color: "#FFD700",
      fontSize: "1.2rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Favoritos</h1>
      {favorites.length > 0 ? (
        <div style={styles.cardGrid}>
          {favorites.map((name, index) => (
            <div style={styles.card} key={index}>
              <p><strong>{name}</strong></p>
              <button
                style={styles.button}
                onClick={() => handleRemoveFavorito(name)}
              >
                Quitar ⭐
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.emptyText}>No hay personajes favoritos.</p>
      )}
    </div>
  );
}

export default Favorite;
