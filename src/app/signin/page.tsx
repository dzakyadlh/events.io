'use client';
import { CustomButton } from '@/components/button/button';
import Input from '@/components/input/input';
import { useSignIn } from '@/hooks/useAuth';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { mutate: signIn, isPending, isError, error } = useSignIn();

  const handleLogin = async () => {
    signIn(
      { email, password },
      {
        onSuccess: (data) => {
          router.push('/dashboard');
        },
        onError: (error) => {},
      }
    );
  };

  return (
    <div className="bg-slate-900 min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-full flex justify-center">
        <div className="xl:w-[25%] md:w-[40%] w-[90%] flex flex-col justify-center bg-white p-10 rounded-xl">
          <div className="mb-5">
            <label className="text-black font-medium text-md mb-2">Email</label>
            <Input value={email} setValue={setEmail} placeholder="Email" />
          </div>
          <div className="mb-5">
            <div className="w-full flex justify-between">
              <label className="text-black font-medium text-md mb-2">
                Password
              </label>
              <button
                type="button"
                className="text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <Input
              value={password}
              setValue={setPassword}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              minLength={8}
            />
          </div>
          <CustomButton
            onClick={handleLogin}
            children={
              isPending ? (
                <ClipLoader color="#6366f1" loading={true} size={24} />
              ) : (
                'Login'
              )
            }
            className="mt-5 justify-center"
          />
          <CustomButton
            onClick={() => {
              router.push('/signup');
            }}
            children="Create an Account"
            className="mt-5 justify-center shadow-none bg-slate-300"
          />
          {isError && (
            <p className="text-red-500 text-center mt-5">{error?.message}</p>
          )}
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
