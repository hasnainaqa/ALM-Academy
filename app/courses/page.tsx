"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BookOpen, Video, Users, Calendar, Headphones, BadgeCheck, Globe, ChevronRight } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

const courses = [
  {
    icon: BookOpen,
    title: "Qaida With Tajweed",
    description: "Master the foundational rules of Quranic recitation with proper pronunciation",
    duration: "8 weeks",
    level: "Beginner",
    href: "/courses/qaida-with-tajweed",
  },
  {
    icon: Video,
    title: "Quran Memorization",
    description: "Comprehensive program for memorizing the entire Quran",
    duration: "2 years",
    level: "Intermediate to Advanced",
    href: "/courses/quran-memorization",
  },
  {
    icon: Users,
    title: "Online Nazra Quran",
    description: "Practice Quran recitation with live feedback from expert teachers",
    duration: "Flexible",
    level: "All Levels",
    href: "/courses/online-nazra-quran",
  },
  {
    icon: Calendar,
    title: "Kalimahs",
    description: "Learn and understand the fundamental Islamic declarations",
    duration: "4 weeks",
    level: "Beginner",
    href: "/courses/kalimahs",
  },
  {
    icon: Headphones,
    title: "Ahadeeth Studies",
    description: "In-depth exploration of the sayings and actions of Prophet Muhammad (PBUH)",
    duration: "12 weeks",
    level: "Intermediate",
    href: "/courses/ahadeeth-studies",
  },
  {
    icon: BadgeCheck,
    title: "Islamic Teaching",
    description: "Comprehensive lessons on Islamic principles and practices",
    duration: "6 months",
    level: "All Levels",
    href: "/courses/islamic-teaching",
  },
  {
    icon: Globe,
    title: "Quran Recitation With Tajweed",
    description: "Perfect your Quranic recitation with advanced Tajweed rules",
    duration: "16 weeks",
    level: "Advanced",
    href: "/courses/quran-recitation-with-tajweed",
  },
]

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950">
      <Header />

      <main>
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
                Our <span className="text-emerald-600 dark:text-emerald-400">Quranic</span> Courses
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Embark on your journey of Quranic learning with our comprehensive course offerings
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                        <course.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                          <p className="font-semibold">{course.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Level</p>
                          <p className="font-semibold">{course.level}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Badge variant="secondary">{course.level}</Badge>
                      <Link href={course.href}>
                        <Button
                          variant="outline"
                          className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                        >
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-emerald-600 dark:bg-emerald-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Quranic Journey?
            </motion.h2>
            <motion.p
              className="text-xl text-emerald-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of students learning Quran online with our expert teachers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Start Your 3 Days Free Trial Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

