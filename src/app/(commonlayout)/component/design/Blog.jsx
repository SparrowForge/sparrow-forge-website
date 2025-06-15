import React from 'react';
import SharedCard from '../card/SharedCard';

const data = [
  {
    id: 1,
    heading: "Why Hire a Healthcare FCMO for Your B2B SaaS Business?",
    description: "B2B healthcare SaaS companies have a lot to juggle in terms of product development, sales, and customer support, and ...",
    date: "Mar 22, 2025",
    image: "/blog/1.svg",
  },
  {
    id: 2,
    heading: "Why Hire a Healthcare FCMO for Your B2B SaaS Business?",
    description: "B2B healthcare SaaS companies have a lot to juggle in terms of product development, sales, and customer support, and ...",
    date: "Mar 22, 2025",
    image: "/blog/2.svg",
  },
  {
    id: 3,
    heading: "Why Hire a Healthcare FCMO for Your B2B SaaS Business?",
    description: "B2B healthcare SaaS companies have a lot to juggle in terms of product development, sales, and customer support, and ...",
    date: "Mar 22, 2025",
    image: "/blog/3.svg",
  },
  {
    id: 4,
    heading: "Why Hire a Healthcare FCMO for Your B2B SaaS Business?",
    description: "B2B healthcare SaaS companies have a lot to juggle in terms of product development, sales, and customer support, and ...",
    date: "Mar 22, 2025",
    image: "/blog/4.svg",
  },
];

const Blog = () => {
  return (
   <div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data.map((item) => (
        <SharedCard
          key={item.id}
          image={item.image}
          heading={item.heading}
          description={item.description}
          date={item.date}
        />
      ))}
    </div>
   </div>
  );
};

export default Blog;
