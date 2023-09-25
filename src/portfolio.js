/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arafat Rahman",
  title: "Hi all, I'm Arafat",
  subTitle: emoji(
    "Hello! I am living in Bnagladesh. I’m currently a Cloud specialist and DevOps Engineer. Highly motivated and detail-oriented professional seeking a Junior Cloud System Administrator & DevOps Engineer position to contribute to the efficient management of cloud infrastructure, deployment of applications, and implementation of DevOps practices. I have been working with cloud-based applications for more than 2 years. I am experienced in Linux System Administrator, cloud solutions, DevOps, and digital transformation. I have been providing professional services by solving real-world problems, creating customized solutions to address specific customer requirements, and improving overall productivity. I’ve been delivering a number of projects for large enterprises, including consultation, Linux administration, solving any problem with Linux, design, scoping, planning, migration, and technical documentation.."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19RoBBSO562wx-vy-PE0MmQvGpxGdwdaG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arafat-sayad",
  linkedin: "https://www.linkedin.com/in/arafat-rahman-sayad/",
  gmail: "arafat.sayadbd@gmail.com",
  gitlab: "https://gitlab.com/arafat.sayad402",
  facebook: "https://www.facebook.com/SayadhasanFa/",
  medium: "https://medium.com/@arafat.sayad",
  stackoverflow: "https://stackoverflow.com/users/21991666/arafat-sayad",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Cloud Specialist , System Administrator & DevOps Engineer .",
  skills: [
    emoji(
      "⚡ Deploy any programming language web-based project / DevOps for AWS, GCP, Azure, any cloud service configuration and automated deployment on any VPS platform through a CI/CD pipeline."
    ),
    emoji("⚡ I will solve any problem related to Docker, kubernets, Terraform, Jenkins, Proxy server (Nginx, Apache) setup, Server Load balancing. "),
    emoji(
      "⚡ Collaborate with cross-functional teams, including software developers, system engineers, and operations teams, to ensure seamless integration and operation of systems and applications.."
    ),
    emoji(
      "⚡ I'm here to fix any issues related to Linux servers using Bluehost, Hostgator, Terraform, cPanel, WHM, WordPress, VPS, or any other hosting control panel."
    ),
    emoji(
      "⚡ Implement and manage automation tools and frameworks for infrastructure provisioning, configuration management, and deployment.."
    ),
    emoji(
      "⚡ Collaborate with development teams to optimize application performance, scalability, and reliability in production environments.."
    ),
    emoji(
      "⚡ Conduct regular system audits, vulnerability assessments, and security compliance checks to ensure adherence to security standards and best practices."
    ),
    emoji(
      "⚡ I have provide in Microsoft Cloud and Solutions."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Digital-ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "microsoft-365",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Daffodil International University",
      logo: require("./assets/images/diu.png"),
      subHeader: "B.SC in software engineering & cyber security ",
      duration: "September 2017 - January 2022",
      desc: "Software Engineering is the discipline that involves designing, building, and maintaining software systems & Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, breaches, and threats.",
      descBullets: [
        "Cyber security, SQL Injection,Security Misconfiguration.",
        "Programming Language: Java,HTML5,PHP, JavaScript,Asp.Net,python, Spring Framework, MySql.",
        "analyze user requirements, design software architecture, write code, test and debug applications.",
        "focuses on applying develop high-quality, reliable, and scalable software solutions.",
        "practices and technologies aimed at safeguarding information and ensuring the integrity, confidentiality, and availability of digital assets. "
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DavOps & System Engineer",
      company: "Doer Service LTD (BD)",
      companylogo: require("./assets/images/doer.png"),
      date: "Febuary 2022 – Present",
      desc: "I have been working with DavOps & System Engineer.",
      descBullets: [
        "Installing, configuring, testing and maintaining operating systems, application software and system management tools.",
        "Building and implementing new development tools and infrastructure",
        "Deploying software : Dockeriz software , R-shiniy ,Java, PHP, Python, AI-Model, ASP.NET and  Deploy cloud platform. ",
        "Write meaningful , relevant , high - quality automated tests and work with CI / CD . ",
        "Ability to create and upgrade detailed documentation including, installation, configuration, migrations, patching, security, and Deployment. "
      ]
    },
    {
      role: " DavOps Engineer ",
      company: "Ai-Tela Branding Company (Morocco)",
      companylogo: require("./assets/images/quoraLogo.jpeg"),
      date: "April 2023 – Present",
      
      desc: " I have been working with cloud-based AI-applications ",
      descBullets: [
        "Provide technical remote support for enterprise-level application systems",
        "Support real-time AI project, Bug fix any error Ai Poject",
        "Document actionable bugs for engineering resolution.",
        "Deploy updates and fixes, and provide Level 2 technical support",
        "Develop scripts to automate visualization.",
        "Maintain service reports."
      ]
    },
    {
      role: "Software & System Engineer",
      company: "The Institute for Bird Populations (US)",
      companylogo: require("./assets/images/bird.jpg"),
      date: "November 2022 – Present",
      desc: "I have been working with cloud-based Software & System support.",
      descBullets: [
        "Installing, configuring, testing and maintaining operating systems, application software and system management tools.",
        "Manage and monitor all installed systems and infrastructure.",
        "Maintain security, backup, and redundancy strategies.",
        "Ensuring the highest levels of systems and infrastructure."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/i-educar.png"),
      projectName: "i-educar",
      projectDesc: "O i-Educar is a free, fully online school management software that allows school secretaries, teachers, coordinators, and administrators to use a tool that generates real-time information and statistics. It has a centralized and easily accessible database, reducing the need for paper usage, duplicate documents, citizen response time, and streamlining the work of public servants.It was originally developed by the municipality of Itajaí - SC and made available on the Public Software Portal of the Federal Government in 2008 with the aim of meeting the needs of Education Secretariats and Public Schools throughout Brazil.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ieducar.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tjh.png"),
      projectName: "Thomas James Homes (TJH) is homebuilder ",
      projectDesc: "Thomas James Homes (TJH) is the single-lot homebuilder unlocking invaluable access to new homes in the coolest neighborhoods. With more than 350 homes in annual production and divisions in Southern California, Northern California, the Pacific Northwest, Colorado, and Arizona, TJH builds design-driven homes in communities within major metro areas where new construction is rare and in demand. Its customer-centric new home solutions include options to build a new home on an existing homesite, customize a pre-construction home, or buy a market home curated by in-house design experts. Committed to long-term trade partnerships and recognized by the National Association of Home Builders for its award-winning agent program, TJH exists to help everyone in its marketplace t",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tjh.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified DevOps Certification course Online",
      subtitle:
        "",
      image: require("./assets/images/download.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PYTKA5qDdnJ3zU77HN1dwPTwnXfpRjyG/view?usp=drive_link"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801316979570",
  email_address: "arafat.sayadbd@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
