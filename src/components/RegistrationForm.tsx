import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MapPin, Calendar, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    dataNascimento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})/, "($1) ")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value.slice(0, 15);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, telefone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.telefone || !formData.endereco || !formData.dataNascimento) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // URL do Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvBz_tSCku56svv05KZSKShXZJB9_bjhrUZJHyTqKBwitVaBLfcD-aJGhZDxLBdI6TZw/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necessário para Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Com no-cors, não podemos ler a resposta, então assumimos sucesso
      toast({
        title: "Cadastro realizado com sucesso! 🎉",
        description: "Bem-vindo ao Boa Saúde+! Em breve você receberá mais informações.",
      });
      
      setFormData({ nome: "", telefone: "", endereco: "", dataNascimento: "" });
      
    } catch (error) {
      console.error('Erro ao enviar cadastro:', error);
      toast({
        title: "Erro ao realizar cadastro",
        description: "Por favor, tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="bg-card rounded-3xl p-8 md:p-10 card-shadow border border-border/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Faça seu cadastro</h2>
            <p className="text-muted-foreground text-sm">É rápido e gratuito!</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-foreground font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-navy" />
              Nome completo
            </Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone" className="text-foreground font-medium flex items-center gap-2">
              <Phone className="w-4 h-4 text-navy" />
              Telefone (WhatsApp)
            </Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handlePhoneChange}
              maxLength={15}
              className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endereco" className="text-foreground font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-navy" />
              Endereço
            </Label>
            <Input
              id="endereco"
              name="endereco"
              type="text"
              placeholder="Rua, número, bairro, cidade"
              value={formData.endereco}
              onChange={handleChange}
              className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dataNascimento" className="text-foreground font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4 text-navy" />
              Data de nascimento
            </Label>
            <Input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              value={formData.dataNascimento}
              onChange={handleChange}
              className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 mt-6 text-lg font-semibold rounded-xl bg-primary hover:bg-health-red-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
                Processando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Quero participar do Boa Saúde+
              </span>
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Ao se cadastrar, você concorda com nossos termos de uso e política de privacidade.
        </p>
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
