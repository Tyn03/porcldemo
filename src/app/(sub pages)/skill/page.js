"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import den from "../../../../public/background/den.jpg"
const WordCloud = () => {
    
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/tagcanvas.js"; // Đảm bảo tệp này nằm trong thư mục public
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.TagCanvas) {
        try {
          // Cấu hình và khởi chạy TagCanvas
          window.TagCanvas.Start("myCanvas", "tags", {
            textColour: "#FF4500", // Màu mặc định
            outlineColour: "transparent", // Không viền
            reverse: true,
            depth: 1,
            maxSpeed: 0.03, // Tốc độ quay khi có chuột
            freezeActive: false,
            initial: [0.1, -0.1], // Hướng xoay mặc định
            wheelZoom: false,
            shuffleTags: true,
            zoom: 1,
            pinchZoom: true,
            fadeIn: 1000,
            clickToFront: 600,
            shape: "sphere",
            weight: true,
            weightMode: "both",
            weightSize: 1.5, // Tăng kích thước chữ (giá trị lớn hơn)
            weightFrom: "data-weight",
            interval: 20, // Điều chỉnh tốc độ quay khi không có chuột
            txtSelected: "#32CD32", // Màu xanh lá cây khi hover
            activeColour: "#32CD32", // Màu xanh lá cây khi di chuột qua
          });

          // Thêm sự kiện để dừng hoặc kích hoạt xoay khi có chuột
          const canvas = document.getElementById("myCanvas");

          canvas.addEventListener("mouseenter", () => {
            window.TagCanvas.SetSpeed("myCanvas", [0.1, -0.1]); // Tốc độ khi có chuột
          });

          canvas.addEventListener("mouseleave", () => {
            window.TagCanvas.SetSpeed("myCanvas", [0.05, 0.05]); // Tốc độ quay mặc định
          });
        } catch (e) {
          console.error("TagCanvas error", e);
        }
      } else {
        console.error("TagCanvas is not defined.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
        <Image
                src={den}
                alt="Next.js Portfolio website's about page background image"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-100"
                priority
                sizes="100vw"
              />
        <p className=" -z-50 mt-4 text-lg leading-relaxed text-gray-50">
          I have a strong foundation in both development and operations, with expertise in full-stack web development, 
          data structures, and object-oriented programming (OOP). I specialize in building scalable web applications, 
          designing efficient algorithms, and writing clean, modular, and reusable code. My skill set spans full-stack, devops, 
          and I am committed to staying updated with the latest technologies to tackle complex challenges effectively.


          </p>
        <div className="flex justify-center items-center h-[600px] w-[600px] mx-auto relative">
        
        <canvas id="myCanvas" className="w-[700px] h-[500px]">
          <ul id="tags" className="hidden">
            <li>
              <a href="#" data-weight="9">
                React
              </a>
            </li>
            <li>
              <a href="#" data-weight="8">
                Next.js
              </a>
            </li>
            <li>
              <a href="#" data-weight="10">
                JavaScript
              </a>
            </li>
            <li>
              <a href="#" data-weight="7">
                CSS
              </a>
            </li>
            <li>
              <a href="#" data-weight="12">
                Java
              </a>
            </li>
            <li>
              <a href="#" data-weight="6">
                C
              </a>
            </li>
            <li>
              <a href="#" data-weight="11">
                Express.js
              </a>
            </li>
            <li>
              <a href="#" data-weight="8">
                Tailwind
              </a>
            </li>
            <li>
              <a href="#" data-weight="10">
                Node.js
              </a>
            </li>
            <li>
              <a href="#" data-weight="10">
                Python
              </a>
            </li>
            <li>
              <a href="#" data-weight="9">
                MongoDB
              </a>
            </li>
            <li>
              <a href="#" data-weight="10">
                Postgre SQL
              </a>
            </li>
            <li>
              <a href="#" data-weight="7">
                Git
              </a>
            </li>
            <li>
              <a href="#" data-weight="9">
                Linux
              </a>
            </li>
            <li>
              <a href="#" data-weight="9">
                Github
              </a>
            </li>
          </ul>
        </canvas>
      </div>
    </>
    
  );
};

export default WordCloud;
