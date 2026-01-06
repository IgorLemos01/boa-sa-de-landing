import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-4 md:px-8 bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center relative">
            <Heart className="w-5 h-5 text-primary-foreground" />
            <Plus className="w-3 h-3 text-primary-foreground absolute -top-0.5 -right-0.5 bg-navy rounded-full" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Boa Saúde<span className="text-primary">+</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#cadastro" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Cadastro
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
