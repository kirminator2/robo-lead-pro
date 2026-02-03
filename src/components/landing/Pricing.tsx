import { motion } from "framer-motion";
import { Check, Bot, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "ИИ-обработка",
    icon: Bot,
    price: "от 12₽",
    unit: "за контакт",
    description: "Автоматическая обработка роботами с искусственным интеллектом",
    features: [
      "Автоматическая квалификация",
      "Работа 24/7 без выходных",
      "Мгновенная обработка",
      "Базовая фильтрация",
      "Интеграция с CRM",
      "Еженедельные отчёты",
    ],
    highlighted: false,
  },
  {
    name: "Живой колл-центр",
    icon: Users,
    price: "от 20₽",
    unit: "за контакт",
    description: "Профессиональные операторы для максимальной конверсии",
    features: [
      "Живое общение с клиентами",
      "Глубокая квалификация",
      "Персональный подход",
      "Расширенная фильтрация",
      "Горячая передача лидов",
      "Ежедневная аналитика",
      "Записи всех разговоров",
      "Выделенный менеджер",
    ],
    highlighted: true,
    badge: "Рекомендуем",
  },
  {
    name: "Комбо",
    icon: Sparkles,
    price: "Индивидуально",
    unit: "гибридный подход",
    description: "ИИ + живые операторы для максимального результата",
    features: [
      "ИИ для первичного отбора",
      "Операторы для горячих лидов",
      "Оптимальный cost-per-lead",
      "До 12 параметров фильтрации",
      "Приоритетная поддержка",
      "Кастомные интеграции",
      "Личный кабинет с аналитикой",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
            Прозрачные{" "}
            <span className="gradient-text">тарифы</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Начните с любого бюджета. Платите только за результат.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "glass-card border-2 border-accent/50 lg:scale-105 lg:-my-4"
                  : "glass-card hover:border-primary/50"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                plan.highlighted ? "bg-accent/20" : "bg-primary/20"
              }`}>
                <plan.icon className={`w-7 h-7 ${
                  plan.highlighted ? "text-accent" : "text-primary"
                }`} />
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl lg:text-5xl font-bold ${
                  plan.highlighted ? "text-accent" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">{plan.unit}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? "text-accent" : "text-primary"
                    }`} />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">Начать сейчас</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          * Точная стоимость зависит от объёма и специфики проекта. 
          Свяжитесь с нами для расчёта.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
