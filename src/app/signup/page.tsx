'use client';
import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <div className="bg-slate-900 min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-full flex justify-center">
        <div className="md:w-[30%] flex flex-col justify-center">
          <h1 className="font-semibold text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
            Expand Your Knowledge & Skill
          </h1>
          <p className="mt-5 text-white font-medium text-xl">
            We offer a diverse range of top-notch events designed to enhance
            your skills in the technology field.
          </p>
        </div>
        <div className="w-[25%] flex flex-col justify-center bg-white ml-20 p-10 rounded-xl">
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
            onClick={() => {
              router.push('/events');
            }}
            children="Sign Up"
            className="mt-5 justify-center"
          />
        </div>
      </div>
      <section className="flex flex-col align-middle justify-center pt-20 gap-10">
        <p className="text-gray-600 text-center font-medium text-md">
          Events held and approved by top companies
        </p>
        <div className="flex align-middle justify-center gap-10">
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
