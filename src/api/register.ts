import apiClient from "./client";

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  country: string;
  code: string;
  phone: string;
  email: string;
  experience: number;
  privacyPolicy: boolean;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}

export async function registerUser(data: RegisterPayload): Promise<RegisterResponse> {
  const response = await apiClient.post<RegisterResponse>("/register", data);
  return response.data;
}
