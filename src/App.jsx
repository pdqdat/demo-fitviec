// Components
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import SearchSection from "./components/layout/search-form";

function App() {
    return (
        <>
            <Header />

            <SearchSection />
            <Container>
                <main>
                    <h1>Top Employers</h1>
                    <div className="h-10 w-10"></div>
                </main>
            </Container>

            <Footer />
        </>
    );
}

export default App;
