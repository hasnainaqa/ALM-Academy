"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Footer from "@/components/footer";
import Link from "next/link";

const names = ["Nimra Ahmed ", "Hasnain Afzal", "Saad Mahmood"];
const reviews = [
  "The platform is user-friendly, and the tutors are highly skilled. I have improved my recitation significantly!",
  "Alif Academy has transformed my Quranic learning journey. The teachers are knowledgeable and patient, and the flexible schedule fits perfectly into my busy life.",
  "I love how interactive the lessons are! The one-on-one sessions have helped me gain confidence in my Tajweed skills.",
];

const packages = [
  {
    name: "Basic",
    description: "Perfect for beginners",
    price: "$29",
    features: [
      "3 live sessions per week",
      "Basic Quran reading",
      "Email support",
      "Access to learning materials",
    ],
    recommended: false,
  },
  {
    name: "Standard",
    description: "Most popular choice",
    price: "$49",
    features: [
      "5 live sessions per week",
      "Advanced Quran reading and Tajweed",
      "24/7 support",
      "Personalized learning plan",
      "Progress tracking",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    description: "For dedicated learners",
    price: "$79",
    features: [
      "Daily live sessions",
      "Comprehensive Quran studies",
      "1-on-1 mentoring",
      "Advanced certifications",
      "Exclusive workshops",
      "Lifetime access to materials",
    ],
    recommended: false,
  },
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950">
      <Header />

      <main>
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
                Choose Your{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  Learning Path
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Select the package that best fits your goals and schedule. Start
                your Quranic journey today.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    id={pkg.name.toLowerCase()}
                    className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 ${
                      pkg.recommended ? "border-emerald-500 shadow-lg" : ""
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute right-0 top-0 z-10">
                        <Badge className="rounded-bl-lg rounded-tr-lg bg-emerald-500 px-3 py-1 text-white">
                          Recommended
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 text-4xl font-bold">
                        {pkg.price}
                        <span className="text-base font-normal text-muted-foreground">
                          /month
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-emerald-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact" className="w-full">
                        <Button
                          variant="default"
                          className="w-full hover:bg-emerald-700 transition-colors"
                        >
                          Choose Plan
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-emerald-50 dark:bg-emerald-950/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
            >
              What Our Students Say
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((testimonial, index) => (
                <motion.div
                  key={testimonial}
                  className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src={`https://api.dicebear.com/7.x/personas/svg?seed=Student${index+1}`}
                      alt={`Student ${index}`}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {names[index % names.length]}
                      </h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {reviews[index % reviews.length]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  q: "How do online classes work?",
                  a: "Our online classes are conducted via video conferencing. You'll receive a link to join your scheduled class, where you can interact with your teacher in real-time.",
                },
                {
                  q: "Can I switch between packages?",
                  a: "Yes, you can upgrade or downgrade your package at any time. Changes will be reflected in your next billing cycle.",
                },
                {
                  q: "Is there a free trial available?",
                  a: "We offer a 7-day free trial for new students to experience our Standard package before committing.",
                },
                {
                  q: "Are the teachers qualified?",
                  a: "All our teachers are certified Quran instructors with years of experience in online teaching.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
