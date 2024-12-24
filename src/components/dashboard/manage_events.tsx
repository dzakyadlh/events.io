import { useHostEvents } from '@/hooks/useEvents';
import User from '@/models/user';
import LoadingScreen from '../loading/loading_screen';
import { Card } from '../card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputDropdown } from '../dropdown/dropdown';
import Input from '../input/input';
import { useState } from 'react';
import { CustomButton } from '../button/button';

interface ManageEventsProps {
  user: User;
}

const ManageEvents = ({ user }: ManageEventsProps) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [poster, setPoster] = useState('');
  const [quota, setQuota] = useState('');
  const [price, setPrice] = useState('');
  const [eventType, setEventType] = useState('');
  const [category, setCategory] = useState('');
  const [speakers, setSpeakers] = useState([]);
  const [description, setDescription] = useState('');
  const [keypoints, setKeypoints] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [faq, setFaq] = useState([]);

  const {
    data: host_events,
    isPending,
    isError,
    error,
  } = useHostEvents(user._id);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <main className="w-full min-h-screen flex flex-col p-10 gap-8">
      <h2 className="text-2xl text-black font-bold">Manage Your Events</h2>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 place-items-center">
        {host_events && host_events?.length > 0 ? (
          host_events?.map((event, index) => <Card event={event} key={index} />)
        ) : (
          <div className="w-3/5 h-full flex flex-col">
            <p className="text-black text-center">
              You don't have any events. Click the button below to create some!
            </p>
          </div>
        )}
      </section>
      <section>
        <li className="flex items-start gap-4 mb-4">
          <InputDropdown
            label="Create a New Event"
            content={
              <form className="w-full xl:w-4/5 flex flex-col gap-2 pt-5">
                <h4 className="font-semibold mb-2">Event Data</h4>
                <div className="flex items-center gap-4 mb-5">
                  <p className="font-medium text-black w-1/6">Title</p>
                  <Input
                    value={title}
                    setValue={setTitle}
                    placeholder=""
                    className="flex-grow border-black"
                  />
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <p className="font-medium text-black w-1/6">Start Time</p>
                  <Input
                    value={startTime}
                    setValue={setStartTime}
                    placeholder=""
                    className="flex-grow border-black"
                  />
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <p className="font-medium text-black w-1/6">End Time</p>
                  <Input
                    value={endTime}
                    setValue={setEndTime}
                    placeholder=""
                    className="flex-grow border-black"
                  />
                </div>
                <h4 className="font-semibold mb-2 mt-5">Event Details</h4>
                <div className="flex items-center gap-4 mb-5">
                  <p className="font-medium text-black w-1/6">Title</p>
                  <Input
                    value={title}
                    setValue={setTitle}
                    placeholder=""
                    className="flex-grow border-black"
                  />
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <p className="font-medium text-black w-1/6">Start Time</p>
                  <Input
                    value={startTime}
                    setValue={setStartTime}
                    placeholder=""
                    className="flex-grow border-black"
                  />
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <p className="font-medium text-black w-1/6">End Time</p>
                  <Input
                    value={endTime}
                    setValue={setEndTime}
                    placeholder=""
                    className="flex-grow border-black"
                  />
                </div>
                <div className="flex gap-5 py-5">
                  <CustomButton
                    children="Cancel"
                    onClick={() => {}}
                    className="ml-auto bg-red-600"
                  />
                  <CustomButton
                    children="Create Event"
                    onClick={() => {}}
                    className=""
                  />
                </div>
              </form>
            }
          />
        </li>
      </section>
    </main>
  );
};

export default ManageEvents;
