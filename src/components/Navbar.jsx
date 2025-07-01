import { Link } from "react-router-dom";

export const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: "#000",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    brand: {
      color: "#FFD700",
      fontSize: "1.5rem",
      textDecoration: "none",
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "#FFD700",
      color: "#000",
      border: "none",
      borderRadius: "6px",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "background-color 0.3s, color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#fff",
      color: "#000",
    },
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.brand}>
        <img
          src="https://framerusercontent.com/images/HVzApGKkH6YM1vUO9zOo5lJBC4.jpeg"
          alt="Star Wars Logo"
          style={{
            height: "60px"
          }}
        />
      </Link>

      <Link
        to="/favorite"
        style={styles.button}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#fff";
          e.target.style.color = "#000";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#FFD700";
          e.target.style.color = "#000";
        }}
      >
        ⭐ Favoritos
      </Link>
    </nav>
  );
};
