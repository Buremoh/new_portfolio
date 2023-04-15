import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    jobit,
    tripguide,
    threejs,
    itc,
    rancard,
    logiciel,
    coders,
    gpt3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Specialist",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Project Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Project Manager",
      company_name: "IT Consortium",
      icon: itc,
      iconBg: "#383E56",
      date: "January 2023 - Present",
      points: [
        "Developed detailed project plans to track progress.",
        "Improved engineering delivery times by 20% by enhancing the methodologies with tested best practice.",
        "Managed the planning and execution of projects to meet the clients' expectations.",
        "Ensured projects were completed within the estimated time and budget.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Coders Who Travel",
      icon: coders,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed a virtual event application which helps users create virtual events and determine event venue and time. The application was built with React.JS and RESTful APIs.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Logiciel Ghana Limited",
      icon: logiciel,
      iconBg: "#383E56",
      date: "Jan 2021 - Dec 2021",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Worked with an agile team of developers to provide cutting-edge solutions by meeting clients’ system requirements and specifications.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Group Admin Analyst",
      company_name: "Rancard Solutions Ltd",
      icon: rancard,
      iconBg: "#E6DEDD",
      date: "August 2013 - March 2017",
      points: [
        "Supervised travel logistics and adequately managed travel and meeting expenses (a monthly average of $7,000), increasing efficiency by 60%.",
        "Consistently maintained a high level of performance on deliverables resulting in timely meeting of deadlines.",
        "Prepared and managed operations budget and inventory to ensure optimal quarter over quarter cost savings of 30% from procurement of office consumables.",
        "Successfully implemented an effective system of electronically recording quarterly operational budget and expenses which boosted accuracy and efficiency.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He takes a methodic approach to getting the clients satisfied and the product completed. Clients we worked with always appreciated that.",
      name: "Frederick Amoako-Atta",
      designation: "Product Designer",
      company: "Freelance",
      image: "https://lh3.googleusercontent.com/7JFvlzYHXYdzPgKMy-0YcfUC0IOq4q1tH8Uk3EzkylKRSzeJuYEWlMUZKL5aoxqLbBoBV8lPnOrGm4er9o7r15T7w95_bbmEFBQ_oigp3mM",
    },
    {
      testimonial:
        "I was continuously impressed by the knowledge he brought to the table and his dedication to staying on top of the latest developments in the field.",
      name: "Bolaji Adeniji",
      designation: "Software Engineer",
      company: "Allianz Life Ghana Ltd",
      image: "https://lh3.googleusercontent.com/RR1P_D_3IHANyLvaznaW2R1Nihw7YCjz1IRWVXMFZYnskm_ID9bfSxgOD4gvBS2nWbJjS0l1PY-5Afr510sYXpJftM2A4X55j7pBI_NP1AWH",
    },
    {
      testimonial:
        "Bolaji combines sharp technical skills with strong intuition, and I always knew I could rely on him to meet deadlines and exceed clients' expectations.",
      name: "Daniel Kwarteng",
      designation: "Project Manager",
      company: "IT Consortium Ghana",
      image: "https://lh3.googleusercontent.com/w37SPw84veg_I4vYIHZH217MfByJAEgkDUebFOITTveoMHcg3CXUxRRECbJ5n8FTAvAl9yLeOI_LU6BzblT6kasxyai3pVlfwbTXWnW_ARBDdA",
    },
  ];
  
  const projects = [
    {
      name: "GPT-3 OpenAI Site",
      description:
        "A fully responsive modern UI/UX website in React JS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      demo_link: "https://gpt-3site.netlify.app",
      image: gpt3,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      demo_link: "https://pixels07.netlify.app",
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      demo_link: "https://recipe07.netlify.app",
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };