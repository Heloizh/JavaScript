import { useEffect, useRef } from "react";

// Componente principal que exibe estatísticas de vendas e um gráfico de área
const ProjectStatistics = () => {
  // Opções de configuração para o gráfico ApexCharts
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    series: [
      {
        name: "Developer Edition", // Série de dados para a edição de desenvolvedor
        data: [5, 10, 14, 23, 30, 42],
        color: "#1A56DB", // Cor da série no gráfico
      },
      {
        name: "Designer Edition", 
        data: [15, 28, 34, 41, 58, 64],
        color: "#508FF4", 
      }
    ],
    chart: {
      height: "100%", // Altura do gráfico em relação ao contêiner pai
      maxWidth: "100%", // Largura máxima do gráfico
      type: "area", // Tipo do gráfico: área
      fontFamily: "Inter, sans-serif", // Fonte usada no gráfico
      dropShadow: {
        enabled: false, // Sombra desativada para um visual mais plano
      },
      toolbar: {
        show: false, // Esconde a barra de ferramentas padrão do ApexCharts
      },
    },
    tooltip: {
      enabled: true, // Ativa o tooltip (informações ao passar o mouse)
      x: {
        show: false, // Esconde o tooltip na direção do eixo X
      },
    },
    legend: {
      show: false, // Esconde a legenda do gráfico
    },
    fill: {
      type: "gradient", // Tipo de preenchimento em gradiente para áreas
      gradient: {
        opacityFrom: 0.55, // Opacidade inicial do gradiente
        opacityTo: 0, // Opacidade final do gradiente
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"], // Cor de transição no gradiente
      },
    },
    dataLabels: {
      enabled: false, // Esconde os rótulos de dados nos pontos do gráfico
    },
    stroke: {
      width: 2, // Largura das linhas do gráfico de área
    },
    grid: {
      show: true, // Esconde a grade do fundo
      strokeDashArray: 4, // Traçado pontilhado para a grade
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    xaxis: {
      categories: [
        "2018", "2019", "2020", "2021", "2022", "2023", "2024"
      ],
      labels: {
        show: true, // Esconde os rótulos de categoria do eixo X
      },
      axisBorder: {
        show: true, // Esconde e mostra a borda do eixo X
      },
      axisTicks: {
        show: false, // Esconde as marcações do eixo X
      },
    },
    yaxis: {
      show: true, // Esconde e mostra o eixo Y
      labels: {
        formatter: function (value) {
          return "$" + value; // Formata os valores do eixo Y com símbolo de dólar
        },
      },
    },
  };

  // Cria uma referência para o div onde o gráfico será renderizado
  const chartRef = useRef(null);

  // Renderiza o gráfico quando o componente é montado e limpa ao desmontar
  useEffect(() => {
    if (chartRef.current && typeof ApexCharts !== "undefined") {
      // eslint-disable-next-line no-undef
      const chart = new ApexCharts(chartRef.current, options); // Cria a instância do gráfico
      chart.render(); // Renderiza o gráfico no div

      // Função de limpeza para destruir o gráfico ao desmontar o componente
      return () => {
        chart.destroy();
      };
    }
  }, [options]); // `options` é a dependência que dispara a renderização se for atualizada

  return (
    <div>
      {/* Cartão de estatísticas com título, valor, e percentual */}
      <div className="w-full bg-white rounded-lg p-4 md:p-5">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-gray pb-1">
              Project Stastics {/* Título  de vendas */}
            </h5>
          </div>
          <div className="flex items-center px-3 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
            23% {/* Percentual de crescimento */}
            <svg
              className="w-3 h-3 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              {/* Ícone de seta indicando aumento */}
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
          </div>
        </div>
        {/* Elemento onde o gráfico será renderizado */}
        <div ref={chartRef} id="data-series-chart"></div>
      </div>
    </div>
  );
};

export default ProjectStatistics;
