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
  title: "Islamic Teaching",
  description: "Comprehensive lessons on Islamic principles and practices for a deeper understanding of the faith",
  duration: "6 months",
  level: "All Levels",
  lessons: 72,
  students: 1678,
  rating: 4.9,
}

const syllabus = [
  {
    month: "Month 1-2",
    title: "Foundations of Islamic Faith",
    content:
      "Introduction to Tawheed, Prophethood, and the pillars of Islam. Overview of the Quran and its significance.",
  },
  {
    month: "Month 3-4",
    title: "Islamic Jurisprudence and Ethics",
    content: "Study of Fiqh, focusing on acts of worship. Exploration of Islamic ethics and character development.",
  },
  {
    month: "Month 5",
    title: "Islamic History and Civilization",
    content: "Overview of key events in Islamic history, contributions of Islamic civilization to the world.",
  },
  {
    month: "Month 6",
    title: "Contemporary Islamic Issues",
    content:
      "Addressing modern challenges from an Islamic perspective. Discussion on Islam's role in the contemporary world.",
  },
]

const learningOutcomes = [
  "Develop a strong foundation in Islamic beliefs and practices",
  "Understand the principles of Islamic jurisprudence",
  "Gain knowledge about Islamic history and its impact on world civilization",
  "Learn how to apply Islamic teachings in contemporary contexts",
  "Enhance your ability to engage in informed discussions about Islam",
  "Develop critical thinking skills in analyzing Islamic texts and traditions",
  "Improve your understanding of Islamic ethics and character development",
  "Gain insights into the diversity of Islamic thought and practice",
]

const instructors = [
  {
    name: "Dr. Amina Al-Farooqi",
    role: "Senior Islamic Studies Professor",
    bio: "Dr. Amina holds a PhD in Islamic Studies from Al-Azhar University and has been teaching for over 20 years. She specializes in contemporary Islamic thought and women's issues in Islam.",
  },
  {
    name: "Sheikh Hassan Al-Maliki",
    role: "Expert in Islamic Jurisprudence",
    bio: "Sheikh Hassan is a graduate of the Islamic University of Madinah and has extensive experience in teaching Fiqh and Usul al-Fiqh. He is known for his ability to explain complex concepts in simple terms.",
  },
]

const testimonials = [
  {
    name: "Layla M.",
    content:
      "This course provided me with a comprehensive understanding of Islam that I never had before. The instructors are knowledgeable and approachable.",
    rating: 5,
  },
  {
    name: "Ahmed S.",
    content:
      "I appreciated the balanced approach to teaching Islamic principles and how they apply to modern life. It's been truly enlightening.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    content:
      "As a revert to Islam, this course gave me the structured learning I needed. It's well-organized and covers all the essential aspects of the faith.",
    rating: 5,
  },
]

export default function IslamicTeaching() {
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
              <p className="text-gray-600 dark:text-gray-300">Suitable for beginners and advanced learners</p>
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
                              {item.month}
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
                        <h3 className="font-semibold">Holistic Approach</h3>
                        <p>
                          We integrate knowledge, practice, and spirituality to provide a comprehensive understanding of
                          Islam.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Brain className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Critical Thinking</h3>
                        <p>
                          Students are encouraged to engage critically with Islamic texts and traditions, fostering a
                          deeper understanding.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Contemporary Application</h3>
                        <p>
                          We focus on relating Islamic teachings to contemporary issues, making the learning relevant
                          and practical.
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
          <h2 className="text-3xl font-bold mb-6">Your Islamic Learning Journey</h2>
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Islamic Beliefs</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Islamic Practices</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <Progress value={70} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Islamic History</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Track your progress in key areas of Islamic studies. Your instructor will update these metrics as you
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
                question: "Is this course suitable for non-Muslims?",
                answer:
                  "This course is designed to be informative and accessible for anyone interested in learning about Islam, regardless of their religious background.",
              },
              {
                question: "How much time should I dedicate to this course each week?",
                answer:
                  "We recommend dedicating about 6-8 hours per week to get the most out of this course. This includes attending online lectures, completing assignments, and personal study time.",
              },
              {
                question: "Will this course cover different schools of thought in Islam?",
                answer:
                  "Yes, the course provides an overview of major schools of thought in Islamic jurisprudence and theology, promoting understanding of the diversity within Islamic tradition.",
              },
              {
                question: "Is there any practical component to this course?",
                answer:
                  "Yes, the course includes practical components such as guided reflections, case studies, and opportunities to apply Islamic principles to real-life situations.",
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
          <h2 className="text-3xl font-bold mb-6">Embark on Your Journey of Islamic Knowledge</h2>
          <p className="text-xl mb-8">
            Enroll in our comprehensive Islamic Teaching course and deepen your understanding of the faith
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

