async function registerUserInDataBase({ email, name, avatar }) {
  if (!avatar) return { error: "avatar is required" };

  if (!name) return { error: "name is required" };

  const emailIsInUse = getUserByEmail(email);

  if (emailIsInUse) {
    return { error: "email already used" };
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatarInFormatJpg = convertImageToJPG(avatar);

  const user = await createUserInDataBase({
    email,
    name,
    avatar: avatarInFormatJpg,
  });

  return { user };
}
