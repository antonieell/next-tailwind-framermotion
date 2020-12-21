import { motion } from "framer-motion";
import Link from "next/link";

const NextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.img src="/img/nextjs.svg" layoutId="nextjs-logo" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="px-6 py-3 text-lg font-semibold bg-gray-900 text-gray-50 rounded-xl hover:bg-gray-700 transition">
            Voltar para home
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default NextPage
