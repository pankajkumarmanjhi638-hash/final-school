import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, TrendingUp, MessageCircle, CreditCard } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                One Platform for <span className="text-primary">Principals</span>,{" "}
                <span className="text-primary">Teachers</span>, <span className="text-primary">Students</span> &{" "}
                <span className="text-primary">Parents</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Smart School SaaS – Manage Attendance, Fees, Homework, AI Tools, and Communication in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Book a Free Demo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Start Free Trial
                <span className="ml-2 text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  2 Months Free
                </span>
              </Button>
            </div>

            {/* Why Choose Us */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <Clock className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">Save Time</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <TrendingUp className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">Boost Learning</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <MessageCircle className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">Transparent Communication</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <CreditCard className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">Timely Fee Collection</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <img
                  src="/futuristic-smart-school-classroom-with-students-us.jpg"
                  alt="Smart School Platform Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>

            {/* Demo Video Placeholder */}
            <div className="mt-6 text-center">
              <Button variant="outline" size="lg" className="group bg-transparent">
                <div className="w-4 h-4 bg-primary rounded-full mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
