import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Menu className="text-[#FE724C] cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="space-y-3">
                    <SheetTitle className="flex justify-center text-xl"><span className="py-4">Welcome to FlavourDash</span></SheetTitle>
                    <Separator />
                    <SheetDescription className="flex">
                        <Button className="flex-1 font-bold bg-[#FE724C] cursor-pointer hover:bg-[#272D2F]">Log In</Button>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;