"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const projects = [
  {
    id: "PROJ-8782",
    name: "Website Redesign",
    client: "Acme Corp",
    status: "In Progress",
    budget: "$12,500",
    team: [
      { init: "OM", img: "https://i.pravatar.cc/150?u=1" },
      { init: "JL", img: "https://i.pravatar.cc/150?u=2" },
    ],
  },
  {
    id: "PROJ-7878",
    name: "Mobile App Wireframes",
    client: "Globex",
    status: "Completed",
    budget: "$4,200",
    team: [{ init: "SD", img: "https://i.pravatar.cc/150?u=5" }],
  },
  {
    id: "PROJ-7839",
    name: "Brand Workshop",
    client: "Soylent Corp",
    status: "Pending",
    budget: "$2,800",
    team: [
      { init: "WK", img: "https://i.pravatar.cc/150?u=4" },
      { init: "OM", img: "https://i.pravatar.cc/150?u=1" },
      { init: "IN", img: "https://i.pravatar.cc/150?u=3" },
    ],
  },
  {
    id: "PROJ-5562",
    name: "Database Migration",
    client: "Initech",
    status: "In Progress",
    budget: "$18,000",
    team: [
      { init: "JL", img: "https://i.pravatar.cc/150?u=2" },
      { init: "IN", img: "https://i.pravatar.cc/150?u=3" },
    ],
  },
  {
    id: "PROJ-8626",
    name: "SEO Audit",
    client: "Umbrella Corp",
    status: "Completed",
    budget: "$1,500",
    team: [{ init: "WK", img: "https://i.pravatar.cc/150?u=4" }],
  },
];

export function ProjectsTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Badge variant="secondary" className="bg-blue-500/15 text-blue-500 hover:bg-blue-500/25 border-transparent">In Progress</Badge>;
      case "Completed":
        return <Badge variant="secondary" className="bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25 border-transparent">Completed</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="bg-amber-500/15 text-amber-500 hover:bg-amber-500/25 border-transparent">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div>
      <div className="px-6 py-5 border-b flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">Recent Projects</h3>
          <p className="text-sm text-muted-foreground">Manage and track your active projects here.</p>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="w-[100px] pl-6">ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="hidden md:table-cell">Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Budget</TableHead>
              <TableHead className="pr-6 text-center w-[120px]">Team</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium pl-6">{project.id}</TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{project.client}</TableCell>
                <TableCell>{getStatusBadge(project.status)}</TableCell>
                <TableCell className="text-right font-medium">{project.budget}</TableCell>
                <TableCell className="pr-6">
                  <div className="flex items-center justify-center -space-x-2">
                    {project.team.map((member, i) => (
                      <Avatar key={i} className="border-2 border-background h-8 w-8">
                        <AvatarImage src={member.img} />
                        <AvatarFallback className="text-[10px]">{member.init}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
