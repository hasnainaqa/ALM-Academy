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
import {
  BookOpen,
  Clock,
  BarChart,
  CheckCircle,
  Star,
  User,
  ArrowRight,
  FileText,
  Search,
  BookMarked,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courseDetails = {
  title: "Ahadeeth Studies",
  description: "In-depth exploration of the sayings and actions of Prophet Muhammad (PBUH)",
  duration: "12 weeks",
  level: "Intermediate",
  lessons: 36,
  students: 890,
  rating: 4.8,
}

const syllabus = [
  {
    week: "Week 1-3",
    title: "Introduction to Hadith Sciences",
    content:
      "Understanding the importance of Hadith, its compilation, and authentication methods. Overview of major Hadith collections.",
  },
  {
    week: "Week 4-6",
    title: "Study of Sahih Al-Bukhari",
    content:
      "Exploring selected Hadiths from the most authentic collection. Focus on Hadiths related to faith, worship, and character.",
  },
  {
    week: "Week 7-9",
    title: "Study of Sahih Muslim",
    content:
      "Analyzing Hadiths from the second most authentic collection. Emphasis on Hadiths about social interactions and ethics.",
  },
  {
    week: "Week 10-12",
    title: "Practical Application of Hadiths",
    content:
      "Learning how to apply Hadith teachings in daily life and contemporary issues. Discussion on resolving apparent contradictions in Hadiths.",
  },
]

const learningOutcomes = [
  "Understand the science of Hadith authentication",
  "Study key Hadiths from authentic collections",
  "Learn to interpret Hadiths in their proper context",
  "Apply Hadith teachings to contemporary issues",
  "Develop a deeper connection with the Prophet's teachings",
  "Enhance your understanding of Islamic principles",
  "Gain skills in basic Hadith research and analysis",
  "Appreciate the role of Hadith in shaping Islamic law and ethics",
]

const instructors = [
  {
    name: "Dr. Abdullah Al-Muhaddith",
    role: "Senior Hadith Scholar",
    bio: "Dr. Abdullah has over 30 years of experience in Hadith studies. He holds a PhD in Hadith Sciences from Al-Azhar University and has authored several books on the subject.",
    image: "/placeholder.svg",
  },
  {
    name: "Ustadha Aisha Siddiqua",
    role: "Hadith Interpretation Specialist",
    bio: "Ustadha Aisha specializes in contextual interpretation of Hadiths. She has been teaching Hadith studies for 15 years and is known for her insightful analysis of Prophetic traditions.",
    image: "/placeholder.svg",
  },
]

const testimonials = [
  {
    name: "Omar F.",
    content:
      "This course opened my eyes to the depth and beauty of Hadith literature. The instructors' knowledge and teaching methods are exceptional.",
    rating: 5,
  },
  {
    name: "Maryam H.",
    content:
      "I've gained a new appreciation for the science of Hadith. The course has greatly enhanced my understanding of Islamic teachings.",
    rating: 5,
  },
  {
    name: "Yusuf R.",
    content:
      "The practical application section was particularly beneficial. It helped me see how Hadiths are relevant to our modern lives.",
    rating: 4,
  },
]

export default function AhadeethStudies() {
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
              <p className="text-gray-600 dark:text-gray-300">For those with basic Islamic knowledge</p>
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
                      <FileText className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Textual Analysis</h3>
                        <p>
                          We delve deep into the text of Hadiths, examining their linguistic nuances and historical
                          context.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Search className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Critical Thinking</h3>
                        <p>
                          Students are encouraged to analyze Hadiths critically, understanding their authenticity and
                          applicability.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookMarked className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Practical Application</h3>
                        <p>We focus on how Hadiths can guide our daily lives and help address contemporary issues.</p>
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
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
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
          <h2 className="text-3xl font-bold mb-6">Your Hadith Studies Progress</h2>
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Hadith Terminology</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <Progress value={90} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Hadith Analysis</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
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
                Track your progress in key areas of Hadith studies. Your instructor will update these metrics as you
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
                question: "Do I need to know Arabic to take this course?",
                answer:
                  "While knowing Arabic can be beneficial, it's not a requirement for this course. We provide translations and explanations of Hadiths in English. However, we do cover some basic Arabic terminology related to Hadith sciences.",
              },
              {
                question: "How is this course different from a general Islamic studies course?",
                answer:
                  "This course specifically focuses on Hadith studies, providing an in-depth look at the sayings and actions of Prophet Muhammad (PBUH). We cover Hadith authentication, interpretation, and application, which are typically not covered in as much detail in general Islamic studies courses.",
              },
              {
                question: "Will we be memorizing Hadiths in this course?",
                answer:
                  "While memorization is not the primary focus, you will be encouraged to memorize key Hadiths. The main emphasis is on understanding, analyzing, and applying the teachings of the Hadiths in your daily life.",
              },
              {
                question: "How much time should I dedicate to this course each week?",
                answer:
                  "We recommend dedicating about 5-7 hours per week to get the most out of this course. This includes attending online lectures, completing assignments, and personal study time.",
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
          <h2 className="text-3xl font-bold mb-6">Deepen Your Understanding of Prophetic Traditions</h2>
          <p className="text-xl mb-8">
            Enroll in our Ahadeeth Studies course and connect with the wisdom of Prophet Muhammad (PBUH)
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

