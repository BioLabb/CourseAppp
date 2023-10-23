import * as request from "../utils/request";
const URL_LANGUAGE = "language/";

export const getAll = async () => {
  try {
    const reponse = await request.get(URL_LANGUAGE);
    console.log(reponse.data);
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};
