import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Crown,
  GraduationCap,
  BookOpen,
  Heart,
  BarChart3,
  Users,
  MessageCircle,
  Calculator,
  Trophy,
  CreditCard,
} from "lucide-react"

export function DashboardsSection() {
  const dashboards = [
    {
      role: "Principal",
      icon: Crown,
      color: "bg-purple-500",
      features: [
        { icon: BarChart3, text: "Finance reports" },
        { icon: Users, text: "Attendance analytics" },
        { icon: GraduationCap, text: "Teacher monitoring" },
        { icon: Trophy, text: "Student results" },
        { icon: BarChart3, text: "Comprehensive reports" },
        { icon: Crown, text: "Branding customization" },
      ],
    },
    {
      role: "Teacher",
      icon: GraduationCap,
      color: "bg-green-500",
      features: [
        { icon: Users, text: "QR Attendance" },
        { icon: Trophy, text: "Grading system" },
        { icon: BookOpen, text: "AI Teacher Guide" },
        { icon: MessageCircle, text: "Parent chat" },
        { icon: BarChart3, text: "Student reports" },
      ],
    },
    {
      role: "Student",
      icon: BookOpen,
      color: "bg-blue-500",
      features: [
        { icon: BookOpen, text: "Homework tracker" },
        { icon: BookOpen, text: "Digital notes" },
        { icon: Calculator, text: "AI Maths Master" },
        { icon: BookOpen, text: "AI Study Buddy" },
        { icon: BarChart3, text: "Progress tracking" },
        { icon: Trophy, text: "Interactive quizzes" },
      ],
    },
    {
      role: "Parent",
      icon: Heart,
      color: "bg-pink-500",
      features: [
        { icon: Users, text: "Attendance alerts" },
        { icon: CreditCard, text: "Fee payments" },
        { icon: BarChart3, text: "Growth reports" },
        { icon: MessageCircle, text: "Teacher chat" },
      ],
    },
  ]

  return (
    <section id="dashboards" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Role-Based <span className="text-primary">Dashboards</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Tailored experiences for every user type with relevant tools and information at their fingertips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboards.map((dashboard, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${dashboard.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <dashboard.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{dashboard.role}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  Dashboard
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dashboard.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
