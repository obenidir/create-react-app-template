export const getToken = () => localStorage.getItem("token");
export const isAuthenticated = () => !!getToken();
export const signIn = (token) => {
  localStorage.setItem("token", token);
};
export const signOut = () => {
  localStorage.removeItem("token");
};
