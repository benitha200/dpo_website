import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";
import CompliantForm from "@/components/Forms/CompliantForm"
import AuthorizationForm1 from "@/components/Forms/AuthorizationForm1"

export const metadata: Metadata = {
  title: "Authorization to store Data Outside Rwanda",
  description: " Authorization to store Data Outside Rwanda Form",
  // other metadata
};

const Form2 = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
        <AuthorizationForm1/>
        </div>
      </section>
    </>
  );
};

export default Form2;
