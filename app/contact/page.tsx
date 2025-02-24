"use client"

import Image from "next/image"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone, MapPin, Clock, MessageSquare, ChevronDown } from "lucide-react"
import Footer from "@/components/footer"
import { useState } from "react"

const faqs = [
  {
    question: "How do I start learning?",
    answer:
      "Contact us on WhatsApp, choose a package, and schedule your first class with one of our qualified instructors.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "A computer, tablet or phone with a stable internet connection, a microphone, and optionally, a webcam for face-to-face interactions.",
  },
  {
    question: "Are group classes available?",
    answer:
      "Yes, we offer both individual and group classes. Group classes are a great way to learn collaboratively and make new friends.",
  },
  {
    question: "How long are the classes?",
    answer: "Most classes are 45-60 minutes long, depending on the package and level of study.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we have mobile apps for both iOS and Android devices, allowing you to learn on-the-go.",
  },
  {
    question: "Can I record the classes?",
    answer:
      "Recording is available for personal use with the instructor's permission. Sharing or distributing recordings is not allowed.",
  },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F4B41A]/20 via-green-50 to-white py-20">
          <motion.div
            className="container relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-6xl mb-4">
                Get in <span className="text-emerald-600">Touch</span>
              </h1>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Contact us to buy your plan. We're here to answer any questions you have about our Quranic learning
                programs. Feel free to reach out!
              </p>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href="https://wa.me/923176456606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Background decorations */}
          <div className="absolute left-1/4 top-1/4 -z-10 h-64 w-64 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-[#F4B41A]/20 opacity-50 blur-3xl"></div>
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
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <div className="grid gap-6">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+92 317 6456606",
                      link: "tel:+03176456606",
                    },
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "168 D Block, Old Satellite Town, Sargodha",
                      link: "https://www.google.com/maps/search/?q=Satellite+Town,+Sargodha+D+Block,",
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
                    },
                    {
                      icon: MessageSquare,
                      title: "WhatsApp",
                      content: "03176456606",
                      link: "https://wa.me/923176456606",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Card className="hover:shadow-md transition-all duration-300 cursor-pointer">
                          <CardHeader className="flex flex-row items-center space-y-0">
                            <item.icon className="mr-4 h-6 w-6 text-green-700" />
                            <CardTitle>{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>{item.content}</p>
                          </CardContent>
                        </Card>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mx-auto max-w-3xl text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-green-900 mb-4">Scan to Connect on WhatsApp</h2>
                </div>
                <Card className="hover:shadow-lg transition-all duration-300 p-8">
                  <Image
                    src="/Images/wa-qr-code.jpeg"
                    alt="QR-Code for Whatsapp"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto"
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-20">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center text-3xl font-bold"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-left">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openFaq === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="p-5 bg-green-50 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-emerald-500 to-green-600">
          <div className="container text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-3xl font-bold text-white"
            >
              Ready to Start Your Quranic Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-lg text-white"
            >
              Join thousands of students learning the Quran online with expert teachers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href="https://wa.me/923176456606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Your Journey Now
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

