import axios from "axios";

const URL = "http://localhost:8080/";

const request = axios.create({
  baseURL: URL,
  timeout: 1000,
});

export const get = async (path, options = {}) => {
  try {
    const reponse = await request.get(path, options);
    return reponse.data;
  } catch (err) {
    console.log(err);
  }
};
