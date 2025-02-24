"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, Video, Users, Brain, Target, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const methodologies = [
  {
    icon: BookOpen,
    title: "Traditional Quranic Learning",
    description: "Incorporating time-tested methods of Quranic education passed down through generations.",
  },
  {
    icon: Video,
    title: "Modern Technology Integration",
    description: "Utilizing cutting-edge online platforms and multimedia resources for enhanced learning experiences.",
  },
  {
    icon: Users,
    title: "Personalized Instruction",
    description: "Tailoring our teaching approach to meet individual student needs and learning styles.",
  },
  {
    icon: Brain,
    title: "Cognitive Learning Techniques",
    description: "Applying research-based cognitive strategies to improve memorization and understanding.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Setting clear, achievable objectives for each student to ensure steady progress.",
  },
  {
    icon: Award,
    title: "Continuous Assessment",
    description: "Regular evaluation and feedback to track progress and adjust learning plans as needed.",
  },
]

export default function Methodology() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-center mb-6">Our Teaching Methodology</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
            Discover how we combine traditional wisdom with modern techniques to provide an effective Quranic education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methodologies.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <method.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{method.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Approach to Quranic Education</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                At Alif Laam Meem Academy, we believe in a holistic approach to Quranic education. Our methodology is
                designed to not only teach the proper recitation and memorization of the Quran but also to foster a deep
                understanding and connection with its teachings.
              </p>
              <p className="mb-4">
                We combine traditional Islamic teaching methods with modern educational techniques to create an engaging
                and effective learning experience. Our approach is tailored to each student's individual needs, ensuring
                that everyone can progress at their own pace while receiving the support they need.
              </p>
              <p>
                Through interactive online classes, one-on-one sessions, and group study circles, we create a dynamic
                learning environment that encourages questions, discussion, and reflection. Our goal is not just to
                teach the Quran, but to inspire a lifelong journey of learning and spiritual growth.
              </p>
            </div>
            <div className="relative h-[400px]">
              {/* <Image
                src="/images/quran-teaching-approach.jpg"
                alt="Our Quranic Teaching Approach"
                fill
                className="object-cover rounded-lg"
              /> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Key Features of Our Methodology</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <BookOpen className="mr-2 mt-1 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Comprehensive Curriculum</h3>
                <p>
                  Our curriculum covers Quranic recitation, memorization, tajweed, and tafsir, providing a well-rounded
                  Islamic education.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Video className="mr-2 mt-1 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Interactive Online Classes</h3>
                <p>
                  Engage in live, interactive sessions with experienced teachers using state-of-the-art online learning
                  platforms.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Users className="mr-2 mt-1 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Personalized Learning Plans</h3>
                <p>Tailored study plans that adapt to each student's learning style, pace, and goals.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Brain className="mr-2 mt-1 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Memorization Techniques</h3>
                <p>Teach effective memorization strategies that help students retain Quranic verses long-term.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Target className="mr-2 mt-1 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Progress Tracking</h3>
                <p>Regular assessments and progress reports to keep students motivated and on track.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Experience Our Unique Approach to Quranic Learning</h2>
          <p className="text-xl mb-8">
            Join us and discover the difference our methodology can make in your Quranic journey
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
              Start Your Learning Journey
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

