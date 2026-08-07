import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <form className="flex min-w-25 max-w-md grow items-center rounded-full border-2 border-white bg-gray-50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),inset_0_3px_8px_rgba(0,0,0,0.25)]">
        <input
          type="text"
          className="min-w-0 grow bg-transparent px-5 py-2 outline-none"
        />
        <button type="submit" className="shrink-0 px-4" aria-label="Buscar">
          <Search className="size-5" />
        </button>
      </form>
    </div>
  );
}
