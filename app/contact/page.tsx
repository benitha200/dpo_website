import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Assessment",
  description: "Risk Assessment",
  // other metadata
};

const ContactPage = () => { 
  return (
    <>
      <Breadcrumb
        pageName="Risk Assessment"
        description="Warning: This Data Protection Impact Assessment identifies key compliance areas but should not be solely relied upon. Consult legal experts for a comprehensive review to ensure full GDPR compliance and avoid potential penalties."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
