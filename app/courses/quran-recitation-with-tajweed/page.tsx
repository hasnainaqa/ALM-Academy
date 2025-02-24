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
import { BookOpen, Clock, BarChart, CheckCircle, Star, User, ArrowRight, Mic, Music, BookMarked } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courseDetails = {
  title: "Quran Recitation With Tajweed",
  description: "Master the art of Quranic recitation with proper Tajweed rules for beautiful and accurate recitation",
  duration: "16 weeks",
  level: "Intermediate to Advanced",
  lessons: 48,
  students: 1200,
  rating: 4.9,
}

const syllabus = [
  {
    week: "Week 1-4",
    title: "Foundations of Tajweed",
    content: "Review of Arabic phonetics, introduction to Tajweed rules, and the importance of proper recitation.",
  },
  {
    week: "Week 5-8",
    title: "Articulation Points and Characteristics of Letters",
    content: "Detailed study of Makharij al-Huruf and Sifat al-Huruf, with practical exercises.",
  },
  {
    week: "Week 9-12",
    title: "Rules of Nun Sakinah and Tanween",
    content: "Comprehensive coverage of Izhaar, Idghaam, Iqlaab, and Ikhfaa, with extensive practice.",
  },
  {
    week: "Week 13-16",
    title: "Advanced Tajweed Rules and Quranic Recitation",
    content: "Study of Madd, Waqf, and other advanced rules. Practice full Surah recitations with proper Tajweed.",
  },
]

const learningOutcomes = [
  "Master the correct pronunciation of Arabic letters",
  "Apply Tajweed rules accurately in Quranic recitation",
  "Understand the importance and spiritual benefits of proper recitation",
  "Develop a melodious and confident Quranic voice",
  "Gain the ability to identify and correct common recitation mistakes",
  "Learn the etiquettes of Quran recitation",
  "Improve overall Arabic pronunciation and fluency",
  "Prepare for advanced Quranic recitation and potential Ijazah certification",
]

const instructors = [
  {
    name: "Qari Abdul Rahman",
    role: "Senior Tajweed Instructor",
    bio: "Qari Abdul Rahman is a renowned Quran reciter with over 25 years of teaching experience. He holds Ijazah in Hafs and Shu'bah recitations and has led Taraweeh prayers in Masjid al-Haram.",
    image: "/placeholder.svg",
  },
  {
    name: "Ustadha Maryam Khalid",
    role: "Tajweed and Qira'at Specialist",
    bio: "Ustadha Maryam specializes in the ten Qira'at and has been teaching Tajweed for 15 years. She is known for her patient teaching style and ability to help students overcome recitation challenges.",
    image: "/placeholder.svg",
  },
]

const testimonials = [
  {
    name: "Ahmad S.",
    content:
      "This course transformed my Quran recitation. The instructors' expertise and personalized feedback were invaluable.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    content:
      "I never thought I could improve my Tajweed so much in just 16 weeks. The course structure and practice sessions are excellent.",
    rating: 5,
  },
  {
    name: "Mohammed K.",
    content:
      "As someone who struggled with proper pronunciation, this course was a game-changer. Highly recommended for all levels.",
    rating: 5,
  },
]

export default function QuranRecitationWithTajweed() {
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
                      <Mic className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Interactive Recitation Sessions</h3>
                        <p>Regular one-on-one sessions with instructors for personalized feedback and correction.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Music className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Melodic Techniques</h3>
                        <p>Learn the art of beautiful recitation while maintaining proper Tajweed rules.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookMarked className="mr-2 mt-1 text-emerald-600" />
                      <div>
                        <h3 className="font-semibold">Comprehensive Theory and Practice</h3>
                        <p>
                          Balance between theoretical knowledge of Tajweed rules and extensive practical application.
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
          <h2 className="text-3xl font-bold mb-6">Your Tajweed Journey</h2>
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Makharij (Articulation Points)</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <Progress value={80} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Sifaat (Characteristics of Letters)</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Advanced Tajweed Rules</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Track your progress in key areas of Tajweed. Your instructor will update these metrics as you advance
                through the course.
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
                  "While basic knowledge of Arabic is helpful, it's not a strict requirement. We'll cover the necessary Arabic phonetics and alphabet as part of the course. However, familiarity with Arabic will allow you to progress more quickly.",
              },
              {
                question: "How much practice time is recommended outside of class?",
                answer:
                  "We recommend at least 30 minutes to 1 hour of daily practice for optimal progress. Consistent practice is key to improving your recitation skills.",
              },
              {
                question: "Will I receive a certificate upon completion?",
                answer:
                  "Yes, upon successful completion of the course and passing the final assessment, you will receive a certificate of completion. This is not an Ijazah, but it recognizes your achievement in mastering Tajweed rules.",
              },
              {
                question: "Can I record the live sessions for later review?",
                answer:
                  "Yes, with the instructor's permission, you can record the sessions for personal use. However, sharing or distributing these recordings is not allowed to protect the privacy of all participants.",
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
          <h2 className="text-3xl font-bold mb-6">Perfect Your Quranic Recitation</h2>
          <p className="text-xl mb-8">
            Enroll in our Quran Recitation with Tajweed course and elevate your connection with the Quran
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

