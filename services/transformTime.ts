export const transformTime = (seconds: number) => {
  if (seconds) return new Date(seconds * 1000).toISOString().substr(14, 5);
  else return new Date(0 * 1000).toISOString().substr(14, 5);
};
