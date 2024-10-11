'use client';
import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { CircularProgress } from '@nextui-org/progress';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutation, UseMutationResult } from 'react-query';

interface User {
  email: string;
  password: string;
}

interface ApiResponse {
  message: string;
  data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    token: string;
  };
}

const login = async (user: User): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    'http://localhost:5000/auth/login',
    user
  );
  return response.data;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const mutation: UseMutationResult<ApiResponse, Error, User> = useMutation(
    login,
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data));
        router.push('/events');
      },
      onError: (error: Error) => {
        console.error('Registration failed:', error.message);
      },
    }
  );

  const handleLogin = () => {
    const payload = { email, password };
    mutation.mutate(payload);
  };

  return (
    <div className="bg-slate-900 min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-full flex justify-center">
        <div className="xl:w-[25%] md:w-[40%] w-[90%] flex flex-col justify-center bg-white p-10 rounded-xl">
          <div className="mb-5">
            <p className="text-black font-medium text-md mb-2">Email</p>
            <Input value={email} setValue={setEmail} placeholder="Email" />
          </div>
          <div className="mb-5">
            <p className="text-black font-medium text-md mb-2">Password</p>
            <Input
              value={password}
              setValue={setPassword}
              placeholder="Password"
              type="password"
              minLength={8}
            />
          </div>
          <Button
            onClick={handleLogin}
            children={
              mutation.isLoading ? (
                <CircularProgress
                  color="default"
                  aria-label="Loading..."
                  size="md"
                />
              ) : (
                'Login'
              )
            }
            className="mt-5 justify-center"
          />
          <Button
            onClick={() => {
              router.push('/signup');
            }}
            children="Create an Account"
            className="mt-5 justify-center bg-black text-indigo-400 border-indigo-400"
          />
        </div>
      </div>
      <section className="hidden md:flex flex-col align-middle justify-center pt-20 gap-10">
        <p className="text-gray-600 text-center font-medium text-md">
          Events held and approved by top companies
        </p>
        <div className="flex align-middle justify-center gap-10 flex-wrap">
          <img src="./images/apple.png" alt="apple" className="w-20" />
          <img src="./images/adobe.png" alt="apple" className="w-20" />
          <img src="./images/slack.png" alt="apple" className="w-20" />
          <img src="./images/spotify.png" alt="apple" className="w-20" />
          <img src="./images/google.png" alt="apple" className="w-20" />
        </div>
      </section>
    </div>
  );
};

export default Login;
