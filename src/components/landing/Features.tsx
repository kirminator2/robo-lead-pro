import { motion } from "framer-motion";
import { 
  Bot, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Link2,
  Clock,
  Target
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "ИИ-обработка от 12₽",
    description: "Роботы с искусственным интеллектом автоматически обрабатывают контакты, квалифицируют и передают горячие лиды.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Живой колл-центр от 20₽",
    description: "Профессиональные операторы работают с каждым контактом персонально для максимальной конверсии.",
    highlight: true,
  },
  {
    icon: Clock,
    title: "Первые клиенты за 1 день",
    description: "Быстрый старт без долгих настроек. Получайте квалифицированные лиды уже на следующий день.",
    highlight: false,
  },
  {
    icon: Target,
    title: "Минимальный % отказов",
    description: "Двойная валидация каждого контакта обеспечивает высокое качество и низкий процент отказов.",
    highlight: false,
  },
  {
    icon: Link2,
    title: "Интеграции с CRM",
    description: "Бесшовная передача лидов в AmoCRM, Bitrix24, Salesforce и другие популярные системы.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Без ограничений по бюджету",
    description: "Начните с любой суммы. Масштабируйте объёмы в любой момент без дополнительных условий.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Соответствие 152-ФЗ",
    description: "Полное соблюдение закона о персональных данных. Безопасность и конфиденциальность гарантированы.",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Прозрачная аналитика",
    description: "Детальные отчёты по каждому контакту. Полный контроль качества и эффективности кампаний.",
    highlight: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Почему выбирают{" "}
            <span className="gradient-text">нас</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Современные технологии лидогенерации с гарантией качества и прозрачными условиями
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                feature.highlight 
                  ? "lg:col-span-2" 
                  : ""
              }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
