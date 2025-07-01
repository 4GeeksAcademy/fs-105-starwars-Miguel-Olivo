const url_base = "https://swapi.py4e.com/api/"

//GetAllPeople 
export const GetAllPeople = async (dispatch) => {
    try {
        const response = await fetch(`${url_base}people`);
        if (!response.ok) {
            throw new Error("error al obtener los datos", response.status);
        }
        const data = await response.json();
       
        dispatch({
           type: "GUARDAR_peoples",
           payload:data.results
        })
    } catch (error) {
        console.log("Error al obtener peoples", error);

    }

}

//GetDetailPeople
export const GetDetailPeople = async (dispatch, id) => {
    try {
        const response = await fetch(`${url_base}people/${id}`);
        if (!response.ok) {
            throw new Error("error al obtener los datos", response.status);
        }
        const data = await response.json();
       
        dispatch({
           type: "GUARDAR_detailPeople",
           payload:data
        })
    } catch (error) {
        console.log("Error al obtener peoples", error);

    }

}

// GetAllVehicles
export const GetAllVehicles = async (dispatch) => {
  try {
    const response = await fetch(`${url_base}vehicles`);
    if (!response.ok) {
      throw new Error("Error al obtener los vehículos", response.status);
    }
    const data = await response.json();

    dispatch({
      type: "GUARDAR_vehicles",
      payload: data.results,
    });
  } catch (error) {
    console.log("Error al obtener vehicles", error);
  }
};

// GetDetailVehicle
export const GetDetailVehicle = async (dispatch, id) => {
  try {
    const response = await fetch(`${url_base}vehicles/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener el vehículo", response.status);
    }
    const data = await response.json();

    dispatch({
      type: "GUARDAR_detailVehicle",
      payload: data,
    });
  } catch (error) {
    console.log("Error al obtener vehículo", error);
  }
};

// GetAllPlanets
export const GetAllPlanets = async (dispatch) => {
  try {
    const response = await fetch(`${url_base}planets`);
    if (!response.ok) {
      throw new Error("Error al obtener los planetas", response.status);
    }
    const data = await response.json();

    dispatch({
      type: "GUARDAR_planets",
      payload: data.results,
    });
  } catch (error) {
    console.log("Error al obtener planets", error);
  }
};

// GetDetailPlanet
export const GetDetailPlanet = async (dispatch, id) => {
  try {
    const response = await fetch(`${url_base}planets/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener el planeta", response.status);
    }
    const data = await response.json();

    dispatch({
      type: "GUARDAR_detailPlanet",
      payload: data,
    });
  } catch (error) {
    console.log("Error al obtener planeta", error);
  }
};


