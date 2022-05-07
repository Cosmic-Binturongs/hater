import api from "./apiConfig";

export const getAllHates = async () => {
  try {
    const response = await api.get("/allHates/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const response = await api.get("/user_Profile/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHates = async () => {
  try {
    const response = await api.get("/allHates/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHate = async (id) => {
  try {
    const response = await api.get(`/hates/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createHate = async (hate) => {
  try {
    const response = await api.post("/hates/", hate);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateHate = async (id, hate) => {
  try {
    const response = await api.put(`/hates/${id}`, hate);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteHate = async (id) => {
  try {
    const response = await api.delete(`/hates/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
