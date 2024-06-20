import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";
import CompliantForm from "@/components/Forms/CompliantForm"
import DataControllerForm from "@/components/Forms/DataControllerForm"

export const metadata: Metadata = {
  title: "Data Controller Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const Form3 = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
        <DataControllerForm/>
        </div>
      </section>
    </>
  );
};

export default Form3;
