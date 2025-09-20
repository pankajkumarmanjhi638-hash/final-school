import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  QrCode,
  CreditCard,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Calculator,
  Brain,
  Users,
  Trophy,
  Smartphone,
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: QrCode,
      title: "Smart Attendance",
      description: "QR-based attendance system for quick and accurate tracking",
    },
    {
      icon: CreditCard,
      title: "Fee Management + Online Payments",
      description: "Streamlined fee collection with integrated payment gateway",
    },
    {
      icon: BookOpen,
      title: "Homework & Assignment Manager",
      description: "Digital homework distribution and submission system",
    },
    {
      icon: TrendingUp,
      title: "Student Progress Tracker",
      description: "Real-time monitoring of student academic performance",
    },
    {
      icon: MessageSquare,
      title: "Parent Communication App",
      description: "Direct messaging between teachers and parents",
    },
    {
      icon: Calculator,
      title: "AI Maths Master",
      description: "Solves any math problem with step-by-step explanations for deeper understanding",
    },
    {
      icon: Brain,
      title: "AI Study Buddy",
      description: "Advanced Q&A, examples, quizzes, and deep learning support",
    },
    {
      icon: Users,
      title: "AI Teacher Guide",
      description: "Generates full human-like teaching plans with strategies and methods",
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Interactive quizzes and achievement badges to motivate students",
    },
    {
      icon: Smartphone,
      title: "White-Label School App",
      description: "Custom branded mobile app for your school (Premium only)",
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Everything your school needs in <span className="text-primary">one platform</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From attendance tracking to AI-powered learning tools, Smart School provides comprehensive solutions for
            modern education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
