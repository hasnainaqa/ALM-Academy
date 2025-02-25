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
import { BookOpen, Clock, BarChart, CheckCircle, Star, User, ArrowRight, Mic, Volume2, BookMarked } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courseDetails = {
  title: "Online Nazra Quran",
  description: "Master Quranic recitation with live feedback from expert teachers in interactive online sessions",
  duration: "Flexible",
  level: "All Levels",
  lessons: "Customized",
  students: 3456,
  rating: 4.7,
}

const syllabus = [
  {
    level: "Beginner Level",
    title: "Foundational Recitation",
    content: "Learn proper pronunciation of Arabic letters, basic Tajweed rules, and start with short surahs.",
  },
  {
    level: "Intermediate Level",
    title: "Fluency and Rhythm",
    content:
      "Improve recitation speed, develop melodious rhythm, and focus on longer surahs with complex Tajweed rules.",
  },
  {
    level: "Advanced Level",
    title: "Perfecting Tajweed",
    content: "Master advanced Tajweed rules, work on voice modulation, and practice recitation of entire Juz.",
  },
  {
    level: "Expert Level",
    title: "Qira'at Variations",
    content: "Study different styles of Quranic recitation, including the ten authentic Qira'at.",
  },
]

const learningOutcomes = [
  "Develop proper Quranic recitation techniques",
  "Master Tajweed rules and their application",
  "Improve fluency and confidence in recitation",
  "Receive personalized feedback from expert teachers",
  "Understand the meaning of recited verses",
  "Cultivate a deeper connection with the Quran",
]

const instructors = [
  {
    name: "Qari Abdullah Al-Makki",
    role: "Senior Nazra Instructor",
    bio: "Qari Abdullah has over 30 years of experience in teaching Quranic recitation. He holds Ijazah in Hafs and Shu'bah recitations and has trained numerous Qaris worldwide.",

  },
  {
    name: "Ustadha Maryam Al-Qaria",
    role: "Nazra and Tajweed Specialist",
    bio: "Ustadha Maryam is known for her melodious recitation and expertise in Tajweed. She has been teaching online for 15 years and specializes in helping students improve their recitation style.",

  },
]

const testimonials = [
  {
    name: "Zaynab K.",
    content:
      "The personalized attention in this course has dramatically improved my recitation. The teachers are patient and provide detailed feedback.",
    rating: 5,
  },
  {
    name: "Omar L.",
    content:
      "I never thought I could learn proper Quranic recitation online, but this course proved me wrong. The interactive sessions are engaging and effective.",
    rating: 5,
  },
  {
    name: "Aisha M.",
    content:
      "As a busy professional, the flexibility of this course is perfect for me. I've made significant progress in my recitation skills, thanks to the expert guidance.",
    rating: 4,
  },
]

export default function OnlineNazraQuran() {
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
              <p className="text-gray-600 dark:text-gray-300">{courseDetails.lessons}</p>
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
              <p className="text-gray-600 dark:text-gray-300">Tailored to your needs</p>
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
                  <CardTitle>Course Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {syllabus.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <Badge variant="outline" className="mr-2">
                              {item.level}
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
                      <Mic className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Interactive Live Sessions</h3>
                        <p>Engage in real-time with instructors for immediate feedback and corrections.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Volume2 className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Audio-Visual Learning</h3>
                        <p>
                          Utilize advanced audio technology for clear pronunciation guidance and visual aids for Tajweed
                          rules.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookMarked className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Personalized Learning Plans</h3>
                        <p>Receive customized lesson plans based on your current level and learning goals.</p>
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
          <h2 className="text-3xl font-bold mb-6">Recitation Progress Tracker</h2>
          <Card>
            <CardHeader>
              <CardTitle>Your Nazra Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Pronunciation Accuracy</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Tajweed Application</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <Progress value={70} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Recitation Fluency</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Track your progress in key areas of Quranic recitation. Your instructor will update these metrics
                regularly.
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
                question: "How do online Nazra classes work?",
                answer:
                  "Our online Nazra classes are conducted via video conferencing platforms. You'll have live, interactive sessions with your instructor, who will listen to your recitation, provide immediate feedback, and guide you in improving your Tajweed and pronunciation.",
              },
              {
                question: "What equipment do I need for the online classes?",
                answer:
                  "You'll need a device (computer, tablet, or smartphone) with a stable internet connection, a microphone, and preferably a webcam. We recommend using headphones for better audio quality during the sessions.",
              },
              {
                question: "How often are the classes scheduled?",
                answer:
                  "Class frequency is flexible and can be tailored to your needs. Most students attend 2-3 sessions per week, but we can accommodate daily classes or less frequent sessions based on your availability and learning goals.",
              },
              {
                question: "Can I record the classes for later review?",
                answer:
                  "Yes, with the instructor's permission, you can record the sessions for personal review. However, sharing or distributing these recordings is not allowed to protect the privacy of all participants.",
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
          <h2 className="text-3xl font-bold mb-6">Improve Your Quranic Recitation Today</h2>
          <p className="text-xl mb-8">Join our Online Nazra Quran program and enhance your connection with the Quran</p>
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

