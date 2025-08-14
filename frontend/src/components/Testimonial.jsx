import Title from "./Title";
import { assets } from "../assets/assets";

// Testimonial Component
const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily Carter",
      location: "London, United Kingdom",
      image: assets.testimonial_image_1,
      testimonial:
        "Smooth pickup and drop-off, great selection of cars, and no hidden fees. I’ll definitely be booking again!",
    },
    {
      name: "Hannah Thompson",
      location: "Chicago, USA",
      image: assets.testimonial_image_2,
      testimonial:
        "The whole process was stress-free, and the vehicle was in top condition. Great value and service!",
    },
    {
      name: "Isabelle Martin",
      location: "Paris, France",
      image: assets.testimonial_image_1,
      testimonial:
        "Impressed by how easy it was to book online. The team was professional and the car exceeded expectations.",
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why drivers around the world choose SafeRental for their premium car rental experience."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
