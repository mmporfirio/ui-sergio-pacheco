import { TreePine, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-emerald-800 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-xl">
                <TreePine className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Praça Sérgio Pacheco</span>
            </div>
            <p className="text-green-100 leading-relaxed">
              Um espaço público dedicado ao lazer, cultura e convivência da
              comunidade. Conheça nossa história e participe dos eventos que
              transformam nossa praça.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Informações</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-300" />
                <span className="text-green-100">
                  Centro, Uberlândia - State of Minas Gerais, 38400-184
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-300" />
                <span className="text-green-100">(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-300" />
                <span className="text-green-100">
                  contato@pracasergiopacheco.com
                </span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <div className="space-y-2">
              <a
                href="/historia"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                História da Praça
              </a>
              <a
                href="/atualizacoes"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Últimas Atualizações
              </a>
              <a
                href="/eventos"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Próximos Eventos
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2025 Praça Sérgio Pacheco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
