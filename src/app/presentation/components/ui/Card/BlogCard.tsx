import { motion } from 'framer-motion';
import Image from 'next/image';
import './BlogCard.scss';

type Props = {
  imgUrl: string;
  onClick?: () => void;
};

export default function BlogCard({ imgUrl, onClick }: Props) {
  return (
    <motion.div
      className="blog-card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <Image
        alt="Blog thumbnail"
        src={imgUrl}
        className="rounded shadow-sm"
        width={260}
        height={200}
      />
    </motion.div>
  );
}
