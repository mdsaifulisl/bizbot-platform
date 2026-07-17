import NewsletterSection from "@/components/common/Newsletter";
import BlogGrid from "@/components/public/blog/BlogGrid";
import BlogHero from "@/components/public/blog/BlogHero"
export default function Blog() {
   return (
      <div className="p-8 pt-0">
          <BlogHero />
          
          <BlogGrid />
          <NewsletterSection />
      </div>
    );
  } 