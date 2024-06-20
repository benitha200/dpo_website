import Link from "next/link";
import heroImg from "./../../public/images/hero/GDPR-pana.png"
import img4 from "./../../public/images/hero/img4.svg" 
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
  id="home"
  className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
>
  <div className="container flex ">
    <div className="flex" style={{ flex: '0 0 50%' }}>
      <div className="w-full px-4">
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Data Protection Trainings and Risk Assessment tool
          </h1>
          <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
            Welcome to the forefront of data security with our comprehensive
            Data Protection Trainings and Risk Assessment Tool. In today's
            digital age, safeguarding sensitive information is paramount, and
            our solution offers a robust framework to ensure your organization
            remains resilient against evolving threats.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/blog"
              className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Trainings
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
            >
              Risk Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <Image src={img4} alt="security" />
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
