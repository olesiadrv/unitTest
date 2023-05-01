function checkLoginAndPass(login, password) {
  const validLoginsAndPass = [
    { login: "user1", password: "pass1", secretPhrase: "secret1" },
    { login: "user2", password: "pass2", secretPhrase: "secret2" },
    { login: "user3", password: "pass3", secretPhrase: "secret3" },
  ];

  const validUser = validLoginsAndPass.find(
    (user) => user.login === login && user.password === password
  );

  if (validUser) {
    return validUser.secretPhrase;
  } else {
    return null;
  }
}
module.exports = checkLoginAndPass;
