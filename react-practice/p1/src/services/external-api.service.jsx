import axios from "axios";

export const callExternalApi = async (options) => {
  try {
    const response = await axios(options.config);
    const { data } = response;

    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error(error);

    return {
      data: null,
      error: {
        message: error.message,
      },
    };
  }
};
