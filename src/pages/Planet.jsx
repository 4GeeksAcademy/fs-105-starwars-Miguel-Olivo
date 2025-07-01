import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams, useNavigate } from "react-router-dom";
import { GetAllPlanets, GetDetailPlanet } from "../services/fetchs";

function Planet() {
  const { store, dispatch } = useGlobalReducer();
  const { planets, detailPlanet } = store;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      GetDetailPlanet(dispatch, id);
    } else {
      GetAllPlanets(dispatch);
    }
  }, [dispatch, id]);

  const styles = {
    container: {
      backgroundColor: "#000",
      color: "#FFD700",
      fontFamily: "Arial, sans-serif",
      padding: "2rem",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "2rem",
      marginBottom: "1.5rem",
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
      boxShadow: "2px 2px 12px rgba(255, 215, 0, 0.2)",
    },
    button: {
      backgroundColor: "#FFD700",
      color: "#000",
      border: "none",
      borderRadius: "6px",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      marginTop: "0.5rem",
    },
    backButton: {
      marginBottom: "1rem",
      backgroundColor: "#444",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      padding: "0.5rem 1rem",
      cursor: "pointer",
    },
  };

  const extractIdFromUrl = (url) => {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : null;
  };

  if (id && detailPlanet) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => navigate("/planets")}>
          ← Volver
        </button>
        <h1 style={styles.title}>Detalle del Planeta</h1>
        <div style={styles.card}>
          <p><strong>Nombre:</strong> {detailPlanet.name}</p>
          <p><strong>Clima:</strong> {detailPlanet.climate}</p>
          <p><strong>Terreno:</strong> {detailPlanet.terrain}</p>
          <p><strong>Población:</strong> {detailPlanet.population}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Planetas</h1>
      <div style={styles.grid}>
        {planets.length > 0 ? (
          planets.map((planet) => {
            const planetId = extractIdFromUrl(planet.url);
            return (
              <div key={planet.name} style={styles.card}>
                <p><strong>Nombre:</strong> {planet.name}</p>
                <p><strong>Clima:</strong> {planet.climate}</p>
                <button
                  style={styles.button}
                  onClick={() => navigate(`/planets/${planetId}`)}
                >
                  Detalle
                </button>
              </div>
            );
          })
        ) : (
          <p>Cargando planetas...</p>
        )}
      </div>
    </div>
  );
}

export default Planet;
