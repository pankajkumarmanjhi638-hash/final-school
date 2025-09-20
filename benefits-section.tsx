import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, GraduationCap, BookOpen, Heart, ArrowRight } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      role: "Principals",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      benefit: "Full control & modern dashboard",
      description:
        "Comprehensive oversight with real-time analytics, financial reports, and complete school management capabilities.",
    },
    {
      role: "Teachers",
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
      benefit: "Easy AI-powered teaching assistant",
      description:
        "Streamline lesson planning, grading, and student communication with intelligent AI tools designed for educators.",
    },
    {
      role: "Students",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      benefit: "Fun learning with AI Maths Master & Study Buddy",
      description:
        "Interactive learning experience with personalized AI tutoring, gamified quizzes, and step-by-step problem solving.",
    },
    {
      role: "Parents",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      benefit: "Clear communication, transparent fees, growth insights",
      description:
        "Stay connected with real-time updates, easy fee payments, and detailed progress reports on your child's development.",
    },
  ]

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Benefits for Every <span className="text-primary">Stakeholder</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Smart School SaaS is designed to deliver value to every member of your educational community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.role}</CardTitle>
                    <div className="flex items-center text-primary font-medium mt-1">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span className="text-sm">{item.benefit}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
