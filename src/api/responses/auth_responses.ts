export interface AuthResponse {
  message: string;
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    image: string;
    token: string;
  };
}
