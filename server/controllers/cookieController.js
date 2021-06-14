const cookieController = {};

/**
 * setCookie - set a cookie with a random number. IS THIS EVEN NEEDED?
 */
cookieController.setCookie = (req, res, next) => {
  res.cookie("codesmith", "hi");
  res.cookie("secret", `${Math.floor(Math.random() * 100)}`);
  return next();
};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  const { id } = res.locals.user;
  // res.cookie([name], [value], [options])
  res.cookie("ssid", id, { httpOnly: true }); //client-side JS cannot access cookie
  res.locals.isLoggedIn = true;

  return next();
};

module.exports = cookieController;
