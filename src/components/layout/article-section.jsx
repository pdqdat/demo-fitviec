// Components
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

// Assets
import { ChevronRight } from "lucide-react";

const ArticleSection = () => {
    return (
        <div className="bg-muted py-16">
            <Container className="">
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
            </Container>
        </div>
    );
};

export default ArticleSection;
