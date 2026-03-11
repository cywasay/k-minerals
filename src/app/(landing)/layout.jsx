export default function LandingLayout({ children }) {
  return (
    <div className="landing-layout min-h-screen flex flex-col">
      {/* Landing specific layout elements like a specialized Nav can go here */}
      <main className="flex-grow">
        {children}
      </main>
      {/* Landing specific footer can go here */}
    </div>
  );
}
