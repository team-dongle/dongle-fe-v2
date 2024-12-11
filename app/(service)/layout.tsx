import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="m-[0_auto] min-h-screen max-w-[896px] pt-40">
        {children}
      </main>
      <Footer />
    </>
  );
}
