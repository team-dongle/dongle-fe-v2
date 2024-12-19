import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="m-[0_auto] min-h-screen max-w-[896px] pb-52 pt-40">
        {children}
      </main>
      <Footer />
    </>
  );
}
