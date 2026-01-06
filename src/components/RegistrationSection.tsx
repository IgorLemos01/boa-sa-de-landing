import { motion } from "framer-motion";
import { Shield, Clock, Users } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const stats = [
  { icon: Users, value: "5.000+", label: "Membros ativos" },
  { icon: Shield, value: "100%", label: "Seguro e confiável" },
  { icon: Clock, value: "24h", label: "Atendimento" },
];

const RegistrationSection = () => {
  return (
    <section id="cadastro" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Junte-se ao <span className="text-primary">Boa Saúde+</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Faça parte do programa que cuida da sua saúde e do seu bolso. 
                Cadastre-se agora e comece a aproveitar todos os benefícios exclusivos.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="text-center p-4 bg-card rounded-2xl border border-border/50"
                >
                  <stat.icon className="w-6 h-6 text-navy mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/5 to-navy/5 rounded-2xl border border-primary/10">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary">✓ Sem taxas de adesão</span> — 
                O cadastro no Boa Saúde+ é totalmente gratuito. Você só ganha benefícios!
              </p>
            </div>
          </motion.div>

          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
