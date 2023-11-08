import MaterialIcon from "../../common/MaterialIcon";
import useFetch from "../../hooks/useFetch";
import { Product } from "../../interfaces/Data";

export default function HomePage() {
  const [data, loading] = useFetch<Product[]>(
    "https://fakestoreapi.com/products"
  );

  return (
    <>
      {loading ? (
        <div className="h-screen justify-center items-center text-5xl italic text-teal-600">
          Loading
        </div>
      ) : (
        data.map((p, i) => (
          <div key={i} className="flex items-center gap-x-3">
            <MaterialIcon codepoint="e8b8" />
            <p>{p.title}</p>
          </div>
        ))
      )}
    </>
  );
}