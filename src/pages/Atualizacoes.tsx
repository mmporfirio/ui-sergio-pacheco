import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Calendar,
  Wrench,
  Lightbulb,
  Users,
  Shield,
  Wifi,
  Users2,
} from "lucide-react";
import { feat_1, feat_2, feat_3, feat_4, feat_5 } from "@/assets";

const Atualizacoes = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const categories = [
    { id: "todas", name: "Todas", icon: Wrench },
    { id: "concluidas", name: "Concluídas", icon: CheckCircle },
    { id: "em-andamento", name: "Em Andamento", icon: Clock },
    { id: "planejadas", name: "Planejadas", icon: Calendar },
  ];

  const atualizacoes = [
    {
      id: 1,
      titulo: "Nova Iluminação LED",
      descricao:
        "Substituição completa do sistema de iluminação por tecnologia LED, proporcionando maior segurança e economia de energia.",
      categoria: "concluidas",
      data: "2024-12-15",
      progresso: 100,
      icon: Lightbulb,
      imagem: feat_1,
      beneficios: [
        "Redução de 60% no consumo de energia",
        "Melhor visibilidade noturna",
        "Maior segurança para visitantes",
      ],
    },
    {
      id: 2,
      titulo: "Renovação do Playground",
      descricao:
        "Modernização completa da área infantil com novos brinquedos seguros e piso emborrachado.",
      categoria: "concluidas",
      data: "2024-11-20",
      progresso: 100,
      icon: Users,
      imagem: feat_2,
      beneficios: [
        "Brinquedos mais seguros",
        "Acessibilidade melhorada",
        "Área ampliada em 40%",
      ],
    },
    {
      id: 3,
      titulo: "Sistema de Segurança",
      descricao:
        "Instalação de câmeras de monitoramento e sistema de alarme para maior proteção do patrimônio público.",
      categoria: "em-andamento",
      data: "2025-02-01",
      progresso: 75,
      icon: Shield,
      imagem: feat_3,
      beneficios: [
        "Monitoramento 24h",
        "Redução de vandalismo",
        "Maior sensação de segurança",
      ],
    },
    {
      id: 4,
      titulo: "Wi-Fi Gratuito",
      descricao:
        "Implementação de rede Wi-Fi pública gratuita em toda a extensão da praça.",
      categoria: "em-andamento",
      data: "2025-01-30",
      progresso: 60,
      icon: Wifi,
      imagem: feat_4,
      beneficios: [
        "Internet gratuita",
        "Conectividade para eventos",
        "Inclusão digital",
      ],
    },
    {
      id: 5,
      titulo: "Revitalização quadra",
      descricao:
        "Revitalização de quadras com nova pintura e demarcações precisas, garantindo mais beleza e segurança para a prática esportiva.",
      categoria: "concluidas",
      data: "2025-10-7",
      progresso: 100,
      icon: Users2,
      imagem: feat_5,
      beneficios: [
        "Melhora a aparência do espaço",
        "Aumenta a durabilidade do piso",
        "Proporciona mais conforto e segurança aos atletas",
      ],
    },
    // {
    //   id: 5,
    //   titulo: "Jardim Sensorial",
    //   descricao:
    //     "Criação de um espaço dedicado a plantas aromáticas e táteis para experiência sensorial completa.",
    //   categoria: "planejadas",
    //   data: "2025-04-15",
    //   progresso: 0,
    //   icon: TreePine,
    //   imagem:
    //     "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   beneficios: [
    //     "Experiência sensorial única",
    //     "Educação ambiental",
    //     "Acessibilidade para deficientes visuais",
    //   ],
    // },
    // {
    //   id: 6,
    //   titulo: "Anfiteatro ao Ar Livre",
    //   descricao:
    //     "Construção de um pequeno anfiteatro para apresentações culturais e eventos comunitários.",
    //   categoria: "planejadas",
    //   data: "2025-06-01",
    //   progresso: 0,
    //   icon: Users,
    //   imagem:
    //     "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   beneficios: [
    //     "Espaço para eventos culturais",
    //     "Capacidade para 100 pessoas",
    //     "Acústica natural",
    //   ],
    // },
  ];

  const filteredAtualizacoes =
    selectedCategory === "todas"
      ? atualizacoes
      : atualizacoes.filter((item) => item.categoria === selectedCategory);

  const getStatusColor = (categoria: string) => {
    switch (categoria) {
      case "concluidas":
        return "from-green-500 to-emerald-600";
      case "em-andamento":
        return "from-blue-500 to-indigo-600";
      case "planejadas":
        return "from-purple-500 to-pink-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getStatusText = (categoria: string) => {
    switch (categoria) {
      case "concluidas":
        return "Concluída";
      case "em-andamento":
        return "Em Andamento";
      case "planejadas":
        return "Planejada";
      default:
        return "Status";
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Atualizações da{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Praça
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acompanhe todas as melhorias, renovações e projetos futuros que
              tornam a Praça Sérgio Pacheco um espaço cada vez melhor para nossa
              comunidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atualizações Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAtualizacoes.map((atualizacao, index) => {
              const Icon = atualizacao.icon;
              return (
                <motion.div
                  key={atualizacao.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={atualizacao.imagem}
                      alt={atualizacao.titulo}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getStatusColor(
                          atualizacao.categoria
                        )}`}
                      >
                        {getStatusText(atualizacao.categoria)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${getStatusColor(
                          atualizacao.categoria
                        )} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {atualizacao.titulo}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {new Date(atualizacao.data).toLocaleDateString(
                            "pt-BR"
                          )}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {atualizacao.descricao}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Progresso
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {atualizacao.progresso}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${atualizacao.progresso}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${getStatusColor(
                            atualizacao.categoria
                          )}`}
                        />
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Benefícios:
                      </h4>
                      {atualizacao.beneficios.map((beneficio, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {beneficio}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Impacto das Melhorias
            </h2>
            <p className="text-xl text-blue-100">
              Resultados concretos dos nossos investimentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2", label: "Projetos Concluídos", icon: CheckCircle },
              { number: "2", label: "Em Andamento", icon: Clock },
              { number: "6", label: "Planejados", icon: Calendar },
              { number: "85%", label: "Satisfação da Comunidade", icon: Users },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <Icon className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="flex items-center my-[5dvh] justify-center">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-primary rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Tem alguma sugestão de melhoria?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Sua opinião é fundamental para continuarmos aprimorando nossa praça.
            Entre em contato conosco!
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Enviar Sugestão
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default Atualizacoes;
