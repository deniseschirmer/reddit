import Divider from "./Divider";

const Info = () => {
  return (
    <div className="flex flex-col w-full ">
      <img
        className="h-32 object-cover w-full"
        src="/banner.png"
        alt="banner"
      />
      <div className="p-4 flex flex-col gap-4 items-start">
        <h4 className="text-lg font-bold">r/pokemon</h4>
        <button className="rounded-full py-2 px-5 bg-blue-600 text-white">
          Unir-se
        </button>
        <div>
          <strong>Pokémon: Gotta Catch 'Em All!</strong>
          <p>
            r/pokemon is an unofficial Pokémon fan community. This is the place
            for most things Pokémon on Reddit—TV shows, video games, toys,
            trading cards, you name it!
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <strong>4.4m</strong>
            <p className="text-sm">Members</p>
          </div>
          <div className="flex flex-col gap-1">
            <strong>4.4k</strong>
            <p className="text-sm">Online</p>
          </div>
          <div className="flex flex-col gap-1">
            <strong>Top 1%</strong>
            <p className="text-sm">Classificar por tamanho</p>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 w-full">
          <span className="font-semibold">MENU</span>
          <button className="w-full rounded-full bg-gray-200 py-1 font-bold ">
            Filter by Category
          </button>
          <button className="w-full rounded-full bg-gray-200 py-1 font-bold ">
            Exclude a Category
          </button>
          <button className="w-full rounded-full bg-gray-200 py-1 font-bold ">
            Recurring Threads
          </button>
          <button className="w-full rounded-full bg-gray-200 py-1 font-bold ">
            Rules
          </button>
          <button className="w-full rounded-full bg-gray-200 py-1 font-bold ">
            Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
