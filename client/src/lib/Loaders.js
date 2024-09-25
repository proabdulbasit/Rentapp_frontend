import { defer } from "react-router-dom";
import ApiRequest from "./ApiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await ApiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = ApiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};
