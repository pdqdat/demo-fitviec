// Components
import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";

const ArticleCard = ({ article }) => {
    const { image, title, description, bigCover } = article;

    return (
        <div className={bigCover && "col-start-1 col-end-3 row-span-2"}>
            <div className="h-full overflow-hidden rounded-lg bg-card">
                <img src={image} alt={title} className="object-contain" />

                <div className="p-3">
                    <h1
                        className={
                            bigCover ? "text-lg font-bold" : "font-medium"
                        }
                    >
                        {title}
                    </h1>

                    {description && (
                        <h1 className="mt-2 text-muted-foreground">
                            {description}
                        </h1>
                    )}

                    <Button
                        variant="link"
                        className={`${bigCover ? "mt-14" : "mt-3"} h-min p-0 text-blue-700 hover:text-blue-900 hover:no-underline`}
                    >
                        Start reading <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
