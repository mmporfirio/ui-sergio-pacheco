import {
  history_1,
  history_2,
  history_3,
  history_4,
  history_5,
} from "@/assets";
import { motion } from "framer-motion";
import { Calendar, Users, TreePine, Building, Star } from "lucide-react";

const Historia = () => {
  const timelineEvents = [
    {
      year: "1960",
      title: "Fundação da Praça",
      description:
        "Iniciam-se os processos de concepção e projeto da praça, com a apresentação de propostas urbanísticas e planos para a construção do conjunto, como o 'Ante-Projeto – Plano de Urbanisação'",
      icon: Building,
      image: history_1,
    },
    {
      year: "1976",
      title: "Inauguração da Praça",
      description:
        "Em novembro, a parte recreativa da praça é inaugurada, durante a gestão do prefeito Renato de Freitas. A inauguração não foi amplamente noticiada e a cerimônia foi pouco prestigiada pela elite local, segundo relatos da época.",
      icon: TreePine,
      image: history_2,
    },
    {
      year: "1990",
      title: "Centro Comunitário",
      description:
        "Remoção do lago e a instalação de quadras esportivas no seu lugar, alterando o projeto original.",
      icon: Users,
      image: history_3,
    },
    {
      year: "2021",
      title: "Modernização",
      description:
        "A prefeitura de Uberlândia promoveu uma série de ações de revitalização na praça. ",
      icon: Star,
      image: history_4,
    },
    {
      year: "2026",
      title: "Era Digital",
      description:
        "Implementação de Wi-Fi gratuito e sistema digital para agendamento de eventos, modernizando a gestão da praça.",
      icon: Calendar,
      image: history_5,
    },
  ];

  // const personalidades = [
  //   {
  //     nome: "Sérgio Pacheco",
  //     periodo: "1920-1985",
  //     descricao:
  //       "Político e ativista comunitário que dedicou sua vida ao desenvolvimento urbano e social da região.",
  //     contribuicao:
  //       "Idealizador do projeto original da praça e defensor dos espaços públicos de qualidade.",
  //   },
  //   {
  //     nome: "Maria Santos",
  //     periodo: "1960-presente",
  //     descricao:
  //       "Moradora histórica e organizadora de eventos comunitários há mais de 40 anos.",
  //     contribuicao:
  //       "Responsável pela organização dos primeiros festivais culturais da praça.",
  //   },
  // ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              História da{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Praça
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra a rica história de mais de 70 anos da Praça Sérgio
              Pacheco, desde sua fundação até os dias atuais, e conheça as
              pessoas que fizeram a diferença.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Linha do Tempo
            </h2>
            <p className="text-xl text-gray-600">
              Os momentos mais importantes da nossa história
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 to-orange-500 rounded-full" />

            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-around mb-16 max-md:!flex-col  max-md:gap-5  ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 max-md:!px-0 max-md:w-[80vw] ${
                      isEven ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div
                          className={`flex items-center ${
                            isEven ? "flex-row-reverse" : "flex-row"
                          }`}
                        >
                          <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-xl">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <span
                            className={`text-2xl font-bold text-amber-600 ${
                              isEven ? "mr-4" : "ml-4"
                            }`}
                          >
                            {event.year}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full border-4 border-white shadow-lg z-10 max-md:-bottom-10" />

                  {/* Image */}
                  <div
                    className={`w-5/12 max-md:px-0 max-md:w-[80vw] ${
                      isEven ? "pl-8" : "pr-8"
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalidades Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personalidades Históricas
            </h2>
            <p className="text-xl text-gray-600">
              Pessoas que marcaram a história da nossa praça
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalidades.map((pessoa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {pessoa.nome.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {pessoa.nome}
                    </h3>
                    <p className="text-amber-600 font-medium">
                      {pessoa.periodo}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pessoa.descricao}
                </p>
                <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
                  <p className="text-amber-800 font-medium">Contribuição:</p>
                  <p className="text-amber-700">{pessoa.contribuicao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Legacy Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Um Legado de <span className="text-yellow-200">Comunidade</span>
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
              Mais de 70 anos de história, tradição e memórias que continuam a
              inspirar novas gerações a valorizar e preservar nossos espaços
              públicos.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left max-w-2xl mx-auto">
              <blockquote className="text-lg text-white italic">
                "A Praça Sérgio Pacheco não é apenas um espaço físico, é o
                coração pulsante da nossa comunidade, onde histórias se
                encontram e o futuro se constrói."
              </blockquote>
              <cite className="block mt-4 text-orange-200 font-medium">
                - Arquivo Histórico Local
              </cite>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Historia;
