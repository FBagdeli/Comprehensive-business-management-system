import dbClient from "../utilis/dbClient";

const findMany = async () => {
  const foundUsers = await dbClient.user.findMany();
  return foundUsers;
};

export { findMany };
