import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActivity() {
  const activities = [
    {
      user: "Olivia Martin",
      email: "olivia.martin@email.com",
      action: "purchased",
      item: "Pro Subscription",
      amount: "+$29.00",
      time: "2h ago",
      initials: "OM",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
      user: "Jackson Lee",
      email: "jackson.lee@email.com",
      action: "upgraded to",
      item: "Enterprise Plan",
      amount: "+$99.00",
      time: "5h ago",
      initials: "JL",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      user: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      action: "purchased",
      item: "Pro Subscription",
      amount: "+$29.00",
      time: "12h ago",
      initials: "IN",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
      user: "William Kim",
      email: "will@email.com",
      action: "canceled",
      item: "Pro Subscription",
      amount: "-$29.00",
      time: "1d ago",
      initials: "WK",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
    {
      user: "Sofia Davis",
      email: "sofia.davis@email.com",
      action: "purchased",
      item: "Pro Subscription",
      amount: "+$29.00",
      time: "1d ago",
      initials: "SD",
      avatar: "https://i.pravatar.cc/150?u=5",
    },
  ];

  return (
    <>
      <div className="px-6 py-5 border-b">
        <h3 className="font-semibold text-lg">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">You made 265 sales this month.</p>
      </div>
      <div className="p-6 flex-1 flex flex-col gap-8">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-center gap-4">
            <Avatar className="h-9 w-9">
              <AvatarImage src={activity.avatar} alt={activity.user} />
              <AvatarFallback>{activity.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-sm font-medium leading-none">
                {activity.user}
                <span className="text-muted-foreground font-normal ml-1">
                  {activity.action} {activity.item}
                </span>
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{activity.email}</p>
                <div className="flex gap-2 text-xs">
                  <span className="text-muted-foreground">{activity.time}</span>
                  <span className={`font-medium ${activity.amount.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {activity.amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
