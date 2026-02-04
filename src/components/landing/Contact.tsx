import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Телефон", value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
  { icon: Mail, label: "Email", value: "info@medivey.ru", href: "mailto:info@medivey.ru" },
  { icon: MapPin, label: "Адрес", value: "Москва, Россия", href: null },
];

const benefits = [
  "Бесплатная консультация",
  "Расчёт стоимости за 24 часа",
  "Пилотный запуск от 30 лидов",
  "Без обязательств и рисков",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

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
            Готовы{" "}
            <span className="gradient-text">начать?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Оставьте заявку и получите первых клиентов уже завтра
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                    className="bg-secondary/50 border-border focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="bg-secondary/50 border-border focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ivan@company.ru"
                    required
                    className="bg-secondary/50 border-border focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Расскажите о проекте
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Какой объём лидов вам нужен? В какой отрасли работаете?"
                    rows={4}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Benefits */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Почему стоит связаться с нами
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
