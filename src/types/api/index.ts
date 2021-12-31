export type ApiResponse = {
  data: object;
};

type ApiErrorData = {
  message: string;
};
type ApiErrorResponse = {
  data: ApiErrorData;
};
export type ApiError = {
  response: ApiErrorResponse;
};
