import tushar from "../../../../assets/Tushar.jpeg";

function Suggestions() {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <img
          className="rounded-full h-10 w-10 border p-[2px]"
          src={tushar}
          alt=""
        />

        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm">tushar</h2>
          <h3 className="text-xs text-gray-400">Works ar amazon</h3>
        </div>

        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
    </div>
  );
}

export default Suggestions;
