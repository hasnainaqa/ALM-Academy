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
import { BookOpen, Clock, BarChart, CheckCircle, Star, User, ArrowRight, Brain, Target, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courseDetails = {
  title: "Quran Memorization",
  description: "Comprehensive program for memorizing the entire Quran with understanding and proper recitation",
  duration: "2 years",
  level: "Intermediate to Advanced",
  lessons: 730, // Assuming daily lessons
  students: 1000,
  rating: 4.9,
}

const syllabus = [
  {
    month: "Month 1-3",
    title: "Foundation and Methodology",
    content:
      "Learn effective memorization techniques, establish a strong foundation in Tajweed, and begin with short surahs.",
  },
  {
    month: "Month 4-12",
    title: "Juz 1-10 Memorization",
    content:
      "Begin memorizing the first ten Juz of the Quran with proper Tajweed, focusing on retention and understanding.",
  },
  {
    month: "Month 13-21",
    title: "Juz 11-20 Memorization",
    content:
      "Continue memorization with the next ten Juz, emphasizing consistent review and deeper comprehension of the verses.",
  },
  {
    month: "Month 22-24",
    title: "Juz 21-30 Memorization and Review",
    content:
      "Complete the memorization of the entire Quran and establish a comprehensive review routine to ensure long-term retention.",
  },
]

const learningOutcomes = [
  "Memorize the entire Quran with proper Tajweed",
  "Develop strong memorization techniques and strategies",
  "Establish a consistent review routine for long-term retention",
  "Understand the meaning and context of memorized verses",
  "Gain spiritual and personal growth through Quranic study",
  "Achieve the prestigious status of a Hafiz/Hafiza",
]

const instructors = [
  {
    name: "Sheikh Muhammad Al-Hafiz",
    role: "Lead Quran Memorization Instructor",
    bio: "Sheikh Muhammad is a renowned Hafiz with over 25 years of experience in teaching Quran memorization. He has an Ijazah in ten Qira'at and has guided hundreds of students to complete Hifz.",
    image: "/placeholder.svg",
  },
  {
    name: "Ustadha Amina Al-Qariah",
    role: "Assistant Memorization Instructor",
    bio: "Ustadha Amina completed her Hifz at a young age and has been teaching Quran memorization for 15 years. She specializes in helping students develop effective memorization techniques.",
    image: "/placeholder.svg",
  },
]

const testimonials = [
  {
    name: "Ahmed H.",
    content:
      "This course has transformed my relationship with the Quran. The structured approach and constant support made the seemingly impossible task of memorizing the entire Quran achievable.",
    rating: 5,
  },
  {
    name: "Fatima S.",
    content:
      "The instructors are incredibly patient and knowledgeable. Their personalized attention helped me overcome challenges and stay motivated throughout my Hifz journey.",
    rating: 5,
  },
  {
    name: "Yusuf R.",
    content:
      "I appreciated the holistic approach of this course, focusing not just on memorization but also on understanding and implementing the Quranic teachings in our lives.",
    rating: 5,
  },
]

export default function QuranMemorization() {
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
              <p className="text-gray-600 dark:text-gray-300">For dedicated learners</p>
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
                  <CardTitle>Our Memorization Methodology</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Brain className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Chunking Technique</h3>
                        <p>Break down larger portions into smaller, manageable chunks for easier memorization.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Spaced Repetition</h3>
                        <p>Review memorized portions at increasing intervals to strengthen long-term retention.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Personalized Pace</h3>
                        <p>
                          Tailor the memorization speed to each student's capacity, ensuring steady progress without
                          overwhelming.
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
          <h2 className="text-3xl font-bold mb-6">Memorization Progress Tracker</h2>
          <Card>
            <CardHeader>
              <CardTitle>Your Hifz Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Juz 1-10</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <Progress value={100} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Juz 11-20</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Juz 21-30</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <Progress value={10} className="w-full" />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Track your progress and stay motivated throughout your memorization journey.
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
                question: "How long does it typically take to memorize the entire Quran?",
                answer:
                  "The time it takes to memorize the entire Quran varies from person to person. On average, with consistent daily practice, it can take 2-3 years. However, some students may complete it faster, while others may take longer. Our course is structured for a 2-year completion, but we adjust the pace to each student's capacity.",
              },
              {
                question: "What if I already have some portions memorized?",
                answer:
                  "That's great! We assess each student's current memorization level at the beginning of the course and create a personalized plan. You'll be able to start from where you left off and strengthen your existing memorization while progressing further.",
              },
              {
                question: "How much time should I dedicate daily for memorization?",
                answer:
                  "We recommend dedicating at least 2-3 hours daily for memorization and review. This includes both new memorization and reviewing previously memorized portions. Consistency is key in Quran memorization.",
              },
              {
                question: "Is there support available if I struggle with memorization?",
                answer:
                  "Our instructors provide one-on-one support to students who are facing challenges. We also have additional resources, memorization techniques, and peer support groups to help you overcome any difficulties.",
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
          <h2 className="text-3xl font-bold mb-6">Begin Your Hifz Journey Today</h2>
          <p className="text-xl mb-8">Take the first step towards becoming a Hafiz/Hafiza of the Quran</p>
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

