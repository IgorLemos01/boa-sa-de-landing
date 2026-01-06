import { Heart, Plus } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-navy text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center relative">
              <Heart className="w-5 h-5 text-primary-foreground" />
              <Plus className="w-3 h-3 text-primary-foreground absolute -top-0.5 -right-0.5 bg-white/20 rounded-full" />
            </div>
            <span className="text-xl font-bold">
              Boa Saúde<span className="text-primary">+</span>
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Boa Saúde+. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/50 mt-1">
              Programa de benefícios para sua saúde e bem-estar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
