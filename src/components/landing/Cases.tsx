import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const cases = [
  {
    title: "Сеть автодилеров",
    location: "Москва",
    period: "май 2024",
    stats: [
      { label: "Идентифицировано", value: "15 200", subtext: "look-alike аудитория" },
      { label: "Обработано", value: "13 907", subtext: "контактов" },
      { label: "Передано", value: "177", subtext: "квалифицированных лидов" },
      { label: "Конверсия", value: "10%", subtext: "в сделку" },
    ],
    color: "primary",
  },
  {
    title: "Группа компаний «А101»",
    location: "Крупнейший девелопер Москвы",
    period: "июль – сентябрь 2024",
    stats: [
      { label: "Идентифицировано", value: "62 103", subtext: "по коду" },
      { label: "Обработано", value: "65 480", subtext: "контактов" },
      { label: "Look-a-like", value: "65 480", subtext: "идентифицировано" },
      { label: "MQL", value: "170", subtext: "передано" },
    ],
    color: "accent",
  },
  {
    title: "Сеть клиник",
    location: "Лазерная хирургия",
    period: "август – сентябрь 2024",
    stats: [
      { label: "Идентифицировано", value: "9 000", subtext: "по коду" },
      { label: "Обработано", value: "10 000", subtext: "контактов" },
      { label: "Look-a-like", value: "11 000", subtext: "идентифицировано" },
      { label: "Конверсия", value: "4%", subtext: "в продажу" },
    ],
    color: "primary",
  },
  {
    title: "Производитель кухонь",
    location: "«Аврора Кухни»",
    period: "август – сентябрь 2024",
    stats: [
      { label: "Обработано", value: "1 276", subtext: "контактов" },
      { label: "MQL", value: "26", subtext: "передано" },
      { label: "Конверсия", value: "34,5%", subtext: "в продажу" },
      { label: "ДРР", value: "3%", subtext: "доля рекламных расходов" },
    ],
    color: "accent",
  },
];

const highlights = [
  { icon: Target, value: "50 000+", label: "лидов в месяц" },
  { icon: TrendingUp, value: "до 35%", label: "конверсия в продажу" },
  { icon: Users, value: "100+", label: "довольных клиентов" },
  { icon: Award, value: ">5 лет", label: "на рынке" },
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
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
            Наши{" "}
            <span className="gradient-text">кейсы</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Реальные результаты для компаний из разных отраслей
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card rounded-2xl p-6 lg:p-8 hover:border-${caseItem.color}/50 transition-colors duration-300`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {caseItem.location}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                  {caseItem.period}
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {caseItem.stats.map((stat) => (
                  <div key={stat.label} className="bg-secondary/50 rounded-xl p-4">
                    <div className="text-xs text-muted-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
