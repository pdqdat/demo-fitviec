// Components
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import SearchSection from "@/components/layout/search-section";
import TopEmployerSection from "@/components/layout/top-employer-section";
import ArticleSection from "@/components/layout/article-section";

function App() {
    return (
        <>
            <Header />

            <SearchSection />
            <TopEmployerSection />
            <ArticleSection />

            <Footer />
        </>
    );
}

export default App;
