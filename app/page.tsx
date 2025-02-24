"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Star,
  Users,
  Globe,
  Percent,
  Video,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const featuredCourses = [
  {
    icon: BookOpen,
    title: "Qaida With Tajweed",
    description: "Master the foundational rules of Quranic recitation",
    href: "/courses/qaida-with-tajweed",
  },
  {
    icon: Video,
    title: "Quran Memorization",
    description: "Comprehensive program for memorizing the entire Quran",
    href: "/courses/quran-memorization",
  },
  {
    icon: Users,
    title: "Online Nazra Quran",
    description:
      "Practice Quran recitation with live feedback from expert teachers",
    href: "/courses/online-nazra-quran",
  },
];
const names = ["Mehwish Batool", "Saad Mahmood ", "Ijaz Ahmad"];
const reviews = [
  "The quality of instruction and personal attention I received was exceptional. The teachers are highly qualified and patient.",
  "A fantastic platform! The tutors are knowledgeable, and I have learned so much in a short time.",
  "This has been an amazing learning experience. The lessons are engaging, and the schedule is very flexible.",
];
const times = ["2 weeks ago", "3 months ago", "1 year ago"];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950">
      <Header />

      <main>
        <section className="relative overflow-hidden py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-xl font-medium text-emerald-600 dark:text-emerald-400 font-arabic">
                    خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Start your{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      QURANIC
                    </span>{" "}
                    education today
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Online, Easy, & Accessible
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  
                  <Link href="/courses">
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors w-full sm:w-auto"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/personas/svg?seed=Student${i}&backgroundColor=b6e3f4`}
                          alt={`Student ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Join{" "}
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      2,000+
                    </span>{" "}
                    students
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-amber-50 dark:from-emerald-900/30 dark:to-amber-900/30 rounded-3xl blur-2xl"></div>
                <Card className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-learnquraan-co-uk-2025-02-22-21_45_59.png-btb6q8RT7OmjKoWyyOCf88xCsK3bGc.jpeg"
                    alt="Quran Learning"
                    className="w-full h-[400px] object-cover rounded-t-2xl"
                  />
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <Users className="w-6 h-6 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                        <p className="text-sm font-medium">Expert Teachers</p>
                      </div>
                      <div className="text-center">
                        <Video className="w-6 h-6 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                        <p className="text-sm font-medium">Online Classes</p>
                      </div>
                      <div className="text-center">
                        <Globe className="w-6 h-6 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                        <p className="text-sm font-medium">Global Community</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Alif Laam Meem Academy?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Experience the best in Quranic education with our unique
                features and benefits
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Male and Female Staff",
                  description:
                    "Choose instructors that suit your preferences and needs.",
                },
                {
                  icon: Percent,
                  title: "20% Sibling Discount",
                  description:
                    "Learn together and save with our family-friendly pricing.",
                },
                {
                  icon: Video,
                  title: "Classes on Zoom & Skype",
                  description:
                    "Flexible online learning platforms for your convenience.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                    <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-emerald-50 dark:bg-emerald-950/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Courses
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore our most popular Quranic courses and start your learning
                journey today
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-800">
                    <CardHeader>
                      <course.icon className="w-12 h-12 text-emerald-600 mb-4" />
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href={course.href} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  View All Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Students Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {names.map((name, i) => (
                <Card
                  key={i}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {reviews[i % reviews.length]}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={`https://api.dicebear.com/7.x/personas/svg?seed=Student${i}`}
                          alt={`Student ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {times[i % times.length]}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-emerald-600 dark:bg-emerald-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Quranic Journey?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of students learning Quran online with us.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Start Your 3 Days Free Trial Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
