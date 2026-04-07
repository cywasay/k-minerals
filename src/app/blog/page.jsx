"use client";

import Header from "@/app/(landing)/_components/Header";
import Footer from "@/app/(landing)/_components/Footer";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/constants/blogs";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };

export default function BlogPage() {
  return (
    <div className="relative overflow-clip bg-[#191619]">
      <Header />
      
      {/* Blog Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#CC7778]/10 rounded-full blur-[140px] pointer-events-none z-0 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smooth}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-[#CC7778]" />
                <span className="text-[#CC7778] uppercase tracking-[0.4em] text-xs font-bold">Insights & Heritage</span>
                <span className="h-[1px] w-8 bg-[#CC7778]" />
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter shadow-sm">
                Kohistan <span className="text-[#CC7778]">Lab</span>
              </h1>
              <p className="text-[#a1a1aa] text-lg md:text-xl font-light leading-relaxed">
                Exploring the science, history, and sustainability of the world’s most precious mineral resources.
              </p>
            </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 sm:pb-32 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 font-metropolis">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...smooth, delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-[#CC7778]/5 border border-white/5 rounded-3xl overflow-hidden hover:border-[#CC7778]/30 transition-all duration-700"
            >
              {/* Image with logic scaling */}
              <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191619] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#CC7778]/90 backdrop-blur-md rounded-full text-[9px] text-white font-bold uppercase tracking-widest z-20 shadow-xl">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 sm:p-7 flex-grow border-t border-white/5">
                <div className="flex items-center gap-3 mb-3 text-[#a1a1aa] text-[9px] uppercase tracking-widest font-medium">
                  <span>{blog.date}</span>
                  <div className="w-1 h-1 bg-[#CC7778] rounded-full" />
                  <span>{blog.readTime}</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#CC7778] transition-colors duration-500 line-clamp-2 leading-tight">
                  {blog.title}
                </h2>
                
                <p className="text-[#a1a1aa] text-[13px] sm:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                    <Link href={`/blog/${blog.slug}`}>
                      <Button className="!rounded-full !px-6 !py-2.5 !text-[9px] sm:!text-[10px] uppercase tracking-widest font-bold">
                        Read Story
                      </Button>
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
