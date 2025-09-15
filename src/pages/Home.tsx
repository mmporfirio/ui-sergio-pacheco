import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, History, Wrench, MapPin, Users, Leaf } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: History,
      title: "História Rica",
      description:
        "Descubra a fascinante história da Praça Sérgio Pacheco e sua importância para a comunidade.",
      link: "/historia",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Wrench,
      title: "Atualizações",
      description:
        "Acompanhe as melhorias e renovações que tornam nossa praça ainda mais especial.",
      link: "/atualizacoes",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Calendar,
      title: "Eventos",
      description:
        "Participe dos eventos culturais e comunitários que acontecem em nossa praça.",
      link: "/eventos",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Visitantes Diários" },
    { icon: Calendar, number: "50+", label: "Eventos por Ano" },
    { icon: Leaf, number: "100+", label: "Árvores Plantadas" },
    { icon: MapPin, number: "1", label: "Localização Central" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-800/30 to-teal-900/20 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/commons/3/3b/Sergio_Pacheco_Centro_Uberl%C3%A2ndia.jpg")',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Praça{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                Sérgio Pacheco
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Um espaço de encontro, cultura e natureza no coração da nossa
              comunidade. Descubra a história, acompanhe as melhorias e
              participe dos eventos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/historia"
                className="bg-gradient-to-r from-primary to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Conheça a História
              </Link>
              <Link
                to="/eventos"
                className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Ver Eventos
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Nossa{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Praça
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça todos os aspectos que fazem da Praça Sérgio Pacheco um
              lugar especial
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={feature.link} className="block">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa Praça em Números
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Veja o impacto positivo que a Praça Sérgio Pacheco tem na
              comunidade
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <Icon className="h-12 w-12 text-green-200 mx-auto mb-4" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-green-100 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Faça Parte da Nossa{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Comunidade
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Participe dos eventos, conheça a história e ajude a manter viva a
              tradição da Praça Sérgio Pacheco
            </p>
            <Link
              to="/eventos"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Ver Próximos Eventos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
