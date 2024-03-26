import { Separator } from "@/components/ui/separator";
import Container from "@/components/layout/container";

const Footer = () => {
    return (
        <footer className="bg-linear-gradient">
            <Container>about us...</Container>

            <Separator />

            <Container>
                <h3 className="text-muted-foreground text-center py-2">
                    Copyright &copy; FIT VIEC SJC
                </h3>
            </Container>
        </footer>
    );
};

export default Footer;
