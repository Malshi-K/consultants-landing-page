// pages/index.js
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-black bg-opacity-80"
      style={{
        backgroundImage: "url('/images/Web development.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <LandingPage />
    </div>
  );
}