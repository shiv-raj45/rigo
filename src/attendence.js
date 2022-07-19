const { default: axios } = require("axios");
const { urls } = require("../config");

const attendence = async (token, clockingIn) => {
  console.log("calling from clockin functon and token is ", token);
  console.log("token", token);

  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const bodyData = {
      ManualVisibleTime: "10:12:23 am",
    };

    const { status, data } = await axios.post(
      `${urls.BASE_URL}/leave-time/attendance/manual?isCheckIn=${clockingIn}`,
      bodyData,
      { headers }
    );

    if (status === 200) {
      console.log("clocked in");
      return data;
    }
  } catch (error) {
    console.log("error occured", error.message);
    return error;
  }
};

module.exports = { attendence };
