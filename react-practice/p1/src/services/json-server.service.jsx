import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_URL;

export const getPublicResource = async () => {
  const config = {
    url: `${apiServerUrl}/public`,
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

export const updatePublicResource = async (newTitle) => {
  const config = {
    url: `${apiServerUrl}/public`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: { title: newTitle },
  };

  const { data, error } = await callExternalApi({ config });

  // console.log(data, error);

  return {
    data: data || null,
    error,
  };
};
