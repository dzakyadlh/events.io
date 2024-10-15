'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faHouse,
  faBookmark,
  faChevronDown,
  faChevronCircleRight,
  faUser,
  faReceipt,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

interface OptionProps {
  Icon: IconDefinition;
  title: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  notifs: number;
}

interface ToggleCloseProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TitleSectionProps {
  open: boolean;
}

const user = JSON.parse(localStorage.getItem('user')!);

const Sidebar: React.FC<SidebarProps> = ({ page, setPage }: SidebarProps) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.nav
      layout
      className={`sticky top-0 left-0 h-screen max-sm:border-b-2 md:border-r-2 border-black bg-white p-2 transition-all duration-200 ${
        open ? 'w-[225px]' : 'w-fit'
      } max-sm:w-screen max-sm:h-fit max-sm:flex max-sm:gap-5 max-sm: justify-center`}
    >
      <TitleSection open={open} />

      <div className="md:space-y-1 max-sm:flex max-sm:gap-2">
        <Option
          Icon={faUser}
          title="Profile"
          selected={page}
          setSelected={setPage}
          open={open}
          notifs={0}
        />
        <Option
          Icon={faCalendar}
          title="Registered Events"
          selected={page}
          setSelected={setPage}
          open={open}
          notifs={3}
        />
        <Option
          Icon={faBookmark}
          title="Wishlists"
          selected={page}
          setSelected={setPage}
          open={open}
          notifs={0}
        />
        <Option
          Icon={faReceipt}
          title="Transactions"
          selected={page}
          setSelected={setPage}
          open={open}
          notifs={0}
        />
        <Option
          Icon={faHouse}
          title="Back to Home"
          selected={page}
          setSelected={setPage}
          open={open}
          notifs={0}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option: React.FC<OptionProps> = ({
  Icon,
  title,
  selected,
  setSelected,
  open,
  notifs,
}) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors max-sm:p-2 ${
        selected === title
          ? 'bg-indigo-300 text-indigo-800 border-black border-2'
          : 'text-slate-500 hover:bg-slate-100'
      }`}
    >
      <motion.div
        layout
        className="grid h-full md:w-10 place-content-center text-lg"
      >
        <FontAwesomeIcon icon={Icon} className="max-sm:text-2xl" />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium max-sm:hidden"
        >
          {title}
        </motion.span>
      )}

      {notifs > 0 && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: '-50%' }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection: React.FC<TitleSectionProps> = ({ open }) => {
  return (
    <div className="md:mb-3 md:border-b border-slate-300 md:pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <img
            src={user.image}
            alt="profile picture"
            className="grid size-10 shrink-0 place-content-center rounded-full border border-black"
          />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="hidden sm:block"
            >
              <span className="block text-xs font-semibold">
                {user.first_name} {user.last_name}
              </span>
              <span className="block text-xs text-slate-500">Pro Plan</span>
            </motion.div>
          )}
        </div>
        {open && (
          <div className="max-sm:hidden">
            <FontAwesomeIcon icon={faChevronDown} className="mr-2" />
          </div>
        )}
      </div>
    </div>
  );
};

const ToggleClose: React.FC<ToggleCloseProps> = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((prev) => !prev)}
      className="max-sm:hidden absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className={`transition-transform ${open && 'rotate-180'}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default Sidebar;
