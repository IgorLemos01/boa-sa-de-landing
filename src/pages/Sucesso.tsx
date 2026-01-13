import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sucesso = () => {
  const whatsappLink = "https://chat.whatsapp.com/EAUJN2QOgrsBI7AIkbtcWX";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 md:p-12 card-shadow border border-border/50 text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-success" />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 bg-health-red-light text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Cadastro confirmado
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Bem-vindo ao <span className="text-primary">Boa Saúde+</span>!
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Seu cadastro foi realizado com sucesso! Para concluir e fazer parte do programa de beneficios exclusivos entre na Comunidade no Zap:
              </p>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Comunidade WhatsApp</span>
                </div>
                <p className="text-sm text-green-700 mb-4">
                  Entre na nossa comunidade e confira ofertas excluivas, dicas de saúde e concorra a R$500,00 em compras na Boa saúde. 
                </p>
                
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar na Comunidade
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Heart className="w-3 h-3 text-primary" />
                Obrigado por fazer parte do Boa Saúde+
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sucesso;
