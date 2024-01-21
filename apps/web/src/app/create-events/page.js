import 'tailwindcss/tailwind.css';
import BasicInfo from '../../components/basic-info';
import Location from '../../components/location';
import DateAndTime from '../../components/date-and-time';
import Price from '../../components/price';
import Description from '../../components/description';

export default function CreateEvent() {
  return (
    <div className="px-5 flex flex-col items-center mt-12">
      <div>
        <BasicInfo />
        <Location />
        <DateAndTime />
        <Price />
        <Description />
      </div>
      <div className="mt-8">
        <button
          onClick={handleSaveClick}
          className="bg-[#f05537] text-white py-2 px-2 md:px-4 rounded-md hover:bg-[#f05537]/70 focus:outline-none focus:shadow-outline"
        >
          Save and Publish
        </button>
      </div>
    </div>
  );
}
