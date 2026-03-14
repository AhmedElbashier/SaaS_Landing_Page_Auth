"use client";

import { useId } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { ArrowUpRight, ArrowDownRight, Users, CreditCard, Activity, Box } from "lucide-react";

const generateData = (min: number, max: number) => {
  return Array.from({ length: 15 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * (max - min + 1) + min),
  }));
};

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    trend: "+20.1%",
    trendUp: true,
    data: generateData(100, 500),
    color: "#6366f1", // Indigo
  },
  {
    title: "Active Subscriptions",
    value: "+2350",
    trend: "+180",
    trendUp: true,
    data: generateData(50, 200),
    color: "#10b981", // Emerald
  },
  {
    title: "Active Users",
    value: "+12,234",
    trend: "+19%",
    trendUp: true,
    data: generateData(1000, 3000),
    color: "#f43f5e", // Rose
  },
  {
    title: "Churn Rate",
    value: "2.4%",
    trend: "-0.5%",
    trendUp: true, // green but downward
    data: generateData(1, 5).reverse(),
    color: "#eab308", // Yellow
  },
];

export function StatsGrid() {
  const id = useId();
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={i} className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between overflow-hidden">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-muted-foreground">{stat.title}</h3>
            {stat.trendUp ? (
              <ArrowUpRight className="h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-rose-500" />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className={stat.trendUp ? "text-emerald-500 font-medium" : "text-rose-500 font-medium"}>
                {stat.trend}
              </span> 
              from last month
            </p>
          </div>
          <div className="h-[60px] w-full mt-4 -mx-2 -mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stat.data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={stat.color}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
}
