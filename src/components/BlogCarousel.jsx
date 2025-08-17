import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const allPosts = [
  {
    id: 1,
    title: "The Future of Data Analytics",
    excerpt: "Discover the upcoming trends in data analytics and how they can benefit your business.",
    image: "/images/img_placeholder_image_1.png",
    link: "/blog/future-of-data-analytics",
    category: "Analytics",
    readTime: "5 min read",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "AI-Powered Business Intelligence",
    excerpt: "Learn how artificial intelligence is revolutionizing business intelligence and decision making.",
    image: "/images/img_placeholder_image_2.png",
    link: "/blog/ai-business-intelligence",
    category: "AI",
    readTime: "7 min read",
    date: "2024-01-12"
  },
  {
    id: 3,
    title: "Cybersecurity in the Data-Driven Era",
    excerpt: "Protect your data assets with the latest cybersecurity strategies and best practices.",
    image: "/images/img_placeholder_image.png",
    link: "/blog/cybersecurity-data-era",
    category: "Security",
    readTime: "6 min read",
    date: "2024-01-10"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies",
    excerpt: "Best practices for migrating your infrastructure to the cloud with minimal disruption.",
    image: "/images/img_placeholder_image.png",
    link: "/blog/cloud-migration-strategies",
    category: "Cloud",
    readTime: "8 min read",
    date: "2024-01-08"
  },
  {
    id: 5,
    title: "Data Governance Framework",
    excerpt: "Building comprehensive data governance policies for enterprise organizations.",
    image: "/images/img_governance.svg",
    link: "/blog/data-governance-framework",
    category: "Governance",
    readTime: "4 min read",
    date: "2024-01-05"
  },
  {
    id: 6,
    title: "Machine Learning Applications",
    excerpt: "Real-world applications of machine learning in business transformation.",
    image: "/images/img_engineering.svg",
    link: "/blog/machine-learning-applications",
    category: "ML",
    readTime: "9 min read",
    date: "2024-01-03"
  },
];

const BlogCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !isPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [emblaApi, isPlaying, isHovered]);

  return (
    <section 
      ref={ref}
      className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights & Industry Reports
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with cutting-edge insights on data analytics, AI, and digital transformation
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {allPosts.map((post, index) => (
                <div key={post.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2">
                  <motion.article
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 sm:h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Link
                        to={post.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
                      >
                        Read More
                        <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {allPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>

            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-gray-600" />
              ) : (
                <Play className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            View All Articles
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCarousel;
