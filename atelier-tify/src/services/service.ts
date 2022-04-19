export const getHello = async () => {
  try {
    const response = await fetch("http://localhost:8000");
    if (response.status !== 200) return "";
    return await response;
  } catch (err) {
    throw err;
  }
};