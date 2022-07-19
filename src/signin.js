const { default: axios } = require("axios");
const { urls } = require("../config");

const signin = async (creds) => {
  try {
    const { data } = await axios.post(`${urls.BASE_URL}/auth/signin`, creds);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { signin };
