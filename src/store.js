export const initialStore = () => ({
  peoples: [],
  detailPeople: null,
  vehicles: [],
  detailVehicle: null,
  planets: [],
  detailPlanet: null,
  favorites: []
});

export default function storeReducer(state, action) {
  switch (action.type) {
    case "GUARDAR_peoples":
      return { ...state, peoples: action.payload };
    case "GUARDAR_detailPeople":
      return { ...state, detailPeople: action.payload };
    case "GUARDAR_vehicles":
      return { ...state, vehicles: action.payload };
    case "GUARDAR_detailVehicle":
      return { ...state, detailVehicle: action.payload };
    case "GUARDAR_planets":
      return { ...state, planets: action.payload };
    case "GUARDAR_detailPlanet":
      return { ...state, detailPlanet: action.payload };
    case "ADD_favorites":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_favorites":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
}
