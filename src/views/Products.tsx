import NavProducts from "../components/Products/NavProducts";
import SectionProduct from "../components/Products/SectionProduct";

export default function Products() {
  const desing = [
    { id: 1, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 2, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 3, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 4, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 5, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 6, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 7, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 8, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
  ];
  const itServices = [
    { id: 1, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 2, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 3, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 4, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 5, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 6, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 7, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 8, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
  ];
  const cdi = [
    { id: 1, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 2, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 3, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
  ];
  return (
    <div className="">
      <NavProducts />
      <SectionProduct
        title="SOCIAL MEDIA"
        cards={desing}
        className="bg-gradient-to-r from-purple-700 to-purple-900"
        classNameCard="bg-gradient-to-b from-purple-400 to-purple-600 p-4"
      />
      <SectionProduct
        title="DESIGN"
        cards={desing}
        className="bg-gradient-to-r from-purple-700 to-purple-900"
        classNameCard="bg-gradient-to-b from-purple-400 to-purple-600 p-4"
      />
      <SectionProduct
        title="IT SERVICES"
        cards={itServices}
        className="bg-gradient-to-r from-blue-700 to-blue-900"
        classNameCard="bg-gradient-to-b from-blue-400 to-blue-600 p-4"
      />
      <SectionProduct
        title="CDI PACKAGES"
        cards={cdi}
        className="bg-gradient-to-r from-gray-700 to-gray-900"
        classNameCard="bg-gradient-to-b from-gray-400 to-gray-600 p-4"
      />
    </div>
  );
}
