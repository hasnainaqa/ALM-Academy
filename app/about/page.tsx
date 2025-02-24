"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20">
          <motion.div
            className="container relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-6xl">About Alif Academy</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We are dedicated to making Quranic education accessible to everyone through modern technology and
                traditional teaching methods.
              </p>
            </div>
          </motion.div>

          {/* Background decorative elements */}
          <motion.div
            className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-green-100"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute left-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-[#F4B41A]/10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-green-900">Our Mission</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  To provide high-quality Quranic education that is accessible, engaging, and effective for learners of
                  all ages and backgrounds.
                </p>
                <div className="mt-8 grid gap-4">
                  {["Expert Teachers", "Flexible Learning", "Interactive Sessions", "Personalized Attention"].map(
                    (feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-4 rounded-lg border p-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="h-2 w-2 rounded-full bg-green-700" />
                        <span>{feature}</span>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>

              <motion.div
                className="relative h-[400px] overflow-hidden rounded-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image src="/Images/our-mission.png" alt="About Us" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-20">
          <div className="container">
            <motion.h2
              className="mb-12 text-center text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Core Values
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our teaching and student support.",
                },
                {
                  title: "Inclusivity",
                  description: "We welcome students from all backgrounds and levels of Quranic knowledge.",
                },
                {
                  title: "Innovation",
                  description: "We continuously improve our methods and technology to enhance the learning experience.",
                },
                {
                  title: "Respect",
                  description: "We foster a respectful and supportive environment for all our students and staff.",
                },
                {
                  title: "Integrity",
                  description:
                    "We uphold the highest standards of honesty and ethical conduct in all our interactions.",
                },
                {
                  title: "Empowerment",
                  description: "We empower our students to take control of their Quranic learning journey.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                <p className="mb-4 text-lg text-muted-foreground">
                  LearnQura'an was founded in 2015 with a vision to make Quranic education accessible to everyone,
                  regardless of their location or schedule. Since then, we've grown to serve thousands of students
                  worldwide, continuously improving our teaching methods and technology.
                </p>
                <p className="mb-6 text-lg text-muted-foreground">
                  Our team of dedicated scholars and tech experts work tirelessly to create an immersive and effective
                  online learning environment that honors the traditional methods of Quranic study while embracing
                  modern educational technologies.
                </p>
                
              </motion.div>

              <motion.div
                className="relative h-[400px] overflow-hidden rounded-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image src="/Images/our-journey.jpeg" alt="Our Journey" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-green-700 py-20 text-white">
          <div className="container text-center">
            <motion.h2
              className="mb-6 text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Quranic Community
            </motion.h2>
            <motion.p
              className="mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Embark on your journey to deepen your understanding of the Quran. Start learning today with our expert
              teachers and supportive community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-green-700 hover:bg-green-50">
                Start Your Free Trial
              </Button>   
            </Link>

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

