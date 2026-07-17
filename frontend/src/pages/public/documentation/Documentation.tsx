import DocumentationCategory from "@/components/public/documentation/DocumentationCategory";
import DocumentationContent from "@/components/public/documentation/DocumentationContent";
import DocumentationHero from "@/components/public/documentation/DocumentationHero";


export default function Documentation() { 
    return (
        <div className="p-8 pt-0">
            <DocumentationHero />
            <DocumentationCategory />
            <DocumentationContent />
        </div>
    );
 }