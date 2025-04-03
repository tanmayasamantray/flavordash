import { useEffect, useState } from "react";
import AutoPlay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

interface Feedback {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

const FeedBack = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments?limit=10"); // Replace with actual API
        const data = await response.json();

        // Extract "comments" array from response
        if (data && Array.isArray(data.comments)) {
          setFeedback(data.comments);
        } else {
          console.error("Unexpected API response format:", data);
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="bg-gray-50 rounded-md flex flex-col text-center p-6 shadow-md">
      <h1 className="text-4xl font-bold text-[#FE724C] mb-4">We love to hear from you</h1>
      {feedback.length > 0 ? (
        <Carousel
          plugins={[
            AutoPlay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {feedback.map((item) => (
              <CarouselItem key={item.id} className="p-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                  <p className="font-semibold text-lg">{item.user.fullName}</p>
                  <p className="font-semibold text-lg">@{item.user.username}</p>
                  <p className="text-sm italic">"{item.body}"</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <p className="text-gray-500">Loading feedback...</p>
      )}
    </div>
  );
};

export default FeedBack;
