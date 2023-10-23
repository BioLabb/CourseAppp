import request from "../utils/request";

const URL_STUDENT = "/student";
export const SignUpStudent = (path,StudentObj)=>{
   return request.post("/",StudentObj);

}