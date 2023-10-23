import * as request from "../utils/request";

const URL_LEVELREQUIRE = "/levelRequire";

export const getById = async (id) => {
  const reponse = await request.get(URL_LEVELREQUIRE + id);
  return reponse;
};

export const getAll = async () => {
  try {
    const reponse = await request.get(URL_LEVELREQUIRE);
    console.log(reponse);
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};
