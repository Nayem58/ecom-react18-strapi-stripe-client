import axios from "axios";

// const params = {
//   headers: {
//     Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
//   },
// };

// export const fetchDataFromApi = async (url) => {
//   try {
//     const { data } = await axios.get(
//       process.env.REACT_APP_DEV_URL + url,
//       params
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params
    );
    const data = response.data; // Add a check for response before accessing data
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
