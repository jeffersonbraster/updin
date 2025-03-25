import InterviewCard from "@/components/interview-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            prepare-se para entrevistas com feedbacks práticos e baseados em IA
          </h2>

          <p className="text-lg">
            pratique perguntas de entrevista reais e obtenha feedbacks
            instantâneos
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/entrevista">Começar a entrevista</Link>
          </Button>
        </div>

        <Image src={"/robot.png"} alt="Robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Suas entrevistas</h2>

        <div className="interviews-section">
          <InterviewCard />

          <p>Você não tem entrevistas no momento</p>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Faça uma entrevista</h2>

        <div className="interviews-section">
          <p>Não existe entrevistas no momento</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
