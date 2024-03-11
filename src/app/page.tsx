import Industries from "@/components/home/Industries/Industries";
import Clients from "@/components/home/clients/Clients";
import Delivering from "@/components/home/delivering/Delivering";
import Hero from "@/components/home/hero/hero";
import OurServices from "@/components/home/ourServices/OurServices";
import OurTech from "@/components/home/ourTech/OurTech";
import RootLayout from "@/components/layout/RootLayout";
export default function Home() {
  return (
    <main className="">
      <>
        <RootLayout >
          <Hero />
          <div className="container">
            <OurServices />
            <Industries />
            <OurTech />
          </div>
          <Delivering />
          <div className="container">
            <Clients />
          </div>
        </RootLayout>
      </>
    </main>
  );
}
