import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Data Controller Trainings",
    paragraph:
      "In the digital age, the role of data controllers is pivotal in ensuring the responsible handling of sensitive information. Our Data Controller Trainings provide comprehensive education and skills development to equip your team with the knowledge and expertise needed to excel in this crucial role, fostering a culture of compliance and data stewardship within your organization.",
    image: "/images/blog/img2.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: " Data Processor Trainings",
    paragraph:
      "Our Data Processor Trainings offer a concise yet comprehensive exploration of the vital role data processors play in managing and safeguarding sensitive information. Tailored to meet the demands of today's data-driven world, our training program equips participants with the knowledge and skills necessary to excel in this critical function.",
    image: "/images/blog/img1.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Data Security Trainings",
    paragraph:
      "Our Data Security Trainings offer a concise and targeted approach to enhancing your understanding and proficiency in safeguarding sensitive information. Whether you're a seasoned professional or new to the field, our program provides valuable insights, practical strategies, and expert guidance to fortify your organization's defenses against cyber threats.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/img3.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
