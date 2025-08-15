// src/components/BlogCarousel.jsx
import React from 'react';

const posts = [
  {
    title: 'July Product Update',
    excerpt: 'What’s new this month in our roadmap and releases.',
    link: '#',
  },
  {
    title: '5 Tips for Remote Teams',
    excerpt: 'Boost collaboration and productivity when working remotely.',
    link: '#',
  },
  {
    title: 'The Future of AI',
    excerpt: 'How AI is reshaping every industry—from health to finance.',
    link: '#',
  },
];

export default function BlogCarousel() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-8">
          Latest News
        </h2>
        <div className="overflow-x-auto snap-x snap-mandatory scroll-pl-4 flex space-x-6 pb-4">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="snap-start bg-white p-6 rounded-lg shadow-md min-w-[260px]"
            >
              <h3 className="text-lg font-medium mb-2 text-gray-900">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-blue-500 hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
