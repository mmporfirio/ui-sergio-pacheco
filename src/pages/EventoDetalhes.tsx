import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  Share2,
  Heart,
} from "lucide-react";
import { toast } from "react-hot-toast";

const EventoDetalhes = () => {
  const { id } = useParams();
  const [interessado, setInteressado] = useState(false);

  // Mock data - em uma aplicação real, isso viria de uma API
  const evento = {
    id: parseInt(id || "1"),
    titulo: "Festival de Inverno",
    descricao:
      "Um evento especial para celebrar o inverno com música ao vivo, comidas típicas e atividades para toda a família. O Festival de Inverno da Praça Sérgio Pacheco é uma tradição que reúne a comunidade em uma celebração única, com atrações para todas as idades.",
    categoria: "cultural",
    data: "2025-07-15",
    horario: "14:00 - 22:00",
    participantes: 200,
    gratuito: true,
    imagem:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    organizador: "Prefeitura Municipal",
    contato: {
      telefone: "(11) 3456-7890",
      email: "eventos@prefeitura.gov.br",
    },
    programacao: [
      {
        horario: "14:00",
        atividade: "Abertura oficial com apresentação da Banda Municipal",
      },
      { horario: "15:00", atividade: "Workshop de artesanato para crianças" },
      { horario: "16:30", atividade: "Apresentação de dança folclórica" },
      {
        horario: "18:00",
        atividade: "Feira gastronômica com pratos típicos de inverno",
      },
      { horario: "19:30", atividade: "Show musical com artistas locais" },
      { horario: "21:00", atividade: "Encerramento com queima de fogos" },
    ],
    detalhes: {
      local: "Praça Sérgio Pacheco - Área Central",
      estacionamento: "Disponível nas ruas adjacentes",
      acessibilidade: "Evento totalmente acessível",
      restricoes: "Não é permitido consumo de bebidas alcoólicas",
      clima: "Evento acontece com chuva ou sol",
    },
    galeria: [
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  };

  const handleInteresse = () => {
    setInteressado(!interessado);
    if (!interessado) {
      toast.success(
        "Interesse registrado! Você receberá atualizações sobre este evento."
      );
    } else {
      toast.success("Interesse removido.");
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: evento.titulo,
        text: evento.descricao,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${evento.imagem}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/eventos"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar aos eventos
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {evento.titulo}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {new Date(evento.data).toLocaleDateString("pt-BR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {evento.horario}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Praça Sérgio Pacheco
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sobre o Evento
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {evento.descricao}
                </p>
              </motion.div>

              {/* Programação */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Programação
                </h2>
                <div className="space-y-4">
                  {evento.programacao.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="bg-purple-600 text-white px-3 py-1 rounded-lg font-semibold text-sm min-w-fit">
                        {item.horario}
                      </div>
                      <p className="text-gray-700 flex-1">{item.atividade}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Galeria */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Galeria
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {evento.galeria.map((imagem, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden"
                    >
                      <img
                        src={imagem}
                        alt={`Galeria ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100"
              >
                <div className="space-y-4">
                  <button
                    onClick={handleInteresse}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      interessado
                        ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${interessado ? "fill-current" : ""}`}
                    />
                    <span>
                      {interessado ? "Tenho Interesse" : "Marcar Interesse"}
                    </span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <Share2 className="h-5 w-5" />
                    <span>Compartilhar</span>
                  </button>
                </div>
              </motion.div>

              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Informações do Evento
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">
                      Até {evento.participantes} pessoas
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">
                      {evento.detalhes.local}
                    </span>
                  </div>
                  {evento.gratuito && (
                    <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">
                      Evento Gratuito
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Organização
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 font-medium">
                    {evento.organizador}
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">
                      {evento.contato.telefone}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">
                      {evento.contato.email}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Detalhes Importantes
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">
                      Estacionamento:
                    </span>
                    <p className="text-gray-600">
                      {evento.detalhes.estacionamento}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Acessibilidade:
                    </span>
                    <p className="text-gray-600">
                      {evento.detalhes.acessibilidade}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Restrições:
                    </span>
                    <p className="text-gray-600">
                      {evento.detalhes.restricoes}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Clima:</span>
                    <p className="text-gray-600">{evento.detalhes.clima}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventoDetalhes;
