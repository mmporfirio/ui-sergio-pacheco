import { motion } from "framer-motion";
import { Leaf, Flower2, Sun, Droplet } from "lucide-react";

const Arvores = () => {
  return (
    <section className="pt-[6.5dvh] bg-gradient-to-b from-green-50 to-white">
      <div className="min-h-[93.5dvh] flex flex-col lg:flex-row w-full">
        <iframe
          width="100%"
          className="flex min-h-[50dvh] lg:w-1/2 shadow-md"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyC2-R5mh6rKpuT_NBxKGPKCcxDnf78j4ig&location=-18.9105043,-48.2767277&heading=210&pitch=10&fov=35"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col lg:w-1/2 p-8 md:p-12 text-gray-800"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-3 text-center">
            Ipê-roxo{" "}
            <span className="text-gray-600 text-xl block">
              Handroanthus impetiginosus
            </span>
          </h2>

          <p className="text-center text-gray-600 italic mb-6">
            Também conhecido como “ipê-roxo de bola”, é uma das árvores mais
            emblemáticas e belas do cerrado.
          </p>

          <div className="space-y-6 text-justify leading-relaxed">
            <section>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
                <Leaf className="w-5 h-5 text-green-600" /> Características
                Morfológicas
              </h3>
              <p>
                O ipê-roxo atinge entre <strong>8 e 12 metros</strong> em
                ambientes urbanos bem cuidados. Seu tronco é rugoso e
                acinzentado, e sua copa ampla oferece boa sombra. As folhas
                compostas se dispõem de forma espiralada e caem na estação seca,
                antecedendo a floração exuberante.
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
                <Flower2 className="w-5 h-5 text-green-600" /> Floração e Frutos
              </h3>
              <p>
                Produz <strong>flores roxo-vibrantes</strong> em
                inflorescências, destacando-se no fim da seca e início das
                chuvas. O fruto é uma cápsula lenhosa que libera sementes aladas
                levadas pelo vento, contribuindo para a regeneração natural.
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
                <Sun className="w-5 h-5 text-green-600" /> Ecologia e Adaptação
                Urbana
              </h3>
              <p>
                Adaptado ao <strong>clima do cerrado</strong>, o ipê-roxo tolera
                bem períodos secos e ensolarados. Prefere{" "}
                <strong>solos bem drenados</strong> e demonstra ótimo desempenho
                quando o solo é preparado e irrigado. Em praças, destaca-se pela
                sombra e beleza que oferece.
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
                <Droplet className="w-5 h-5 text-green-600" /> Função Estética e
                Ambiental
              </h3>
              <p>
                O ipê-roxo é símbolo de resistência e beleza natural. Oferece
                sombra densa, <strong>atrai abelhas e beija-flores</strong>{" "}
                durante a floração e encanta moradores e visitantes com seu
                espetáculo de cores nas praças de Uberlândia.
              </p>
            </section>
          </div>

          <footer className="mt-8 text-sm text-center text-gray-500">
            Fontes:{" "}
            <a
              href="https://www.uberlandia.mg.gov.br/"
              className="underline hover:text-green-700"
            >
              Prefeitura de Uberlândia
            </a>{" "}
            ·{" "}
            <a
              href="https://comunica.ufu.br"
              className="underline hover:text-green-700"
            >
              Comunica UFU
            </a>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Arvores;
