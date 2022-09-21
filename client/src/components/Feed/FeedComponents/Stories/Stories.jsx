import Story from "./Story";

function Stories() {
  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border 
        rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      <Story />

      <Story />
    </div>
  );
}

export default Stories;
