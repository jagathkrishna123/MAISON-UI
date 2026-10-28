
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) return <p className="p-10">Product not found.</p>;

  return (
    <main className="min-h-screen bg-[#F5EBD0] px-6 py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">

        <img
          src={product.image}
          alt={product.name}
          className="h-[450px] w-full rounded-2xl object-cover"
        />

        <div>
          <Link to="/collections" className="text-sm text-[#7F011F]/60">
            ← Back to collections
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#7F011F]/60">
            {product.category}
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#7F011F]">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <p className="text-2xl font-semibold text-[#7F011F]">
              ₹{product.offerPrice.toLocaleString("en-IN")}
            </p>
            <p className="text-gray-500 line-through">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </div>

          <p className="mt-6 leading-7 text-[#7F011F]/75">
            A timeless addition to your wardrobe. Discover effortless
            style, considered details, and everyday comfort with MAISON.
          </p>

          <button className="mt-8 w-full bg-[#7F011F] py-4 text-sm uppercase tracking-widest text-[#F5EBD0] transition hover:bg-[#5D0016]">
            Add to Bag
          </button>

          <p className="mt-4 text-center text-xs text-[#7F011F]/50">
            Timeless style. Made for everyday.
          </p>
        </div>

      </div>
    </main>
  );
}

export default ProductDetails;
