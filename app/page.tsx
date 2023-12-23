import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>HIIIIIIIIII</p>
      <div className="img-wrap">
        <div className="img-out">
          <Image src="/one.jpeg" alt="ONEE" className="img-in" fill={true} />
        </div>
        <div className="img-out">
          <Image src="/two.jpg" alt="ONEE" className="img-in" fill={true} />
        </div>
        <div className="img-out">
          <Image src="/three.jpeg" alt="ONEE" className="img-in" fill={true} />
        </div>
        <div className="img-out">
          <Image src="/four.jpg" alt="ONEE" className="img-in" fill={true} />
        </div>
        <div className="img-out">
          <Image src="/five.jpg" alt="ONEE" className="img-in" fill={true} />
        </div>
      </div>
    </main>
  );
}
