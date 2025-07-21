'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BlogCard } from '../Card';
import './ListBlog.scss';

type BlogItem = {
  id: string;
  title: string;
  imgUrl: string;
};

type BlogSection = {
  sectionTitle: string;
  blogs: BlogItem[];
};

type Props = {
  data: BlogSection[];
};

export default function BlogList({ data }: Props) {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="blog-list">
      {data.map((section, sectionIndex) => (
        <motion.div
          key={section.sectionTitle}
          className="mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-3 title title-lg">{section.sectionTitle}</h2>

          <div className="row g-3">
            {section.blogs.map((blog, blogIndex) => (
              <motion.div
                key={blog.id}
                className="col-12 col-sm-6 col-md-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: blogIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard imgUrl={blog.imgUrl} onClick={() => handleNavigate(blog.id)} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
