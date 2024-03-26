import { useEffect, useState } from "react";

// Assets
import Logo from "../../assets/logo-itviec.webp";
import { ChevronDown } from "lucide-react";

// Components
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <header
            className={`fixed z-10 flex w-full items-center justify-between border-b-2 border-muted-foreground bg-linear-gradient px-8 2xl:px-40 ${isActive ? "h-[60px]" : "h-[88px]"}`}
        >
            <div className="flex space-x-6">
                <img src={Logo} alt="Logo" className="w-[108px]" />

                <Menubar className="border-transparent bg-transparent text-lg">
                    <MenubarMenu>
                        <MenubarTrigger>
                            All Jobs <ChevronDown />
                        </MenubarTrigger>

                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger>
                                    Jobs by Skill
                                </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>
                                        View all Jobs by by skill
                                    </MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>

                            <MenubarSeparator />

                            <MenubarSub>
                                <MenubarSubTrigger>
                                    Jobs by Title
                                </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>
                                        View all Jobs by by title
                                    </MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>

                            <MenubarSeparator />

                            <MenubarSub>
                                <MenubarSubTrigger>
                                    Jobs by Company
                                </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>
                                        View all Jobs by by company
                                    </MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>

                            <MenubarSeparator />

                            <MenubarSub>
                                <MenubarSubTrigger>
                                    Jobs by City
                                </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Ho Chi Minh</MenubarItem>
                                    <MenubarItem>Ha Noi</MenubarItem>
                                    <MenubarItem>Da Nang</MenubarItem>
                                    <MenubarItem>Others</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>

                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger>
                            IT Companies <ChevronDown />
                        </MenubarTrigger>

                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger>
                                    Vietnam Best IT Companies
                                </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>
                                        Best IT Companies 2024
                                    </MenubarItem>
                                    <MenubarItem>
                                        Best IT Companies 2023
                                    </MenubarItem>
                                    <MenubarItem>
                                        Best IT Companies 2022
                                    </MenubarItem>
                                    <MenubarItem>
                                        Best IT Companies 2021
                                    </MenubarItem>
                                    <MenubarItem>
                                        Best IT Companies 2020
                                    </MenubarItem>
                                    <MenubarItem>
                                        Best IT Companies 2019
                                    </MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>

                            <MenubarSeparator />

                            <MenubarItem>Company Review</MenubarItem>

                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger>
                            Blog <ChevronDown />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger>
                                    IT Salary Report
                                </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>
                                        IT Salary Report 2023-2024
                                    </MenubarItem>
                                    <MenubarItem>
                                        IT Salary Report 2022-2023
                                    </MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>

                            <MenubarSeparator />

                            <MenubarItem>IT Career</MenubarItem>

                            <MenubarSeparator />

                            <MenubarItem>Applying & Career Up</MenubarItem>

                            <MenubarSeparator />

                            <MenubarItem>IT Expertise</MenubarItem>

                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>

            <ul className="flex space-x-6">
                <li>
                    <Button
                        variant="link"
                        className="h-min p-0 text-white hover:no-underline"
                    >
                        For Employers
                    </Button>
                </li>

                <li>
                    <Button
                        variant="link"
                        className="h-min p-0 text-white hover:no-underline"
                    >
                        Sign in/Sign up
                    </Button>
                </li>

                <li className="flex space-x-3 p-0">
                    <Button
                        variant="link"
                        className="h-min p-0 text-white hover:no-underline"
                    >
                        EN
                    </Button>

                    <Separator orientation="vertical" />

                    <Button
                        variant="link"
                        className="h-min p-0 text-muted-foreground hover:no-underline"
                    >
                        VI
                    </Button>
                </li>
            </ul>
        </header>
    );
};

export default Header;
