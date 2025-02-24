"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { BookOpen, Clock, BarChart, CheckCircle, Star, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courseDetails = {
  title: "Qaida With Tajweed",
  description: "Master the foundational rules of Quranic recitation with proper pronunciation",
  duration: "8 weeks",
  level: "Beginner",
  lessons: 24,
  students: 1500,
  rating: 4.8,
}

const syllabus = [
  {
    week: "Week 1-2",
    title: "Introduction to Arabic Alphabet",
    content: "Learn the Arabic alphabet, their shapes, and basic pronunciations.",
  },
  {
    week: "Week 3-4",
    title: "Vowel Marks and Sukoon",
    content: "Understand the usage of Fatha, Kasra, Damma, and Sukoon in Quranic text.",
  },
  {
    week: "Week 5-6",
    title: "Tanween and Shaddah",
    content: "Master the rules of Tanween (double vowels) and Shaddah (emphasis).",
  },
  {
    week: "Week 7-8",
    title: "Basic Tajweed Rules",
    content: "Introduction to essential Tajweed rules for proper Quranic recitation.",
  },
]

const learningOutcomes = [
  "Proper pronunciation of Arabic letters",
  "Correct application of vowel marks",
  "Understanding of Tanween and Shaddah",
  "Basic Tajweed rules for Quranic recitation",
  "Confidence in reading Quranic text",
  "Foundation for advanced Quranic studies",
]

const instructors = [
  {
    name: "Sheikh Ahmad Al-Qari",
    role: "Lead Tajweed Instructor",
    bio: "Sheikh Ahmad has over 20 years of experience teaching Tajweed and Quranic recitation. He holds an Ijazah in Hafs from Asim.",
    
  },
  {
    name: "Ustadha Fatima Al-Hafiza",
    role: "Assistant Tajweed Instructor",
    bio: "Ustadha Fatima is a Hafiza of the Quran and specializes in teaching Tajweed to beginners. She has been teaching for 10 years.",

  },
]

const testimonials = [
  {
    name: "Abdullah M.",
    content:
      "This course has significantly improved my Quranic recitation. The instructors are patient and knowledgeable.",
    rating: 5,
  },
  {
    name: "Aisha R.",
    content: "I started as a complete beginner, and now I can read the Quran with proper Tajweed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Omar S.",
    content:
      "The course structure is well-organized, and the online platform is easy to use. Great learning experience!",
    rating: 4,
  },
]

export default function QaidaWithTajweed() {
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
              <p className="text-gray-600 dark:text-gray-300">Suitable for beginners</p>
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
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
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
            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle>Course Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Basic understanding of the Arabic alphabet</li>
                    <li>Commitment to regular practice and attendance</li>
                    <li>A device with internet connection for online classes</li>
                    <li>A quiet space for focused learning and recitation practice</li>
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
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How are the online classes conducted?",
                answer:
                  "Classes are held via Zoom, allowing for interactive sessions with the instructor and fellow students. You'll be able to ask questions in real-time and receive immediate feedback on your recitation.",
              },
              {
                question: "Is there homework or assignments?",
                answer:
                  "Yes, students are given weekly assignments to practice their recitation and reinforce the lessons. These assignments are reviewed in the following class.",
              },
              {
                question: "Can I access recorded lessons if I miss a class?",
                answer:
                  "All live sessions are recorded and made available to enrolled students, allowing you to review the material or catch up if you miss a class.",
              },
              {
                question: "How long does it take to complete the course?",
                answer:
                  "The course is designed to be completed in 8 weeks, with 3 one-hour sessions per week. However, individual progress may vary based on practice and prior knowledge.",
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
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Quranic Journey?</h2>
          <p className="text-xl mb-8">Enroll now and take the first step towards mastering Quranic recitation</p>
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

