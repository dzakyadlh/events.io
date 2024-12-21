'use client';

import { useState } from 'react';
import Input from '../input/input';
import PaymentMethodModal from '../modal/payment_method';
import User from '@/models/user';
import { CustomSecondaryButton } from '../button/button';

interface ProfileProps {
  user: User;
}

const Profile = ({ user }: ProfileProps) => {
  const [firstName, setFirstName] = useState(user.first_name!);
  const [lastName, setLastName] = useState(user.last_name!);
  const [email, setEmail] = useState(user.email!);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleProfilePicture = () => {};

  const handleDelete = () => {};

  return (
    <main className="w-full lg:w-3/5 min-h-screen flex flex-col gap-8 p-10 max-w-full">
      <div>
        <h1 className="font-bold text-2xl text-black mb-5">Your Profile</h1>
        <hr />
      </div>
      <section>
        <h2 className="font-semibold text-lg mb-2">Profile Picture</h2>
        <div className="bg-indigo-400 w-full flex items-center p-4 border-black border-2 gap-5 shadow-custom-black">
          {user?.image ? (
            <img
              src={user.image}
              alt="profile picture"
              className="w-20 h-20 rounded-full object-cover border-2 border-black"
            />
          ) : (
            <img
              src="./images/girl.png"
              alt="profile picture"
              className="w-20 h-20 rounded-full object-cover border-2 border-black"
            />
          )}
          <div className="flex flex-col gap-2">
            <CustomSecondaryButton
              children="Update Profile Picture"
              onClick={handleProfilePicture}
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
            <p className="font-semibold text-black w-1/5">First Name</p>
            <Input
              value={firstName}
              setValue={setFirstName}
              placeholder={user.first_name!}
              className="flex-grow border-black"
            />
          </div>
          <div className="flex items-center gap-4 mb-5">
            <p className="font-semibold text-black w-1/5">Last Name</p>
            <Input
              value={lastName}
              setValue={setLastName}
              placeholder={user.last_name!}
              className="flex-grow border-black"
            />
          </div>
          <div className="flex items-center gap-4 mb-5">
            <p className="font-semibold text-black w-1/5">Email Address</p>
            <Input
              value={email}
              setValue={setEmail}
              placeholder={user.email!}
              className="flex-grow border-black"
            />
          </div>
          <div className="w-full flex justify-end">
            <CustomSecondaryButton
              children="Update Profile"
              onClick={handleProfilePicture}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Payment Methods</h2>
        <div className="bg-indigo-400 w-full p-4 border-black border-2 shadow-custom-black">
          <p className="text-black text-sm mb-2">
            You dont have any payment method registered
          </p>
          <CustomSecondaryButton
            children="Add Payment Method"
            onClick={() => {
              setIsModalActive(true);
            }}
          />
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Delete Your Account</h2>
        <div className="bg-indigo-400 flex p-4 border-black border-2 shadow-custom-black">
          <div>
            <CustomSecondaryButton
              children="Delete Account"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 mb-2"
            />
            <p className="text-xs">
              This action cannot be undone. Are you sure you want to finish your
              journey with us?
            </p>
          </div>
        </div>
      </section>

      <PaymentMethodModal active={isModalActive} setActive={setIsModalActive} />
    </main>
  );
};

export default Profile;
