import axiosClient from "./axiosClient";

const categoriesApi = {
  getAll: () => {
    const url = "/product/getCategories";

    return axiosClient.get(url);
  },
};
export default categoriesApi;
