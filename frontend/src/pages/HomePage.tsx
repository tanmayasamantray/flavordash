import FeedBack from "@/components/FeedBack";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12 mx-25">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-[#FE724C]">
                    Food is just a dash away
                </h1>
                <span className="text-xl text-[#272D2F]">One stop solution to all cravings!</span>
            </div>
            <FeedBack />
        </div>
    );
};

export default HomePage;