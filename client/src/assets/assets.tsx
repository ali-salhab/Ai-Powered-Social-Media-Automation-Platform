/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import React from "react";
import { SiX, SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import img_1 from "./img-1.jpg";
import img_2 from "./img-2.jpg";
import img_3 from "./img-3.jpg";
import img_4 from "./img-4.jpg";

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export interface Platform {
    id: string;
    name: string;
    icon: React.ElementType;
    description: string;
}

export const PLATFORMS: Platform[] = [
    { id: "twitter", name: "Twitter / X", icon: SiX, description: "Post tweets, threads, and media" },
    { id: "linkedin", name: "LinkedIn", icon: LinkedInIcon, description: "Publish to your profile & company pages" },
    { id: "facebook", name: "Facebook", icon: SiFacebook, description: "Manage your pages and profile" },
    { id: "instagram", name: "Instagram", icon: SiInstagram, description: "Share photos, reels and stories" },
];

export const dummyPostsData: any = [
    {
        _id: "69fd98f4a59dd584d3587a1e",
        user: "69fd96aea59dd584d3587a1d",
        content: "Hi Everyone",
        platforms: ["linkedin"],
        scheduledFor: "2026-05-08T08:05:00.000Z",
        status: "published",
        createdAt: "2026-05-08T08:04:04.397Z",
        updatedAt: "2026-05-08T08:05:02.523Z",
    },
    {
        _id: "6a02c5213be90e11e963460a",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "Artificial Intelligence is no longer a futuristic concept; it's a transformative force reshaping our world today. From powering sophisticated analytics and automating complex tasks to driving groundbreaking discoveries in science and medicine, AI's rapid evolution is undeniable. We're witnessing unprecedented opportunities for innovation, efficiency, and problem-solving across every sector.\n\nAs AI continues to integrate into our daily lives and professional landscapes, the focus shifts to responsible development, ethical implementation, and fostering human-AI collaboration. Understanding its capabilities and implications is paramount for navigating this new era effectively and harnessing its full potential for positive impact.\n\nWhat are your thoughts on the current state and future trajectory of AI?\n\n#AI #ArtificialIntelligence #Innovation #TechTrends #DigitalTransformation #FutureOfWork #EthicalAI #Technology #MachineLearning #DeepLearning",
        platforms: ["linkedin"],
        scheduledFor: "2026-05-12T06:14:00.000Z",
        status: "published",
        createdAt: "2026-05-12T06:13:53.707Z",
        updatedAt: "2026-05-12T06:14:02.726Z",
    },
    {
        _id: "6a02c7e93be90e11e963460d",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "Unlock your potential in the rapidly evolving world of Artificial Intelligence. Our comprehensive AI course is meticulously designed for professionals and aspiring technologists eager to master the core concepts, practical applications, and ethical considerations of AI. From machine learning fundamentals to deep learning techniques and natural language processing, you'll gain the cutting-edge skills to innovate and lead in this transformative field. Learn from industry experts and build real-world projects that elevate your career trajectory. Enroll today and shape the future with unparalleled AI expertise!\n\n#AICourse #ArtificialIntelligence #MachineLearning #DeepLearning #DataScience #TechEducation #FutureOfAI #CareerDevelopment #ProfessionalDevelopment #AIskills #Innovation #TechTraining #Upskill",
        platforms: ["linkedin"],
        scheduledFor: "2026-05-12T06:26:00.000Z",
        status: "published",
        createdAt: "2026-05-12T06:25:45.813Z",
        updatedAt: "2026-05-12T06:26:02.572Z",
    },
    {
        _id: "6a032a7bc109744f21086020",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "As we approach 2026, understanding India's inflation trajectory remains paramount for economic stability and growth. Projections suggest continued influence from global supply chain dynamics, energy costs, and robust domestic demand. The Reserve Bank of India's proactive monetary policies will be crucial in balancing price stability with growth imperatives. Businesses and consumers should prepare for an evolving economic landscape, prioritizing resilience and strategic financial planning.\n\n#IndiaEconomy #InflationOutlook #RBI #EconomicForecast #BusinessStrategy #FutureOfFinance #India2026",
        platforms: ["linkedin"],
        scheduledFor: "2026-05-12T13:27:00.000Z",
        status: "published",
        createdAt: "2026-05-12T13:26:19.656Z",
        updatedAt: "2026-05-12T13:27:04.111Z",
    },
    {
        _id: "6a044112d7bb966a9a9a6de1",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        platforms: ["linkedin"],
        mediaUrl: img_1,
        mediaType: "image",
        scheduledFor: "2026-05-13T09:15:00.000Z",
        status: "published",
        createdAt: "2026-05-13T09:14:58.406Z",
        updatedAt: "2026-05-13T09:15:04.958Z",
    },
    {
        _id: "6a0448d9d7bb966a9a9a6de4",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        platforms: ["instagram"],
        mediaUrl: img_2,
        mediaType: "image",
        scheduledFor: "2026-05-13T09:49:00.000Z",
        status: "published",
        createdAt: "2026-05-13T09:48:09.498Z",
        updatedAt: "2026-05-13T09:49:15.507Z",
    },
    {
        _id: "6a0c1d4232d96fd9b1e904e2",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        platforms: ["instagram"],
        mediaUrl: img_3,
        mediaType: "image",
        scheduledFor: "2026-05-19T08:21:00.000Z",
        status: "published",
        createdAt: "2026-05-19T08:20:18.746Z",
        updatedAt: "2026-05-19T08:21:06.152Z",
    },
    {
        _id: "6a0c46fda6bca2a802e1d48f",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "🚀 Announcing the Future of Web Development! 🚀\n\nWe are thrilled to launch our brand new AI Web Development Course, designed to equip you with the cutting-edge skills needed to thrive in the era of artificial intelligence.\n\nAs AI continues to redefine every industry, integrating AI capabilities into web applications is no longer an option—it's a necessity. This comprehensive course will guide you through leveraging AI tools, frameworks, and methodologies to build intelligent, dynamic, and future-proof web solutions.\n\nLearn to develop AI-powered features, enhance user experiences with machine learning, and master the integration of advanced AI APIs into your projects. Whether you're a seasoned developer looking to upskill or an aspiring programmer ready to dive into the next big wave, this course is your gateway to innovation.\n\nDon't just build websites; build intelligent web experiences. Elevate your career and stay ahead of the curve.\n\n🔗 Enroll now and secure your spot: [Link to Course Page]\n\n#AIWebDev #WebDevelopment #AICourse #FutureOfTech #LearnAI #DeveloperSkills #TechEducation #Innovation #MachineLearning #Coding",
        platforms: ["instagram"],
        mediaUrl: img_4,
        mediaType: "image",
        scheduledFor: "2026-05-19T11:19:00.000Z",
        status: "published",
        createdAt: "2026-05-19T11:18:21.284Z",
        updatedAt: "2026-05-19T11:19:06.082Z",
    },
    {
        _id: "6a0c52f4a6bca2a802e1d491",
        user: "69fd96aea59dd584d3587a1d",
        content:
            "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        platforms: ["facebook"],
        mediaUrl: img_1,
        mediaType: "image",
        scheduledFor: "2026-05-19T14:09:00.000Z",
        status: "scheduled",
        createdAt: "2026-05-19T12:09:24.729Z",
        updatedAt: "2026-05-19T12:09:24.729Z",
    },
];

export const dummyAccountsData = [
    {
        _id: "6a04390528a41877988d1a05",
        zernioAccountId: "6a0439025e333c05295abae1",
        createdAt: "2026-05-13T08:40:37.420Z",
        handle: "greatstack",
        platform: "instagram",
        status: "connected",
        updatedAt: "2026-05-19T11:15:04.751Z",
        user: "69fd96aea59dd584d3587a1d",
    },
    {
        _id: "6a0c463828a4187798c152e6",
        zernioAccountId: "6a0c17805e333c05299b2019",
        createdAt: "2026-05-19T11:15:04.799Z",
        handle: "Greatstack",
        platform: "linkedin",
        status: "connected",
        updatedAt: "2026-05-19T11:15:04.799Z",
        user: "69fd96aea59dd584d3587a1d",
    },
];

export const dummyActivityData = [
    {
        _id: "6a0c472aa6bca2a802e1d490",
        user: "69fd96aea59dd584d3587a1d",
        actionType: "POST_PUBLISHED",
        description: "Published post to instagram ",
        relatedPost: {
            _id: "6a0c46fda6bca2a802e1d48f",
            content:
                "🚀 Announcing the Future of Web Development! 🚀\n\nWe are thrilled to launch our brand new AI Web Development Course, designed to equip you with the cutting-edge skills needed to thrive in the era of artificial intelligence.\n\nAs AI continues to redefine every industry, integrating AI capabilities into web applications is no longer an option—it's a necessity. This comprehensive course will guide you through leveraging AI tools, frameworks, and methodologies to build intelligent, dynamic, and future-proof web solutions.\n\nLearn to develop AI-powered features, enhance user experiences with machine learning, and master the integration of advanced AI APIs into your projects. Whether you're a seasoned developer looking to upskill or an aspiring programmer ready to dive into the next big wave, this course is your gateway to innovation.\n\nDon't just build websites; build intelligent web experiences. Elevate your career and stay ahead of the curve.\n\n🔗 Enroll now and secure your spot: [Link to Course Page]\n\n#AIWebDev #WebDevelopment #AICourse #FutureOfTech #LearnAI #DeveloperSkills #TechEducation #Innovation #MachineLearning #Coding",
        },
        createdAt: "2026-05-19T11:19:06.146Z",
        updatedAt: "2026-05-19T11:19:06.146Z",
    },
    {
        _id: "6a0c1d7232d96fd9b1e904e3",
        user: "69fd96aea59dd584d3587a1d",
        actionType: "POST_PUBLISHED",
        description: "Published post to instagram ",
        relatedPost: {
            _id: "6a0c1d4232d96fd9b1e904e2",
            content:
                "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        },
        createdAt: "2026-05-19T08:21:06.200Z",
        updatedAt: "2026-05-19T08:21:06.200Z",
    },
    {
        _id: "6a04491bd7bb966a9a9a6de5",
        user: "69fd96aea59dd584d3587a1d",
        actionType: "POST_PUBLISHED",
        description: "Published post to instagram ",
        relatedPost: {
            _id: "6a0448d9d7bb966a9a9a6de4",
            content:
                "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        },
        createdAt: "2026-05-13T09:49:15.551Z",
        updatedAt: "2026-05-13T09:49:15.551Z",
    },
    {
        _id: "6a044119d7bb966a9a9a6de2",
        user: "69fd96aea59dd584d3587a1d",
        actionType: "POST_PUBLISHED",
        description: "Published post to linkedin ",
        relatedPost: {
            _id: "6a044112d7bb966a9a9a6de1",
            content:
                "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        },
        createdAt: "2026-05-13T09:15:05.134Z",
        updatedAt: "2026-05-13T09:15:05.134Z",
    },
    {
        _id: "6a04377ecb798b7b29d8447c",
        user: "69fd96aea59dd584d3587a1d",
        actionType: "POST_PUBLISHED",
        description: "Published post to Facebook",
        relatedPost: null,
        createdAt: "2026-05-13T08:34:06.334Z",
        updatedAt: "2026-05-13T08:34:06.334Z",
    },
    {
        _id: "69fde9925bfee1a67731077e",
        user: "69fd96aea59dd584d3587a1d",
        actionType: "POST_PUBLISHED",
        description: "Published post to linkedin",
        relatedPost: {
            _id: "69fde973425a226c4cdb6c3b",
            content: "First Post",
        },
        createdAt: "2026-05-08T13:48:02.439Z",
        updatedAt: "2026-05-08T13:48:02.439Z",
    },
    {
        _id: "69fd992ea59dd584d3587a1f",
        user: "69fd96aea59dd584d3587a1d",
        actionType: "POST_PUBLISHED",
        description: "Published post to X / Twitter",
        relatedPost: {
            _id: "69fd98f4a59dd584d3587a1e",
            content: "Hi Everyone",
        },
        createdAt: "2026-05-08T08:05:02.602Z",
        updatedAt: "2026-05-08T08:05:02.602Z",
    },
];

export const dummyGenerationData = [
    {
        _id: "6a043e87d7bb966a9a9a6de0",
        user: "69fd96aea59dd584d3587a1d",
        prompt: "create a post for Job Hiring for Data Analyst",
        content:
            "Exciting Opportunity: Data Analyst!\n\nAre you a highly analytical professional passionate about transforming complex data into strategic insights? We're looking for a talented and experienced Data Analyst to join our innovative team and drive data-driven decisions.\n\nIn this role, you will leverage your expertise in SQL, Python/R, and cutting-edge data visualization tools to uncover key trends, build insightful reports, and inform critical business strategies. If you're a problem-solver who thrives on making a tangible impact, we encourage you to apply!\n\nDiscover more and submit your application today. [Link to careers page/Apply Here]\n\n#DataAnalyst #Hiring #JobOpportunity #Career #DataScience #Analytics #BusinessIntelligence #TechJobs #NowHiring",
        mediaUrl: img_1,
        mediaType: "image",
        tone: "Professional",
        createdAt: "2026-05-13T09:04:07.753Z",
        updatedAt: "2026-05-13T09:04:07.753Z",
    },
    {
        _id: "6a0435912bcd1c701e44c3e9",
        user: "69fd96aea59dd584d3587a1d",
        prompt: 'Post for launching a new "AI Web Development Course"',
        content:
            "🚀 Announcing the Future of Web Development! 🚀\n\nWe are thrilled to launch our brand new AI Web Development Course, designed to equip you with the cutting-edge skills needed to thrive in the era of artificial intelligence.\n\nAs AI continues to redefine every industry, integrating AI capabilities into web applications is no longer an option—it's a necessity. This comprehensive course will guide you through leveraging AI tools, frameworks, and methodologies to build intelligent, dynamic, and future-proof web solutions.\n\nLearn to develop AI-powered features, enhance user experiences with machine learning, and master the integration of advanced AI APIs into your projects. Whether you're a seasoned developer looking to upskill or an aspiring programmer ready to dive into the next big wave, this course is your gateway to innovation.\n\nDon't just build websites; build intelligent web experiences. Elevate your career and stay ahead of the curve.\n\n🔗 Enroll now and secure your spot: [Link to Course Page]\n\n#AIWebDev #WebDevelopment #AICourse #FutureOfTech #LearnAI #DeveloperSkills #TechEducation #Innovation #MachineLearning #Coding",
        mediaUrl: img_2,
        mediaType: "image",
        tone: "Professional",
        createdAt: "2026-05-13T08:25:53.718Z",
        updatedAt: "2026-05-13T08:25:53.718Z",
    },
    {
        _id: "6a032a4cc109744f2108601f",
        user: "69fd96aea59dd584d3587a1d",
        prompt: "Write a post about inflation in India in 2026.",
        content:
            "As we approach 2026, understanding India's inflation trajectory remains paramount for economic stability and growth. Projections suggest continued influence from global supply chain dynamics, energy costs, and robust domestic demand. The Reserve Bank of India's proactive monetary policies will be crucial in balancing price stability with growth imperatives. Businesses and consumers should prepare for an evolving economic landscape, prioritizing resilience and strategic financial planning.\n\n#IndiaEconomy #InflationOutlook #RBI #EconomicForecast #BusinessStrategy #FutureOfFinance #India2026",
        mediaUrl: img_3,
        mediaType: "image",
        tone: "Professional",
        createdAt: "2026-05-12T13:25:32.696Z",
        updatedAt: "2026-05-12T13:25:32.696Z",
    },
    {
        _id: "6a032883c109744f2108601e",
        user: "69fd96aea59dd584d3587a1d",
        prompt: "Create a post for launching a new shoes with comet design in white ",
        content:
            "Introducing the 'Astral White' – our revolutionary new footwear that redefines modern elegance. Crafted in pristine white, these sneakers feature an innovative comet-inspired design, symbolizing dynamic movement and groundbreaking style. Experience unparalleled comfort fused with a vision for the future of footwear. Elevate your stride. \n\nAvailable now. #AstralWhite #NewLaunch #FootwearInnovation #CometDesign #WhiteSneakers #FutureFashion #PremiumKicks #SneakerLaunch",
        mediaUrl: img_4,
        mediaType: "image",
        tone: "Professional",
        createdAt: "2026-05-12T13:17:55.385Z",
        updatedAt: "2026-05-12T13:17:55.385Z",
    },
    {
        _id: "6a0327974f32b2acd8691ae7",
        user: "69fd96aea59dd584d3587a1d",
        prompt: "Create a post for launching a new shoes with comet design",
        content:
            "We are thrilled to unveil our latest footwear innovation: The AstraGlide Collection. 🚀 Inspired by the captivating velocity and radiant trails of comets, this collection merges groundbreaking design with superior craftsmanship. Experience a shoe engineered for dynamic performance and an aesthetic that transcends the ordinary. Elevate your journey and leave your mark. Discover the AstraGlide collection now. #AstraGlide #CometInspired #FootwearInnovation #NewLaunch #PerformanceFootwear #CelestialStyle #ShoeLaunch",
        mediaUrl: "",
        tone: "Professional",
        createdAt: "2026-05-12T13:13:59.984Z",
        updatedAt: "2026-05-12T13:13:59.984Z",
    },
    {
        _id: "6a02d755869ec095b0c34e3d",
        user: "69fd96aea59dd584d3587a1d",
        prompt: 'a post for my yt video "How to create a Grocery Delivery MERN Project"',
        content:
            "🚀 New YouTube Tutorial Alert! 🚀\n\nElevate your full-stack development skills with our latest video: \"How to create a Grocery Delivery MERN Project.\" Learn to build a robust, real-world application from scratch using MongoDB, Express.js, React, and Node.js.\n\nIn this comprehensive guide, you'll gain practical skills in:\n✅ Database Schema Design\n✅ RESTful API Development\n✅ Interactive React UI Creation\n✅ Integrating essential delivery service features\n\nWhether you're looking to build your portfolio or deepen your MERN expertise, this tutorial provides clear, step-by-step instructions for creating a modern, scalable application.\n\nWatch now to kickstart your MERN project!\n[Link to YouTube Video]\n\n#MERNStack #WebDevelopment #ReactJS #NodeJS #MongoDB #ExpressJS #FullStackDeveloper #CodingTutorial #JavaScript #SoftwareDevelopment #GroceryApp #TechEducation #BuildProjects",
        mediaUrl: "",
        tone: "Professional",
        createdAt: "2026-05-12T07:31:33.338Z",
        updatedAt: "2026-05-12T07:31:33.338Z",
    },
    {
        _id: "6a02c7cf3be90e11e963460c",
        user: "69fd96aea59dd584d3587a1d",
        prompt: "create apost for ai course ",
        content:
            "Unlock your potential in the rapidly evolving world of Artificial Intelligence. Our comprehensive AI course is meticulously designed for professionals and aspiring technologists eager to master the core concepts, practical applications, and ethical considerations of AI. From machine learning fundamentals to deep learning techniques and natural language processing, you'll gain the cutting-edge skills to innovate and lead in this transformative field. Learn from industry experts and build real-world projects that elevate your career trajectory. Enroll today and shape the future with unparalleled AI expertise!\n\n#AICourse #ArtificialIntelligence #MachineLearning #DeepLearning #DataScience #TechEducation #FutureOfAI #CareerDevelopment #ProfessionalDevelopment #AIskills #Innovation #TechTraining #Upskill",
        mediaUrl: "",
        tone: "Professional",
        createdAt: "2026-05-12T06:25:19.099Z",
        updatedAt: "2026-05-12T06:25:19.099Z",
    },
    {
        _id: "6a01cae13be90e11e9634609",
        user: "69fd96aea59dd584d3587a1d",
        prompt: "A post about greeting follower on social media ",
        content:
            "A warm welcome to all our new and existing followers! We are delighted to have you join our professional community. Your engagement and support mean a great deal, and we're excited to continue sharing valuable insights, fostering meaningful discussions, and collaborating on future endeavors. Thank you for connecting with us. Let's grow together!\n\n#Welcome #ProfessionalCommunity #DigitalNetworking #EngageAndConnect #ThankYouForFollowing #BusinessInsights #SocialMediaProfessional",
        mediaUrl: "",
        tone: "Professional",
        createdAt: "2026-05-11T12:26:09.459Z",
        updatedAt: "2026-05-11T12:26:09.459Z",
    },
    {
        _id: "6a01c35d8f900740d1f3720d",
        user: "69fd96aea59dd584d3587a1d",
        prompt: "create a post a about AI now a days",
        content:
            "Artificial Intelligence is no longer a futuristic concept; it's a transformative force reshaping our world today. From powering sophisticated analytics and automating complex tasks to driving groundbreaking discoveries in science and medicine, AI's rapid evolution is undeniable. We're witnessing unprecedented opportunities for innovation, efficiency, and problem-solving across every sector.\n\nAs AI continues to integrate into our daily lives and professional landscapes, the focus shifts to responsible development, ethical implementation, and fostering human-AI collaboration. Understanding its capabilities and implications is paramount for navigating this new era effectively and harnessing its full potential for positive impact.\n\nWhat are your thoughts on the current state and future trajectory of AI?\n\n#AI #ArtificialIntelligence #Innovation #TechTrends #DigitalTransformation #FutureOfWork #EthicalAI #Technology #MachineLearning #DeepLearning",
        mediaUrl: "",
        tone: "Professional",
        createdAt: "2026-05-11T11:54:05.629Z",
        updatedAt: "2026-05-11T11:54:05.629Z",
    },
];
