import { writable, Writable } from "svelte/store";
import type { Followers } from "./types/Followers";

const user: Writable<{ username: string }> = writable({
  username: "",
});

const darkMode: Writable<boolean> = writable(false);

const followers: Writable<Followers> = writable({
  github: null,
  twitter: null,
});

export { user, darkMode, followers };
