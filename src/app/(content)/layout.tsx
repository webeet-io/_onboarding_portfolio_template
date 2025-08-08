import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
