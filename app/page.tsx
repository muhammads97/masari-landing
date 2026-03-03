import DownloadSection from "./components/sections/DownloadSection";
import FeaturesSection from "./components/sections/Features/FeaturesSection";

export default function Home() {
  return (
    <>
      <FeaturesSection />
      <DownloadSection />
    </>
    // <main className="centered-page">
    //   <div className="card">
    //     <div className="badge">Beta Launch Soon</div>

    //     <h1>Masari</h1>
    //     <h2>AI-powered expense tracking</h2>

    //     <p>
    //       Capture expenses effortlessly and understand your money with clarity.
    //       Masari is built for simplicity, automation, and shared financial
    //       visibility.
    //     </p>

    //     <a className="btn" href="#">
    //       Join Beta Soon
    //     </a>

    //     <div className="links">
    //       <a href="/terms">Terms</a>
    //       <a href="/privacy">Privacy</a>
    //     </div>
    //   </div>
    // </main>
  );
}
