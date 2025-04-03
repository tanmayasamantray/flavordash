import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div>
      <div className="border-b-2 py-6 border-[#D7D7D7]">
        <div className="container mx-auto flex justify-between items-center px-8">
            <Link to={"/"} className="text-3xl font-bold tracking-tight text-[#FE724C]">FlavourDash🏃‍➡️</Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
