import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

interface CardProps {
  src: string;
  href: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ src, href, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 mt-10 bg-gray-300 rounded-lg cursor-pointer md:mt-20 hover:bg-gray-200 md:h-40 transition">
        <motion.img src={src} className="w-full h-full" layoutId={layoutId} />
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <h1 className="mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-800 sm:text-6xl md:mt-16 ">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className="w-full grid gap-4 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
        <Card src="/img/nextjs.svg" href="/nextjs" layoutId="nextjs-logo" />
        <Card
          src="/img/tailwind.svg"
          href="/tailwindcss"
          layoutId="tailwind-logo"
        />
        <Card
          src="/img/framermotion.svg"
          href="/framermotion"
          layoutId="framermotion-logo"
        />
      </div>
    </>
  );
}
