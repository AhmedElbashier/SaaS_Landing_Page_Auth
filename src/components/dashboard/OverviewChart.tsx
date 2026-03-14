"use client";

import { useTheme } from "next-themes";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 2900 },
  { name: "Jun", total: 3200 },
  { name: "Jul", total: 2800 },
  { name: "Aug", total: 3600 },
  { name: "Sep", total: 4100 },
  { name: "Oct", total: 3800 },
  { name: "Nov", total: 4600 },
  { name: "Dec", total: 5200 },
];

export function OverviewChart() {
  const { theme } = useTheme();
  
  const tooltipStyle = {
    backgroundColor: theme === 'dark' ? '#09090b' : '#ffffff',
    borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7',
    color: theme === 'dark' ? '#fafafa' : '#09090b',
    borderRadius: '8px',
  };

  return (
    <>
      <div className="px-6 py-5 border-b">
        <h3 className="font-semibold text-lg">Revenue Overview</h3>
        <p className="text-sm text-muted-foreground">Monthly revenue breakdown over the year.</p>
      </div>
      <div className="p-6 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#27272a' : '#e4e4e7'} />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: theme === 'dark' ? '#27272a' : '#e4e4e7', strokeWidth: 2 }} />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorTotal)"
              isAnimationActive={true}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
