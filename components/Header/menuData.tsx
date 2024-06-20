import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/about",
  //   newTab: false,
  // },
  {
    id: 33,
    title: "DP Trainings",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Risk Assessment",
    path: "/contact",
    newTab: false,
  },

  {
    id: 4,
    title: "Apply For certificates",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Data Controller Certificate",
        path: "/form3",
        newTab: false,
      },
      {
        id: 42,
        title: "Data Processor Certificate",
        path: "/form4",
        newTab: false,
      },
      // {
      //   id: 43,
      //   title: "Authorization To Transfer Data Outside Rwanda",
      //   path: "/form2",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Authorization To Store Data Outside Rwanda",
      //   path: "/form2",
      //   newTab: false,
      // },
      {
        id: 44,
        title: "Compliant Form",
        path: "/blog-sidebar",
        newTab: false,
      },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
