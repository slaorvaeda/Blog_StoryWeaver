import { Header, AOSProvider, FancyCursor } from "@/components/ui";
import Footer from "../../components/footer";

export default function BlogLayout({ children }) {
  return (
    <>
      {/* Main Navigation */}
      <Header
        title="Story"
        subtitle="Weaver"
        navItems={["Home", "Stories", "About", "Contact"]}
        showSearch={true}
      />

      {/* Page Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
