'use client';

import { useState } from 'react';
import Button from '../button/button';
import Input from '../input/input';

const user = JSON.parse(localStorage.getItem('user')!);

const Profile = () => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleProfilePicture = () => {};

  const handleDelete = () => {};

  return (
    <main className="w-full min-h-screen flex flex-col gap-8 p-10">
      <div>
        <h1 className="font-bold text-2xl text-black mb-5">Your Profile</h1>
        <hr />
      </div>
      <section>
        <h2 className="font-semibold text-lg mb-2">Profile Picture</h2>
        <div className="bg-indigo-400 w-full flex items-center p-4 border-black border-2 gap-5 shadow-custom-black">
          <img
            src={user.image}
            alt="profile picture"
            className="w-20 h-20 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <Button
              children="Update Profile Picture"
              onClick={handleProfilePicture}
              className="text-sm shadow-none w-fit bg-gray-200"
            />
            <p className="text-black text-xs">
              Must be JPEG or PNG and cannot exceed 10 MB
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-semibold text-lg mb-2">Profile Settings</h2>
        <div className="bg-indigo-400 w-full p-4 border-black border-2 shadow-custom-black">
          <div className="flex items-center gap-4 mb-5">
            <p className="font-semibold text-black w-1/4">First Name</p>
            <Input
              value={firstName}
              setValue={setFirstName}
              placeholder={user.first_name}
              className="flex-grow border-black"
            />
          </div>
          <div className="flex items-center gap-4 mb-5">
            <p className="font-semibold text-black w-1/4">Last Name</p>
            <Input
              value={lastName}
              setValue={setLastName}
              placeholder={user.last_name}
              className="flex-grow border-black"
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-black w-1/4">Email Address</p>
            <Input
              value={email}
              setValue={setEmail}
              placeholder={user.email}
              className="flex-grow border-black"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Delete Your Account</h2>
        <div className="bg-indigo-400 grid grid-cols-2 place-items-center p-4 border-black border-2 shadow-custom-black">
          <div>
            <p className="font-semibold text-black mb-2">
              Delete Your Events.io Account
            </p>
            <p className="text-xs">
              This action cannot be undone. Are you sure you want to finish your
              journey with us?
            </p>
          </div>
          <Button
            children="Delete Account"
            onClick={handleDelete}
            className="text-sm shadow-none w-fit bg-red-500 mb-2"
          />
        </div>
      </section>
    </main>
  );
};

export default Profile;