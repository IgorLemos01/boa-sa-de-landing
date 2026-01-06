import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard = ({ icon: Icon, title, description, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 p-6 bg-card rounded-2xl card-shadow border border-border/50 hover:border-primary/20 transition-colors"
    >
      <div className="flex-shrink-0 w-14 h-14 benefit-icon-bg rounded-xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
