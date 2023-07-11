// Creating Token and Saving in Cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // Options for cookie
  const options = {
    // THIS WAS ORIGINALLY expires BUT THAT GAVE AN ERROR SO I CAHNGED IT
    expiresIn: new Date(
      Date.now() + process.env.COOKIRE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
