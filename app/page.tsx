import Topbar from "./components/Topbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Button from "./components/Button";
export default function Home() {
  return (
    <main
      className="w-[375px] max-sm:w-full text-white max-sm:h-screen   h-[812px] overflow-hidden relative"
      style={{
        background:
          "var(--Linear, linear-gradient(169deg, #38474C -2.38%, #0E7D77 98.52%))",
        position: "relative",
      }}
    >
      <Topbar />
      <Title />
      <Button />
      <Footer />
    </main>
  );
}
