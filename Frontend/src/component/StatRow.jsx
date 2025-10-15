import React from "react";
import StatCard from "./StatCard";

export default function StatsRow() {
  const stats = [
    { title: "Total certificates issued", value: 110 },
    { title: "Total certificates issued in this year", value: 110 },
    { title: "Total certificates issued in this month", value: 110 },
    { title: "Total certificates issued in this month", value: 110 },
  ];

  return (
    <div className="flex gap-6 my-[2.5em] justify-center">
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}
