"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { BookOpen, Clock, BarChart, CheckCircle, Star, User, ArrowRight, Heart, Brain, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courseDetails = {
  title: "Kalimahs",
  description: "Master the six fundamental Islamic declarations and their profound meanings",
  duration: "4 weeks",
  level: "Beginner",
  lessons: 12,
  students: 2345,
  rating: 4.6,
}

const syllabus = [
  {
    week: "Week 1",
    title: "Introduction to Kalimahs",
    content: "Overview of the six Kalimahs, their significance in Islam, and the concept of declaration of faith.",
  },
  {
    week: "Week 2",
    title: "Kalimah Tayyibah and Shahada",
    content: "Deep dive into the first two Kalimahs: their meaning, importance, and application in daily life.",
  },
  {
    week: "Week 3",
    title: "Tamjeed, Tawheed, and Radde Kufr",
    content:
      "Exploring the third, fourth, and fifth Kalimahs, focusing on glorification of Allah and rejection of false worship.",
  },
  {
    week: "Week 4",
    title: "Kalimah Istighfar and Review",
    content:
      "Learning the sixth Kalimah of seeking forgiveness, reviewing all Kalimahs, and understanding their collective importance.",
  },
]

const learningOutcomes = [
  "Memorize and understand the six Kalimahs",
  "Learn the proper pronunciation of each Kalimah",
  "Understand the significance of Kalimahs in daily life",
  "Explore the deeper meanings behind each declaration",
  "Apply the teachings of Kalimahs in your spiritual journey",
  "Strengthen your faith through comprehension of these fundamental beliefs",
]

const instructors = [
  {
    name: "Sheikh Yusuf Al-Qaradawi",
    role: "Senior Islamic Studies Instructor",
    bio: "Sheikh Yusuf has over 25 years of experience teaching Islamic studies. He specializes in explaining complex Islamic concepts in simple terms for beginners.",

  },
  {
    name: "Ustadha Aminah Hassan",
    role: "Kalimahs and Aqeedah Specialist",
    bio: "Ustadha Aminah is known for her engaging teaching style and deep knowledge of Islamic creed. She has been instrumental in developing our Kalimahs curriculum.",

  },
]

const testimonials = [
  {
    name: "Ahmed S.",
    content:
      "This course provided me with a solid foundation in understanding the core declarations of Islam. The instructors explained everything clearly and patiently.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    content:
      "I never realized how profound the Kalimahs were until I took this course. It has truly deepened my faith and understanding of Islam.",
    rating: 5,
  },
  {
    name: "Muhammad K.",
    content:
      "As a new Muslim, this course was invaluable. It helped me grasp the fundamental beliefs of Islam in a structured and meaningful way.",
    rating: 4,
  },
]

export default function Kalimahs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-center mb-6">{courseDetails.title}</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">{courseDetails.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2" /> Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{courseDetails.duration}</p>
              <p className="text-gray-600 dark:text-gray-300">{courseDetails.lessons} lessons</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2" /> Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{courseDetails.level}</p>
              <p className="text-gray-600 dark:text-gray-300">Perfect for new learners</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" /> Enrollment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{courseDetails.students.toLocaleString()}+ students</p>
              <p className="text-gray-600 dark:text-gray-300">{courseDetails.rating} out of 5 stars</p>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
          <Tabs defaultValue="syllabus" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
            </TabsList>
            <TabsContent value="syllabus">
              <Card>
                <CardHeader>
                  <CardTitle>Course Syllabus</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {syllabus.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <Badge variant="outline" className="mr-2">
                              {item.week}
                            </Badge>
                            {item.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="outcomes">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="methodology">
              <Card>
                <CardHeader>
                  <CardTitle>Our Teaching Methodology</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Heart className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Faith-Centered Approach</h3>
                        <p>
                          We focus on nurturing your faith while teaching the Kalimahs, helping you connect deeply with
                          their meanings.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Brain className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Comprehensive Understanding</h3>
                        <p>
                          Our method ensures you not only memorize the Kalimahs but also grasp their profound
                          implications in Islamic theology.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Practical Application</h3>
                        <p>
                          Learn how to apply the principles of the Kalimahs in your daily life, strengthening your
                          Islamic practice.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Meet Your Instructors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index}>
                <CardContent className="flex items-start space-x-4 pt-6">
                  
                  <div>
                    <h3 className="text-xl font-semibold">{instructor.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{instructor.role}</p>
                    <p className="mt-2">{instructor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Student Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <User className="w-10 h-10 text-gray-400 mr-4" />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Your Kalimahs Learning Journey</h2>
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Kalimah Memorization</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <Progress value={100} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Understanding of Meanings</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <Progress value={80} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Practical Application</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Track your progress in key areas of Kalimahs learning. Your instructor will update these metrics as you
                advance through the course.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What are the Six Kalimahs?",
                answer:
                  "The Six Kalimahs are fundamental declarations in Islam that express core beliefs. They include the declaration of faith (Shahada), glorification of Allah, affirmation of His unity, rejection of false worship, seeking forgiveness, and declaring belief in Allah and His Messenger.",
              },
              {
                question: "Do I need to know Arabic to take this course?",
                answer:
                  "While knowing Arabic can be helpful, it's not a requirement. We teach the correct pronunciation of the Kalimahs and provide translations and explanations in English. The course is designed to be accessible to non-Arabic speakers.",
              },
              {
                question: "How long does it take to memorize all Six Kalimahs?",
                answer:
                  "The time it takes to memorize the Kalimahs can vary from person to person. However, with consistent practice, most students can memorize all Six Kalimahs within the 4-week duration of the course. We provide techniques to aid memorization and understanding.",
              },
              {
                question: "Is this course suitable for children?",
                answer:
                  "Yes, this course is suitable for learners of all ages, including children. We recommend parental guidance for younger children to help them grasp the concepts. The course material is presented in an easy-to-understand manner suitable for various age groups.",
              },
            ].map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Strengthen Your Faith with the Kalimahs</h2>
          <p className="text-xl mb-8">
            Enroll in our Kalimahs course and deepen your understanding of Islamic declarations
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
              Enroll Now
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

