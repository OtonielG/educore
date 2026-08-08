"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-dashboard-surface lg:h-full p-4 rounded-3xl shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_3px_rgba(255,255,255,0.55)]">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
