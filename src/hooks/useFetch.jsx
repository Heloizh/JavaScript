import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [courses, setCourses] = useState([]); // Guardar os cursos
  const [general, setGeneral] = useState([]); //Guardar informações gerais
  const [visibleCourses, setVisibleCourses] = useState([]); // Cursos visíveis
  const [showAll, setShowAll] = useState(); // Controle para exibir todos os cursos

  
  // Busca da API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json(); // Recebe os cursos da API
        setCourses(data); // Atualiza o estado com os cursos
        setGeneral(data);

        // Mostra 3 cursos aleatórios inicialmente
        setVisibleCourses(getRandomCourses(data, 3));

        //Verificação para ver se o sistema está rodando
        return console.log(data);
      } catch (error) {
        console.error("Erro ao buscar cursos", error);
      }
    };
    fetchCourses();
  }, [url]);

  // Função para exibir cursos aleatórios
  const getRandomCourses = (courseList, numCourses) => {
    const shuffled = [...courseList]
      .flatMap((category) => category.courses) // Pega todos os cursos de todas as categorias
      .sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numCourses); // Retorna os 3 primeiros cursos
  };

  // Função para exibir todos os cursos organizados por categoria
  const handleViewAll = () => {
    setShowAll(courses.length);
  };

  return { courses, visibleCourses, showAll, handleViewAll, general };
}

export default useFetch;
