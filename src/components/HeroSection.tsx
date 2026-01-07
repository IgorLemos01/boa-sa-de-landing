import { motion } from "framer-motion";
import { Truck, Tag, Gift, Sparkles } from "lucide-react";
import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: Truck,
    title: "Entrega GRÁTIS o ano todo",
    description: "Receba seus medicamentos e produtos de saúde no conforto da sua casa, sem pagar nada pela entrega. Exclusivo para Barra dos Coqueiros e Aracaju.",
  },
  {
    icon: Tag,
    title: "Descontos e promoções exclusivas",
    description: "Acesse ofertas especiais disponíveis apenas para membros do programa Boa Saúde+.",
  },
  {
    icon: Gift,
    title: "Sorteio TODO MÊS de R$ 500,00",
    description: "Participe dos sorteios mensais de R$ 500,00 em compras na farmácia. *Para participar do sorteio o cliente precisa comprar no mês um valor mínimo de R$20,00 em produtos na farmácia.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-health-red-light rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-muted rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-health-red-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Programa de Benefícios
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Boa Saúde<span className="text-primary">+</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy font-medium max-w-2xl mx-auto">
            Ao participar, você garante:
          </p>
        </motion.div>

        <div id="beneficios" className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
