import axios from "axios";

export async function get() {
  try {
    const currentlyPlaying = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY}`,
        },
      }
    );

    return {
      status: currentlyPlaying.status,
      body: {
        currentlyPlaying: currentlyPlaying.data,
        status: currentlyPlaying.status,
      },
    };
  } catch (error) {
    return {
      status: error.status,
      body: error.body,
    };
  }
}
