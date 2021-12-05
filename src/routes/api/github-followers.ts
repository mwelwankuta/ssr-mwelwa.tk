import axios from "axios";

export async function get() {
  try {
    const response = await axios.get(
      `https://api.github.com/users/mwelwankuta`
    );

    return {
      status: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      status: error.status,
      body: error,
    };
  }
}
