// src/pages/BlogPage.jsx
import React from 'react';

const posts = [
  {
    title: 'The Future of Data Analytics',
    excerpt:
      'Discover the upcoming trends in data analytics and how they can benefit your business.',
    image: '/images/img_placeholder_image_1.png',
    link: '#',
  },
  {
    title: 'AI-Powered Business Intelligence',
    excerpt:
      'Learn how artificial intelligence is revolutionizing business intelligence and decision making.',
    image: '/images/img_placeholder_image_2.png',
    link: '#',
  },
  {
    title: 'Cybersecurity in the Data-Driven Era',
    excerpt:
      'Protect your data assets with the latest cybersecurity strategies and best practices.',
    image: '/images/img_placeholder_image_3.png',
    link: '#',
  },
  {
    title: 'The Rise of Data Governance',
    excerpt: 'Understand the importance of data governance and how to implement it effectively.',
    image: '/images/img_placeholder_image.png',
    link: '#',
  },
  {
    title: 'Cloud-Native Data Platforms',
    excerpt: 'Explore the benefits of building your data platform on a cloud-native architecture.',
    image: '/images/img_placeholder_image.png',
    link: '#',
  },
  {
    title: 'Data Mesh: A New Paradigm',
    excerpt:
      'Learn about the principles of data mesh and how it can help you scale your data architecture.',
    image: '/images/img_placeholder_image.png',
    link: '#',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">All Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={post.link} className="text-blue-500 hover:underline font-semibold">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
