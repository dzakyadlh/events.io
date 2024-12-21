'use client';

import ReactDom from 'react-dom';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faChevronUp,
  faClose,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../input/input';
import { CustomButton } from '../button/button';

type ModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

type Option = {
  value: string;
  label: string;
  icon: React.ReactNode; // This can be an element or JSX for the icon
};

type CustomDropdownOptionProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

const CustomDropdownOption: React.FC<CustomDropdownOptionProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="border-2 border-black p-2 rounded cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="flex items-center">
          {options.find((option) => option.value === value)?.icon}
          <span className="ml-2">
            {options.find((option) => option.value === value)?.label ||
              'Select a payment method'}
          </span>
        </span>
        <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-black rounded shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PaymentMethodModal: React.FC<ModalProps> = ({ active, setActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const closeModal = () => {
    setIsVisible(false);
    setActive(false);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  if (!active) return null;

  // Define your payment method options with icons
  const paymentOptions = [
    {
      value: 'creditCard',
      label: 'Credit Card',
      icon: <FontAwesomeIcon icon={faCreditCard} />, // Use your icon
    },
    {
      value: 'paypal',
      label: 'PayPal',
      icon: <FontAwesomeIcon icon={faPaypal} />, // Use your icon
    },
    {
      value: 'visa',
      label: 'Visa',
      icon: <FontAwesomeIcon icon={faCcVisa} />, // Use your icon
    },
    // Add more options with icons as needed
  ];

  const handleSubmit = () => {
    closeModal();
  };

  return ReactDom.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-visible={isVisible ? 'true' : 'false'}
      onClick={closeModal}
      className="fixed text-text left-0 top-0 z-50 flex h-screen w-screen items-center justify-center data-[visible=true]:opacity-100 data-[visible=true]:visible data-[visible=false]:opacity-0 data-[visible=false]:invisible transition-all duration-300 bg-overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-[40vw] group-data-[visible=true]:opacity-100 group-data-[visible=true]:visible group-data-[visible=false]:opacity-0 group-data-[visible=false]:invisible flex-col items-center justify-center rounded-base border-2 border-black bg-white p-10 pt-12 transition-all duration-300 gap-5"
      >
        <button onClick={closeModal}>
          <FontAwesomeIcon
            icon={faClose}
            className="absolute right-3 top-3 h-6 w-6"
          />
        </button>
        <p className="font-semibold text-black text-lg">Add Payment Method</p>

        {/* Custom Dropdown for selecting payment method */}
        <div className="flex flex-col w-full">
          <p className="text-black text-sm">Select a Method</p>
          <CustomDropdownOption
            options={paymentOptions}
            value={paymentMethod}
            onChange={setPaymentMethod}
          />
        </div>

        {/* Input for account number */}
        <div className="flex flex-col w-full">
          <p className="text-black text-sm">Account Number</p>
          <Input
            value={accountNumber}
            setValue={setAccountNumber}
            placeholder="Account Number"
            type="number"
          />
        </div>

        <CustomButton
          onClick={handleSubmit}
          children="Submit"
          className="w-full flex justify-center"
        />
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};

export default PaymentMethodModal;
