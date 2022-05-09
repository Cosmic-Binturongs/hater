import api from "./apiConfig";

export const getAllHates = async () => {
  try {
    const response = await api.get("/allHates");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const response = await api.get("/user_Profile");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHates = async () => {
  try {
    const response = await api.get("/allHates");
    return response.data;
  } catch (error) {
    throw error;
  }
};
