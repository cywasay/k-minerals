import SmoothScroll from "@/components/ui/SmoothScroll";

export default function AboutLayout({ children }) {
  return (
    <div className="about-layout min-h-screen flex flex-col">
      <main className="flex-grow">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </main>
    </div>
  );
}
