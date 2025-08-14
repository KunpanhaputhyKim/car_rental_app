import Title from "./Title";
import { assets } from "../assets/assets";
import CarCard from "./CarCard";
import useAppStore from "../store/useAppStore";

// Featured Section Component
const FeaturedSection = () => {
  // Get the navigation function and cars from the app store
  const navigate = useAppStore((state) => state.navigate);
  const cars = useAppStore((state) => state.cars);
  const hasCars = Array.isArray(cars) && cars.length > 0;

  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div>
        <Title
          title="Featured Vehicles"
          subTitle="Explore our selection of premium vehicles available for your next adventure."
        />
      </div>

      {hasCars ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
            {cars.slice(0, 6).map((car) => (
              <div key={car._id}>
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              navigate("/cars");
              scrollTo(0, 0);
            }}
            className="mt-18 flex items-center justify-center gap-2 px-6 py-2 border border-borderColor bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer"
          >
            Explore all cars <img className="filter-[brightness(0)_invert(1)]" src={assets.arrow_icon} alt="arrow" />
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <p className="text-xl font-medium text-gray-500">
            No featured cars available
          </p>
          <button
            onClick={() => {
              navigate("/cars");
              scrollTo(0, 0);
            }}
            className="mt-4 flex items-center justify-center gap-2 px-6 py-2 border border-borderColor bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer"
          >
            Browse all cars
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedSection;
