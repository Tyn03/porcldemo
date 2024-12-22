"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import den from "../../../../public/background/den.jpg";
import pi from "../../../../public/background/pi.jpg";
import lqd from "../../../../public/background/lqd.jpeg";
import insaCVL from "../../../../public/background/insacvl.jpg";

export default function Home() {
  return (
    <>
    <Image
            src={den}
            alt="Next.js Portfolio website's about page background image"
            className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-100"
            priority
            sizes="100vw"
          />
      {/* Wrapper để cuộn */}
      <div className=" relative w-full min-h-screen  text-white ">
        {/* Nội dung chính */}
        <div className="absolute h-auto w-full flex flex-col items-center px-4  space-y-32 pt-16 pb-16">
          {/* Phần giới thiệu */}
          <section id="about" className="w-full max-w-5xl space-y-8 font-semibold">
            <motion.h1
              className="text-5xl font-bold text-white"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Know Who <span className="text-blue-500">I'M</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed justify-center font-semibold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi Everyone, I am <span className="text-blue-400">DO Uy Khang</span> from{" "}
              <span className="text-blue-400">VietNam</span>.
              <br />
              I am currently student at 4th INSA Centre Val de Loire, Bourges, Cher,
              France.
              <br />
              <br />
              My actual study field is software engineer, Cyber Security Information.
              I have a passion for building innovative software solutions that
              make an impact. When I'm not coding, you can find me exploring
              new technologies, reading book, or playing video games.
              Along both university and personal projects, I’ve picked up a range of skills—using  Node.js, ,
               React,  Next.js for development,Docker for deployment, 
              and even getting a taste of cybersecurity.
              
              
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-xl text-white mb-4">
                Apart from coding, some other activities that I love to do!

              </h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span>🎮</span>
                  <span>Playing Games</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✍️</span>
                  <span>Reading book</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✈️</span>
                  <span>Travelling</span>
                </li>
              </ul>
            </motion.div>
          </section>

          {/* Phần kinh nghiệm */}
          <section id="experience" className="w-full max-w-5xl">
            <motion.h2
              className="text-3xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }} // Chỉ hiện khi cuộn đến 50% vùng nhìn thấy
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center w-full my-8">
                <motion.div
                  className="flex-grow border-t border-gray-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0 }} // Khi 25% phần tử vào viewport thì sẽ kích hoạt hiệu ứng
                />
                <span className="mx-4 text-gray-300 text-5xl">Experience</span>
                <motion.div
                  className="flex-grow border-t border-gray-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0 }} // Kích hoạt hiệu ứng khi 25% phần tử vào viewport
                />
              </div>


            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  rounded-lg p-6">
              {/* Cột trái */}
              <motion.div
                className="sm:col-span-1 border-r border-gray-700 pr-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white">SARL BIWA</h3>
                <p className="text-sm text-gray-400">Savoie,France</p>
                <hr className="my-4 border-gray-600" />
                <p className="text-sm text-gray-400">6/2024 - 7/2024</p>
              </motion.div>

              {/* Cột phải */}
              <motion.div
                className="sm:col-span-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
              >
                <ul className="list-disc list-inside text-gray-300 space-y-2 font-semibold">
                  
                  <li>Creation of a pipeline that will allow the deployment of the application on JIRA via Atlassian Forge.</li>
                  <li>Development of the application screens, using the Jira APIs in backend, the Forge framework, React.JS</li>
                </ul>
                <hr className="my-4 border-gray-600" />
                <div className="relative h-48 w-full">
                  <Image
                    src={pi} // Thay thế đường dẫn bằng ảnh thực tế
                    alt="Le Mustang Troyes"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-4 font-semibold">
                  A project where I contributed to create products for customers, ensuring better performance and
                  scalability.
                </p>
              </motion.div>
            </div>
          </section>


          <section id="education" className="w-full max-w-5xl">
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }} // Chỉ hiện khi cuộn đến 50% vùng nhìn thấy
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center w-full my-8">
                <motion.div
                  className="flex-grow border-t border-gray-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0 }} // Khi 25% phần tử vào viewport thì sẽ kích hoạt hiệu ứng
                />
                <span className="mx-4 text-gray-300">Education</span>
                <motion.div
                  className="flex-grow border-t border-gray-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0 }} // Kích hoạt hiệu ứng khi 25% phần tử vào viewport
                />
              </div>


            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  rounded-lg p-6">
              {/* Cột trái */}
              <motion.div
                className="sm:col-span-1 border-r border-gray-700 ml-32 relative space-y-12 "
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
              >
                
               
                <div className="relative h-16 w-2/3">
                  <Image
                    src={insaCVL} // Thay thế đường dẫn bằng ảnh thực tế
                    alt="Le Mustang Troyes"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-16 w-2/3">
                  <Image
                    src={lqd} // Thay thế đường dẫn bằng ảnh thực tế
                    alt="Le Mustang Troyes"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Cột phải */}
              <motion.div
                className="sm:col-span-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
              >
                
                
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-1xl space-y-8">
                  
                <p>INSA Centre Val de Loire <br />
                        Master Degree, Computer Security & Technologies <br />
                        Sep 2020 - present</p>

                        <p>Le Quy Don High School <br />
                    High School Diploma, Physic Student <br/>
                    Sep 2017 - Jul 2020 </p>
                </ul>
                
                
              </motion.div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
