import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Music,
  Palette,
  BookOpen,
  Heart,
  Filter,
} from "lucide-react";
import { events_1, events_2 } from "@/assets";

const Eventos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedMonth, setSelectedMonth] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos", icon: Calendar },
    { id: "cultural", name: "Cultural", icon: Palette },
    { id: "musical", name: "Musical", icon: Music },
    { id: "educativo", name: "Educativo", icon: BookOpen },
    { id: "comunitario", name: "Comunitário", icon: Heart },
  ];

  const months = [
    { id: "todos", name: "Todos os Meses" },
    { id: "2025-01", name: "Janeiro 2025" },
    { id: "2025-02", name: "Fevereiro 2025" },
    { id: "2025-03", name: "Março 2025" },
    { id: "2025-04", name: "Abril 2025" },
    { id: "2025-05", name: "Maio 2025" },
    { id: "2025-06", name: "Junho 2025" },
  ];

  const eventos = [
    {
      id: 1,
      titulo: "Feira da Gente",
      descricao:
        "Um evento especial venha passar momentos agradaveis, saborear nossos pratos e bebida gelada! Além disso, teremos uma grande roda de viola com muita música sertaneja raiz.",
      categoria: "cultural",
      data: "Todo Domingo",
      horario: "10:00 - 17:00",
      participantes: 200,
      gratuito: true,
      imagem: events_1,
      organizador: "Prefeitura Municipal",
      destaque: true,
    },
    {
      id: 2,
      titulo: "Minas Urbano",
      descricao:
        "Vai rolar basquete 3x3 — tudo gratuito e com muita energia das ruas!",
      categoria: "comunitario",
      data: "2025-10-10",
      horario: "15:00",
      participantes: 300,
      gratuito: true,
      imagem: events_2,
      organizador: "Minas Urbano",
      destaque: false,
    },
    // {
    //   id: 2,
    //   titulo: "Sarau Literário",
    //   descricao:
    //     "Encontro mensal de literatura com declamação de poesias, leitura de contos e troca de livros.",
    //   categoria: "educativo",
    //   data: "2025-01-20",
    //   horario: "19:00 - 21:00",
    //   participantes: 50,
    //   gratuito: true,
    //   imagem:
    //     "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   organizador: "Biblioteca Comunitária",
    // },
    // {
    //   id: 3,
    //   titulo: "Concerto de Jazz",
    //   descricao:
    //     "Apresentação da Banda Municipal de Jazz com repertório clássico e contemporâneo.",
    //   categoria: "musical",
    //   data: "2025-02-10",
    //   horario: "20:00 - 22:30",
    //   participantes: 150,
    //   gratuito: true,
    //   imagem:
    //     "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   organizador: "Banda Municipal",
    // },
    // {
    //   id: 4,
    //   titulo: "Feira de Artesanato",
    //   descricao:
    //     "Exposição e venda de artesanatos locais, com oficinas gratuitas para crianças e adultos.",
    //   categoria: "cultural",
    //   data: "2025-02-25",
    //   horario: "09:00 - 17:00",
    //   participantes: 300,
    //   gratuito: true,
    //   imagem:
    //     "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   organizador: "Associação de Artesãos",
    // },
    // {
    //   id: 5,
    //   titulo: "Dia das Crianças",
    //   descricao:
    //     "Celebração especial com brincadeiras, teatro infantil, pintura facial e distribuição de brinquedos.",
    //   categoria: "comunitario",
    //   data: "2025-10-12",
    //   horario: "14:00 - 18:00",
    //   participantes: 400,
    //   gratuito: true,
    //   imagem:
    //     "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   organizador: "Secretaria de Assistência Social",
    //   destaque: true,
    // },
    // {
    //   id: 6,
    //   titulo: "Workshop de Jardinagem",
    //   descricao:
    //     "Aprenda técnicas de jardinagem urbana e sustentabilidade com especialistas.",
    //   categoria: "educativo",
    //   data: "2025-03-15",
    //   horario: "15:00 - 17:00",
    //   participantes: 30,
    //   gratuito: true,
    //   imagem:
    //     "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   organizador: "Secretaria do Meio Ambiente",
    // },
  ];

  const filteredEventos = eventos.filter((evento) => {
    const categoryMatch =
      selectedCategory === "todos" || evento.categoria === selectedCategory;
    const monthMatch =
      selectedMonth === "todos" ||
      !evento.data.includes("-") ||
      evento.data.substring(0, 7) === selectedMonth;
    return categoryMatch && monthMatch;
  });

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case "cultural":
        return "from-purple-500 to-pink-600";
      case "musical":
        return "from-blue-500 to-indigo-600";
      case "educativo":
        return "from-green-500 to-emerald-600";
      case "comunitario":
        return "from-red-500 to-rose-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getCategoryName = (categoria: string) => {
    const cat = categories.find((c) => c.id === categoria);
    return cat ? cat.name : categoria;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Eventos da{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Praça
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra e participe dos eventos culturais, educativos e
              comunitários que acontecem na Praça Sérgio Pacheco. Cultura,
              diversão e conhecimento para toda a família.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Categoria
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Month Filter */}
            <div className="lg:w-64">
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Período
              </h3>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {months.map((month) => (
                  <option key={month.id} value={month.id}>
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {filteredEventos.some((evento) => evento.destaque) && (
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Eventos em Destaque
              </h2>
              <p className="text-xl text-purple-100">
                Não perca essas atrações especiais!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEventos
                .filter((evento) => evento.destaque)
                .map((evento, index) => (
                  <motion.div
                    key={evento.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={evento.imagem}
                          alt={evento.titulo}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6">
                        <div className="flex items-center mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getCategoryColor(
                              evento.categoria
                            )}`}
                          >
                            {getCategoryName(evento.categoria)}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {evento.titulo}
                        </h3>
                        <p className="text-purple-100 mb-4">
                          {evento.descricao}
                        </p>
                        <div className="space-y-2 text-sm text-purple-100 mb-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {evento.data.includes("-")
                              ? new Date(evento.data).toLocaleDateString(
                                  "pt-BR"
                                )
                              : evento.data}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {evento.horario}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Até {evento.participantes} pessoas
                          </div>
                        </div>
                        <Link
                          to={`/eventos/${evento.id}`}
                          className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300"
                        >
                          Ver Detalhes
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todos os Eventos
            </h2>
            <p className="text-xl text-gray-600">
              {filteredEventos.length} evento
              {filteredEventos.length !== 1 ? "s" : ""} encontrado
              {filteredEventos.length !== 1 ? "s" : ""}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEventos.map((evento, index) => (
              <motion.div
                key={evento.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={evento.imagem}
                    alt={evento.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getCategoryColor(
                        evento.categoria
                      )}`}
                    >
                      {getCategoryName(evento.categoria)}
                    </span>
                  </div>
                  {evento.gratuito && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600">
                        Gratuito
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {evento.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {evento.descricao}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                      {evento.data.includes("-")
                        ? new Date(evento.data).toLocaleDateString("pt-BR")
                        : evento.data}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-purple-500" />
                      {evento.horario}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-purple-500" />
                      Até {evento.participantes} pessoas
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                      Praça Sérgio Pacheco
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {evento.organizador}
                    </span>
                    <Link
                      to={`/eventos/${evento.id}`}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEventos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum evento encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros para ver mais eventos.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Eventos;
