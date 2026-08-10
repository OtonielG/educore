import { UserRound, BellRing } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-end p-4 lg:px-8">
      <div className="flex items-center justify-end gap-6">
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
