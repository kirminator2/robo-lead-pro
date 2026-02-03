import { motion } from "framer-motion";
import { 
  Search, 
  Settings, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight,
  Workflow
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Анализ проекта",
    description: "Изучаем вашу целевую аудиторию, сегмент и конкурентов. Готовим стратегию и гипотезы для запуска.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Настройка системы",
    description: "Настраиваем ИИ-роботов или подключаем операторов колл-центра. Интегрируем с вашей CRM.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Обработка контактов",
    description: "Идентифицируем скрытых пользователей, квалифицируем каждый контакт и фильтруем нецелевые.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Передача горячих лидов",
    description: "Передаём вам только квалифицированные лиды с подтверждённым интересом. Бесшовно в CRM.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Workflow className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Простой процесс
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Как мы{" "}
            <span className="gradient-text">работаем</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            От заявки до первых клиентов — всего 4 простых шага
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}

                <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 relative z-10">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary/30">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <ArrowRight className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">
              Первые лиды уже на следующий день после запуска
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
