"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-dashboard-surface lg:h-full p-4 rounded-3xl border-2 border-dashboard-surface shadow-[inset_0_5px_12px_rgba(0,0,0,0.25),inset_0_-2px_5px_rgba(255,255,255,0.8)]">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
