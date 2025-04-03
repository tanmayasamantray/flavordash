import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#FE724C] py-10 my-4 rounded-md">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link to={"/"} className="text-3xl font-bold tracking-tight text-white mx-10">FlavourDash</Link>
                <span className="text-white tracking-tight flex font-bold gap-4 mx-10">
                    <span className="cursor-pointer">Privacy Policy</span>
                    <span className="cursor-pointer">Terms of Service</span>
                </span>
            </div>
        </div>
    );
};

export default Footer;