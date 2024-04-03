// Components
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Assets
import CardBackgroundSVG from "@/assets/bg-top-emp.svg";
import { ChevronRight } from "lucide-react";

const JobCard = ({ employer }) => {
    const { name, logo, skillRequired, location, numOfJobs } = employer;

    return (
        <Card className="bg-white p-2 m-2 flex flex-col rounded-lg relative">

            <CardContent>
                <div class="ipy-2">
                    <div class="flex items-center justify-between relative">
                        <span class="text-sm text-dark-grey" style={{ color: "darkgrey" }}>
                            Posted
                            5 hours ago
                        </span>
                    </div>
                    <h3 class="flex items-center justify-between relative mt-3 text-black font-bold"  >
                        Senior Maximo Engineer
                    </h3>
                </div>
            </CardContent>

            <CardContent>
                <div className="my-3 flex items-center">
                    <a target="_blank" title="" data-controller="utm-tracking tooltip" data-action="mouseover->tooltip#showTooltip click->tooltip#disposeTooltip" className="bg-white logo-employer-card" href="/companies/hsc?lab_feature=preview_jd_page" data-bs-original-title="Ho Chi Minh City Securities Corporation (HSC)">
                        <picture>
                            <source data-srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNEszTWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aeb63863939fc3f134b9ad60cdeb91c87b943e73/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcGFXbHAiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--20b0435834affc851fb8b496383cefc8135158a8/hsc-logo@3x.png" type="image/png" />
                            <img alt="HSC Vietnam Small Logo" className="rounded border-solid shadow-md lazyload" data-src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNEszTWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aeb63863939fc3f134b9ad60cdeb91c87b943e73/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/hsc-logo@3x.png" height="48" width="48" />
                        </picture>
                    </a>
                    <span className="ml-2 text-sm">
                        <a target="_blank" data-controller="utm-tracking" className="text-gray-600" href="/companies/hsc?lab_feature=preview_jd_page">HSC</a>
                    </span>
                </div>


            </CardContent>

            <CardContent>
                <div class="flex items-center mt-1 text-sm">
                    <svg fill="none" height="16" viewBox="0 0 24 25" width="16" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_947_6633)">
                            <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                        </g>
                        <defs>
                            <clipPath id="clip0_947_6633">
                                <rect fill="white" height="24" transform="translate(0 0.5)" width="24"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="p-2 text-black">
                        Hybrid
                    </span>
                </div>
            </CardContent>

            <CardContent>
                <div className="flex items-center text-black mt-1">
                    <svg className="w-4 h-4 fill-current mr-1">
                        <use href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#map-pin"></use>
                    </svg>
                    <span className="mt-0.5 text-sm text-black">
                        Ho Chi Minh
                    </span>
                </div>

            </CardContent>

            <CardContent>
                <div className="mt-3 mb-2">


                    <div className="flex items-center itag itag-light itag-sm">
                        {skillRequired.map((skill, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="text-sm font-normal"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    {/* <Badge variant="secondary" className="text-sm font-normal">
                        Java
                    </Badge> */}
                </div>
            </CardContent>


            <CardFooter className="flex justify-between bg-muted py-5">
                <h1 className="text-sm">{location}</h1>

                <Button
                    variant="link"
                    size="sm"
                    className="h-min p-0 text-foreground hover:no-underline"
                >
                    {numOfJobs} Jobs <ChevronRight />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
