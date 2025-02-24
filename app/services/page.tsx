"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, Video, Users, Calendar, Headphones, BadgeCheck, Globe, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

const services = [
  {
    icon: BookOpen,
    title: "Quran Reading",
    description: "Learn to read the Quran with proper Tajweed rules",
  },
  {
    icon: Video,
    title: "Online Classes",
    description: "Interactive online sessions with qualified teachers",
  },
  {
    icon: Users,
    title: "Group Learning",
    description: "Join group sessions for collaborative learning",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose class times that work best for you",
  },
  {
    icon: Headphones,
    title: "One-on-One Sessions",
    description: "Personalized attention from expert instructors",
  },
  {
    icon: BadgeCheck,
    title: "Certification Programs",
    description: "Earn recognized certificates in Quranic studies",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Classes available in various languages",
  },
  {
    icon: Clock,
    title: "24/7 Learning Resources",
    description: "Access study materials anytime, anywhere",
  },
]

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-gray-950 py-20">
          <motion.div
            className="container relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-100 sm:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Comprehensive Quranic education services tailored to your learning needs
              </p>
            </div>
          </motion.div>

          {/* Background decorations */}
          <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#F4B41A]/20 opacity-50 blur-3xl"></div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-700 to-[#F4B41A] opacity-0 transition-opacity group-hover:opacity-10"
                    initial={false}
                    whileHover={{ opacity: 0.1 }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button variant="default" className="bg-green-700 px-8 py-6 text-lg hover:bg-green-800">
                Start Learning Today
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="bg-green-50 dark:bg-green-950 py-20">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
            >
              Our Teaching Methodology
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Interactive and Engaging Learning</h3>
                <p className="mb-4">
                  Our teaching methodology combines traditional Quranic learning techniques with modern educational
                  practices. We focus on:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Interactive live sessions with expert teachers</li>
                  <li>Personalized feedback and progress tracking</li>
                  <li>Multimedia resources for enhanced understanding</li>
                  <li>Practice exercises and quizzes for reinforcement</li>
                  <li>Collaborative learning through group discussions</li>
                </ul>
                <Link href="/methodology">
                  <Button variant="outline">Learn More About Our Methodology</Button>
                </Link>
              </motion.div>
              <motion.div
                className="relative h-[400px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1000&h=800"
                  alt="Teaching Methodology"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
            >
              Specialized Programs
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Quran Memorization",
                  description: "Memorize the entire Quran with guidance from Huffaz",
                  image:
                    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1000&h=800",
                },
                {
                  title: "Tajweed Mastery",
                  description: "Perfect your Quranic recitation with advanced Tajweed rules",
                  image:
                    "https://images.unsplash.com/photo-1591281700819-900258b1423e?auto=format&fit=crop&q=80&w=1000&h=800",
                },
                {
                  title: "Arabic Language",
                  description: "Learn Quranic Arabic to understand the Quran deeply",
                  image:
                    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000&h=800",
                },
                {
                  title: "Tafsir Studies",
                  description: "Explore the meanings and interpretations of Quranic verses",
                  image:
                    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=1000&h=800",
                },
                {
                  title: "Ijazah Program",
                  description: "Earn an Ijazah certificate in Quran recitation",
                  image:
                    "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80&w=1000&h=800",
                },
                {
                  title: "Kids Quran Learning",
                  description: "Specially designed courses for young learners",
                  image:
                    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000&h=800",
                },
              ].map((program, index) => (
                <motion.div
                  key={program.title}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green-700 dark:bg-green-900 py-20 text-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span>Expert Quran teachers with years of experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span>Flexible scheduling to fit your lifestyle</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span>Personalized learning plans for each student</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span>Interactive online platform for engaging lessons</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="relative h-[300px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=1000&h=800"
                  alt="Online Quran Learning"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <motion.h2
              className="mb-12 text-center text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Students Say
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Ahmed.",
                  quote: "The flexibility of online classes allows me to learn at my own pace. Highly recommended!",
                  image:
                    "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=200&h=200",
                },
                {
                  name: "Fatima.",
                  quote:
                    "I've improved my Tajweed significantly thanks to the personalized feedback from my instructor.",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
                },
                {
                  name: "Yusuf.",
                  quote: "The interactive platform makes learning the Quran engaging and enjoyable. Great experience!",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mb-4"
                  />
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green-50 dark:bg-green-950 py-20">
          <div className="container text-center">
            <motion.h2
              className="mb-6 text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Quranic Journey?
            </motion.h2>
            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of students learning the Quran online with our expert teachers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                Enroll Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

