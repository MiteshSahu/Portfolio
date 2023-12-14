import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import docker from "../assets/docker.png";
import springboot from "../assets/springboot.png";
import mysql from "../assets/mysql.png";
import postgres from "../assets/postgres.png";
import mongodb from "../assets/mongodb.jpg";
import airflow from "../assets/airflow.png";
import spark from "../assets/spark.png";
import python from "../assets/python.jpeg";
import figma from "../assets/figma.png";
import kubernetes from "../assets/kubernetes.png";
import firebase from "../assets/firebase.png"

function Experience() {
    const techs = [

        {
            id: 1,
            src: java,
            title: "Java",
            style: "shadow-gray-400",
        },
        {
            id: 2,
            src: springboot,
            title: "springboot",
            style: "shadow-green-400",
        },
    
        {
            id: 6,
            src: spark,
            title: "Apache Spark",
            style: "shadow-blue-400",
        },
        {
            id: 6,
            src: python,
            title: "Python",
            style: "shadow-blue-400",
        }

    ];

    const techs2 = [
        {
            id: 6,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 7,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 8,
            src: javascript,
            title: "javascript",
            style: "shadow-yellow-500",
        },
        {
            id: 9,
            src: figma,
            title: "Figma",
            style: "shadow-blue-600",
        },
    ]

    const techs3 = [
        {
            id: 1,
            src: mysql,
            title: "MYSQL",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: postgres,
            title: "POSTGRESQL",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: mongodb,
            title: "MONGODB",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-500",
        }
    ]
    const tech4 = [
         {
                id: 1,
                src: docker,
                title: "Docker",
                style: "shadow-green-400",
            },
            {
            id: 2,
            src: airflow,
            title: "Apache Airflow",
            style: "shadow-gray-400",
        },
        {
            id: 3,
            src: github,
            title: "Github",
            style: "shadow-gray-400",
        },
        {
            id: 4,
            src: kubernetes,
            title: "Kubernetes",
            style: "shadow-gray-400",
        },
        
    ]
    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-max-content mx-auto h-max-content"
        >
            <div
                className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <h1>Backend Technologies</h1>
                <div
                    className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({id, src, title, style}) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>

                <h1>Fronted Technologies</h1>
                <div
                    className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs2.map(({id, src, title, style}) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>

                <h1>Databases</h1>
                <div
                    className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs3.map(({id, src, title, style}) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
                <h1>Familiar With</h1>
                <div
                    className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {tech4.map(({id, src, title, style}) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Experience;
