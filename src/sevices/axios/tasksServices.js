import baseURL from "./baseURL";

export const getTasksList = () => {
    return baseURL.get("tasks")
}