// Importando o express e outros módulos
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001; // Porta do servidor

app.use(cors()); // Habilita o CORS
app.use(express.static("public")); // Importa imagens da pasta public

// Função para gerar números flutuantes aleatórios entre 0 e 5
function generateRandomFloat() {
  return (Math.random() * 5).toFixed(2);
}

// Função para gerar números inteiros aleatórios entre 1 e 20
function generateRandomInt() {
  return Math.floor(Math.random() * 20) + 1;
}

// Função para filtrar os ícones de acordo com as categorias
function filterIcon(category) {
  const icons = {
    Mathematics: "public/iconMath.png",
    Biology: "public/iconBiology.png",
    History: "public/iconHistory.png",
    Physics: "public/iconAtom.png",
  };
  return icons[category];
}

// Função para adicionar valores de Rate e lessons aos cursos
function enrichCourses(courses) {
  return courses.map((course) => ({
    ...course,
    lessons: generateRandomInt(),
    Rate: generateRandomFloat(),
  }));
}


// Dados dos cursos
const courses = [
  {
    id: 1,
    category: "Mathematics",
    icon: filterIcon("Mathematics"),
    courses: enrichCourses([
      { id: 1, title: "Linear Algebra", Type: "It's Applications" },
      { id: 2, title: "Differential", Type: "Integral Calculus" },
      { id: 3, title: "Analytical", Type: "Vector Geometry" },
      { id: 4, title: "Number Theory", Type: "Cryptography" },
      { id: 5, title: "Statistics", Type: "Probability" },
      { id: 6, title: "Discrete Mathematics", Type: "Logic" },
      {
        id: 7,
        title: "Differential Equations",
        Type: "Mathematical Modeling",
      },
      { id: 8, title: "Numerical Analysis", Type: "Computational Methods" },
    ]),
  },
  {
    id: 2,
    category: "Biology",
    icon: filterIcon("Biology"),
    courses: enrichCourses([
      { id: 1, title: "Molecular Genetics", Type: "Biotechnology" },
      { id: 2, title: "Ecology", Type: "Environmental Conservation" },
      { id: 3, title: "Cellular", Type: "Molecular Biology" },
      { id: 4, title: "Evolutionary Biology", Type: "Ecosystems" },
      { id: 5, title: "Microbiology", Type: "Immunology" },
    ]),
  },
  {
    id: 3,
    category: "History",
    icon: filterIcon("History"),
    courses: enrichCourses([
      { id: 1, title: "Ancient History", Type: "Culture" },
      { id: 2, title: "Medieval History", Type: "Feudalism" },
      { id: 3, title: "Modern History", Type: "Revolutions and Wars" },
      { id: 4, title: "Brazilian History", Type: "Colonization" },
      { id: 5, title: "Contemporary History", Type: "The 20th Century" },
      { id: 6, title: "History of Political", Type: "Ideas" },
      { id: 7, title: "History of Religions", Type: "Spiritual Movements" },
      { id: 8, title: "Archaeology", Type: "Historical Methods" },
    ]),
  },
  {
    id: 4,
    category: "Physics",
    icon: filterIcon("Physics"),
    courses: enrichCourses([
      { id: 1, title: "Classical Physics", Type: "Acoustics" },
      { id: 2, title: "Quantum Physics", Type: "Theories" },
      { id: 3, title: "Modern Physics", Type: "Relativity" },
      { id: 4, title: "Electromagnetism", Type: "Theory and Applications" },
    ]),
  },
];

// Geração de informações gerais
const general = courses.map((category) => ({
  category: category.category,
  totalCourses: category.courses.length,
  averageRate: (
    category.courses.reduce((sum, course) => sum + parseFloat(course.Rate), 0) /
    category.courses.length
  ).toFixed(2),
}));

// Rota que retorna os cursos
app.get("/api/courses", (req, res) => {
  res.json(courses); // Retorna a lista de cursos como resposta em JSON
});

// Rota que retorna as informações gerais
app.get("/api/general", (req, res) => {
  res.json(general); // Retorna a lista de informações gerais
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
