import client from "./client";

export const getBase64 = (params: {
  imgPath: string;
}): Promise<{
  data: string;
}> => {
  return client.get("/api/base64", {
    params,
  });
};
