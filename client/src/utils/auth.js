import axios from "axios";

export const createUser = async (name, email, password) => {
  return await axios.post("http://localhost:8080/user/create", {
    name,
    email,
    password,
  });
};

export const loginUser = async (email, password) => {
  return await axios.post("http://localhost:8080/user/login", {
    email,
    password,
  });

  // send request
  //  with email and password
  // response
  // if response has user then it should have the token
  // then return that token
  //   return { token: response.data.token };
};
