const brands = [
  { name: "amazon", imageUrl: "/images/logos/amazon.png" },
  { name: "google", imageUrl: "/images/logos/google.png" },
  { name: "slack", imageUrl: "/images/logos/slack.png" },
  { name: "treehouse", imageUrl: "/images/logos/treehouse.png" },
  { name: "microsoft", imageUrl: "/images/logos/microsoft.png" },
];

const Brand = () => {
  return (
    <div className="section_padding flex justify-center items-center flex-wrap">
      {brands.map((brand, i) => (
        <div
          key={i}
          className="flex flex-1 min-w-[120px] max-w-[150px] m-4 justify-center items-center"
        >
          <img src={brand.imageUrl} alt={brand.name} />
        </div>
      ))}
    </div>
  );
};

export default Brand;
