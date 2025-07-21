import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const BackButton = ({ to, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(`/${to}`);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex w-20 border-2 rounded-2xl items-center border-[var(--orange)] justify-around hover:bg-[#22304C] hover:text-white transition-colors duration-200">
      <ChevronLeftIcon className="w-5 h-5 ml-3 mr-0 text-3xl text-[var(--orange)]" />
      <button
        onClick={handleClick}
        className={`${className} py-2 pr-4 rounded-md text-[#FAAD1B] `}
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
