// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectStastics from "../components/ProjectStastics";
import Platforms from "../components/Platforms";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import MemberCard from "../components/MemberCard";

// Arrays contendo dados de projetos, clientes e membros
// Estes dados são usados para renderizar componentes dinâmicos no componente Home.
// PROJETCS //
const projects = [
  {
    name: "Website Redesign",
    type: "Web Development",
    date: "2024-02-20",
    members: ["Ana", "Loura", "Carlos"],
    files: 4,
    progress: 20,
  },
  {
    name: "Mobile App Development",
    type: "Mobile Application",
    date: "2024-02-10",
    members: ["David", "Lucas", "Alice"],
    files: 9,
    progress: 80,
  },
  {
    name: "Marketing Campaign",
    type: "Marketing",
    date: "2024-04-10",
    members: ["George", "Vitor", "Henry"],
    files: 1,
    progress: 18,
  },
  {
    name: "Product Launch",
    type: "Product Management",
    date: "2024-02-14",
    members: ["Lya", "Sophie", "Rafah"],
    files: 3,
    progress: 17,
  },
];
// PROJETCS //

// CLIENTS//
const clients = [
  {
    name: "ABC Corporation",
    title: "CEO",
    date: "2024-04-10T09:00:00Z",
  },
  {
    name: "XYZ Company",
    title: "Marketing Director",
    date: "2024-03-20T19:30:00Z",
  },
  {
    name: "123 Industries",
    title: "Project Manager",
    date: "2024-05-16T11:10:00Z",
  },
  {
    name: "Tech Innovations Ltd.",
    title: "CTO",
    date: "2024-02-03T10:45:00Z",
  },
];
// CLIENTS//

// MEMBERS //
const members = [
  {
    total_members: 4,
    job: "UI Designer",
  },
  {
    total_members: 8,
    job: "Frontend Developer",
  },
  {
    total_members: 3,
    job: "Backend Developer",
  },
  {
    total_members: 6,
    job: "Mobile App Developer",
  },
];
// MEMBERS //

const Home = () => {
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {/* Grid para estatísticas e plataformas */}
        <ProjectStastics />
        <Platforms />
        <ProjectStastics />
        <Platforms />
      </div>
      <div className="flex justify-between items-center py-4">
        {/* Cabeçalho para seção de projetos */}
        <h1 className="text-lg font-semibold">Current Projects</h1>
        <p className="text-sm underline text-blue-600">See all</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Renderiza os cards de projetos usando o array `projects` */}
        {
          projects &&
            // eslint-disable-next-line react/jsx-key
            projects.map((project) => <ProjectCard project={project} />)
          // Cada `ProjectCard` recebe os dados de um projeto via prop
        }
      </div>

      <div className="flex justify-between items-center py-4">
        {/* Cabeçalho para seção de clientes */}
        <h1 className="text-lg font-semibold">Current Clients</h1>
        <p className="text-sm underline text-blue-600">See all</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Renderiza os cards de clientes usando o array `clients` */}
        {
          // eslint-disable-next-line react/jsx-key
          clients && clients.map((client) => <ClientCard client={client} />)
          // Cada `ClientCard` recebe os dados de um cliente via prop
        }
      </div>

      <div className="flex justify-between items-center py-4">
        {/* Cabeçalho para seção de membros */}
        <h1 className="text-lg font-semibold">Members</h1>
        <p className="text-sm underline text-blue-600">See all</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {
          // eslint-disable-next-line react/jsx-key
          members && members.map((member) => <MemberCard member={member} />)
          // Cada `MemberCard` recebe os dados de um membro via prop
        }
      </div>
    </div>
  );
};

export default Home;
