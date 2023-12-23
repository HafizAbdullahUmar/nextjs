"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Item(prop: any) {
  const { item } = prop;
  let images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
  ];
  const randomDecimal = Math.random();

  // Scale the random decimal to the desired range (1 to 11) and add 1
  const randomNumber = Math.floor(randomDecimal * 10) + 1;
  let src = images[randomNumber];
  return (
    <div className="w-48 min-h-32 bg-yellow-100 p-2">
      <p className="text-base ">{item.Description}</p>
      <div className="img-out v2">
        <Image src={src} alt="ONEE" className="img-in" fill={true} />
      </div>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/c/api/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data.data.entries);
      console.log("My data", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-evenly w-full flex-wrap gap-6">
        {data && data.map((item, index) => <Item key={index} item={item} />)}
      </div>
    </main>
  );
}
