type ApiResponse<T> ={
  success:boolean;
  message: string;
  data?: T | null;
};

export const sendResponse = <T>(
  res: any,
  statusCode: number,
  message: string,
  data: T | null = null

) => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    data,
  } as ApiResponse<T>);
};