import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import CompliantForm from "@/components/Forms/CompliantForm"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliant Forms",
  description: "Compliant Forms",
  // other metadata
};

const FormsCompliantPage = () => { 
  return (
    <>
      <Breadcrumb
        pageName="Compliant form"
        description="Assess what are the risks in your data processing and data controller"
      />

      <CompliantForm />
    </>
  );
};

export default FormsCompliantPage;
