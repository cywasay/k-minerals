"use client";

import { use } from "react";
import Header from "@/app/(landing)/_components/Header";
import Footer from "@/app/(landing)/_components/Footer";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/constants/blogs";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };

export default function BlogPostPage({ params }) {
  const resolvedParams = use(params);
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#191619] flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Blog post not found.</h1>
        <Link href="/blog" className="ml-4 underline text-[#CC7778]">Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="relative overflow-clip bg-[#191619]">
      <Header />
      
      {/* Blog Article Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#CC7778]/10 rounded-full blur-[140px] pointer-events-none -z-10 opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smooth}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#CC7778]" />
                <span className="text-[#CC7778] uppercase tracking-[0.3em] text-[10px] font-bold">{blog.category}</span>
                <span className="h-[1px] w-6 bg-[#CC7778]" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-tight drop-shadow-md">
                {blog.title}
              </h1>
              <div className="flex items-center gap-6 text-[#a1a1aa] text-[11px] uppercase tracking-widest font-bold">
                <span>By {blog.author}</span>
                <div className="w-1 h-1 bg-[#CC7778] rounded-full" />
                <span>{blog.date}</span>
                <div className="w-1 h-1 bg-[#CC7778] rounded-full" />
                <span>{blog.readTime}</span>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-24 sm:pb-32 px-4 sm:px-6 max-w-4xl mx-auto relative z-10 w-full">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ ...smooth, delay: 0.2 }}
           className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-white/5"
         >
           <Image
             src={blog.image}
             alt={blog.title}
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#191619]/40 via-transparent to-transparent opacity-80" />
         </motion.div>

         <div className="prose prose-invert prose-lg max-w-none prose-p:text-[#a1a1aa] prose-p:font-light prose-p:leading-relaxed prose-headings:text-white prose-headings:uppercase prose-headings:tracking-widest prose-strong:text-white prose-strong:font-bold">
           {blog.content.split('\n\n').map((paragraph, pIdx) => (
             <p key={pIdx} className="mb-6">{paragraph.trim()}</p>
           ))}
         </div>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={smooth}
           className="mt-20 p-10 rounded-[2rem] bg-[#CC7778] flex flex-col items-center text-center text-[#191619] shadow-2xl"
         >
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter shadow-sm">
                Ready to partner?
            </h3>
            <p className="text-[#191619] text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl mx-auto">
                Secure a reliable supply of premium minerals from the heart of Kohistan. Let’s build a partnership grounded in quality and consistency.
            </p>
            <Link href="/contact">
                <Button className="!bg-[#191619] !border-[#191619] !text-white hover:!bg-black !px-10 !py-4 font-bold tracking-widest text-xs uppercase shadow-xl hover:shadow-[0_10px_30px_rgba(25,22,25,0.4)] transition-all duration-300">
                    Contact Our Sales Team
                </Button>
            </Link>
         </motion.div>

         {/* Author Bio */}
         <div className="mt-20 pt-10 border-t border-white/10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#CC7778]/20 flex items-center justify-center text-[#CC7778] font-bold text-xl uppercase tracking-tighter border border-[#CC7778]/40">
                {blog.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex flex-col">
                <span className="text-white font-bold uppercase tracking-widest text-xs">{blog.author}</span>
                <span className="text-[#a1a1aa] text-[10px] uppercase tracking-[0.2em]">{blog.authorRole}</span>
            </div>
         </div>
      </article>

      <Footer />
    </div>
  );
}
