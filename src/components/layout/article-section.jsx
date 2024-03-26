// Components
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/article-card";

// Assets
import { ChevronRight } from "lucide-react";

// Constants
import { ARTICLES } from "@/lib/constants";

const ArticleSection = () => {
    return (
        <div className="bg-muted py-16">
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold text-foreground">
                        Feature Articles
                    </h1>

                    <Button
                        variant="link"
                        className="h-min p-0 text-blue-700 hover:text-blue-900 hover:no-underline"
                    >
                        View all articles <ChevronRight />
                    </Button>
                </div>

                <div className="mt-8 grid grid-cols-4 grid-rows-2 gap-4">
                    {ARTICLES.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ArticleSection;
