export async function get() {
  return {
    status: 200,
    body: { nice: process.env.NODE_ENV },
  };
}
