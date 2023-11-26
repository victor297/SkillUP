import axiosSecure from './axiosFunc';

// export const saveUser = async (user) => {
//   const currentUser = {
//     name: user?.displayName,
//     image: user?.photoURL,
//     email: user?.email,
//     role: 'admin',
//   };

//   const { data } = await axiosSecure.post(`/users`, currentUser);
//   return data;
// };

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, { email });
  console.log(data);
  return data;
};

// Remove token from Browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};
