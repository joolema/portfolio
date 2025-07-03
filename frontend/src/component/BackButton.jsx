import { useNavigate } from "react-router-dom";

const BackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border border-[#242424] rounded-md text-[#FAAD1B] hover:bg-[#22304C] hover:text-white transition-colors duration-200"
    >
      Back
    </button>
  );
};

export default BackButton;
