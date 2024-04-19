import { getBase64 } from "@/client/api/base64";
import queries from "@/const/queries";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export const useGetBase64 = (
  params: {
    imgPath: string;
  },
  options?: Omit<UseQueryOptions<{ data: string }>, "queryKey" | "queryFn">
) => {
  const queryKey = queries.base64.imgPath(params.imgPath).queryKey;

  return useQuery<{ data: string }, Error>({
    queryKey,
    queryFn: () => getBase64(params),
    ...options,
  });
};
