import baseURL from "./baseURL";

export const createUser = (data) => {
  return baseURL.post("users", data)
}

