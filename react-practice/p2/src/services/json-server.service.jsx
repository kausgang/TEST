import { callExternalApi } from "./external-api.service";

const API_URL = import.meta.env.VITE_JSON_SERVER_URL;

export const getCount = async () => {
  const config = {
    url: `${API_URL}/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const postCount = async (payload) => {
  const config = {
    url: `${API_URL}/public`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: {
      count: payload,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const putCount = async (payload) => {
  const config = {
    url: `${API_URL}/public/e033`,
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    data: {
      count: payload,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};
