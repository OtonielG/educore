"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-dashboard-surface p-4 rounded-3xl">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
