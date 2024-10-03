'use client';
import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { CircularProgress } from '@nextui-org/progress';

interface User {
  first_name: string;
  last_name: string;
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

const register = async (user: User): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    'http://localhost:5000/auth/register',
    user
  );
  return response.data;
};

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const mutation: UseMutationResult<ApiResponse, Error, User> = useMutation(
    register,
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

  const handleRegister = () => {
    const payload: User = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
    mutation.mutate(payload);
  };

  return (
    <div className="bg-slate-900 min-h-screen w-screen flex flex-col items-center justify-center max-md:px-5 py-10">
      <div className="w-full flex max-md:flex-col justify-center items-center">
        <div className="md:w-[30%] md:m-10 flex flex-col justify-center">
          <h1 className="font-semibold md:text-5xl text-3xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
            Expand Your Knowledge & Skill
          </h1>
          <p className="mt-5 text-white font-medium md:text-xl text-md">
            We offer a diverse range of top-notch events designed to enhance
            your skills in the technology field.
          </p>
        </div>
        <div className="xl:w-[25%] md:w-[40%] w-[90%] flex flex-col justify-center bg-white p-10 rounded-xl max-md:mt-10">
          <div className="mb-5">
            <p className="text-black font-medium text-md mb-2">First Name</p>
            <Input
              value={firstName}
              setValue={setFirstName}
              placeholder="First Name"
            />
          </div>
          <div className="mb-5">
            <p className="text-black font-medium text-md mb-2">Last Name</p>
            <Input
              value={lastName}
              setValue={setLastName}
              placeholder="Last Name"
            />
          </div>
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
            />
          </div>
          <Button
            onClick={handleRegister}
            children={
              mutation.isLoading ? (
                <CircularProgress
                  color="default"
                  aria-label="Loading..."
                  size="md"
                />
              ) : (
                'Sign Up'
              )
            }
            className="mt-5 justify-center"
          />
          {mutation.isError && (
            <p className="text-red-500 mt-3">
              Error: {mutation.error?.message}
            </p>
          )}
        </div>
      </div>
      <section className="flex flex-col align-middle justify-center pt-20 gap-10">
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

export default SignUp;
