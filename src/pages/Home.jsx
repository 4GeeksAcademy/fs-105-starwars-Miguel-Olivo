import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Peoples from "./Peoples.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const styles = {
    container: {
      backgroundColor: "#000",
      minHeight: "100vh",
      color: "#fff",
      padding: "2rem",
    },
  };

  return (
    <div style={styles.container}>
      <Peoples />
    </div>
  );
};
