import { Search, UserRound, BellRing } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-15 p-4 lg:px-8">
      <form className="flex min-w-25 max-w-md grow items-center rounded-full border-2 border-white bg-gray-50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),inset_0_3px_8px_rgba(0,0,0,0.25)]">
        <input
          type="text"
          className="min-w-0 grow bg-transparent px-5 py-2 outline-none"
        />
        <button type="submit" className="shrink-0 px-4" aria-label="Buscar">
          <Search className="size-5" />
        </button>
      </form>
      <div className="hidden md:flex justify-center items-center gap-6">
        <div className="relative">
          <BellRing className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 flex justify-center items-center h-[18px] w-[18px] text-[12px] rounded-full bg-dashboard-accent text-dashboard-surface">
            1
          </span>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <span className="font-semibold leading-0">Director</span>
          <span className="text-sm leading-0">Admin</span>
        </div>
        <UserRound className="bg-dashboard-accent text-dashboard-surface h-9 w-9 rounded-full p-1" />
      </div>
    </div>
  );
}
