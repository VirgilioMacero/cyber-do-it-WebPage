import NavProducts from "../components/Products/NavProducts";
import SectionProduct from "../components/Products/SectionProduct";
import design from "../components/Styles/SectionProduct.module.css";
import CardDesign from "../components/Styles/Card.module.css";

export default function Products() {
  const desing = [
    {
      id: 1,
      title: "Diseño de Logotipos e Identidad Corporativa",
      description: "BREVE DESCRIPCION",
      price: 34,
    },
    {
      id: 2,
      title: "Diseño Digital",
      description: "BREVE DESCRIPCION",
      price: "$$$",
    },
    {
      id: 3,
      title: "Diseño Web y UX/UI",
      description: "BREVE DESCRIPCION",
      price: "$$$",
    },
    {
      id: 4,
      title: "Fotografía y Edición de Imágenes",
      description: "BREVE DESCRIPCION",
      price: "$$$",
    },
    {
      id: 5,
      title: "Diseño de Empaques",
      description: "BREVE DESCRIPCION",
      price: "$$$",
    },
    {
      id: 6,
      title: "Consultoría de Diseño",
      description: "BREVE DESCRIPCION",
      price: "",
    },
    { id: 7, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
    { id: 8, title: "TITULO", description: "BREVE DESCRIPCION", price: "$$$" },
  ];
  const socialMedia = [
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
        id="SocialMedia"
        title="SOCIAL MEDIA"
        cards={socialMedia}
        className={`${design.SectionProduct} ${design.SocialMedia}`}
        classNameCard={`${CardDesign.Card} ${CardDesign.SocialMedia}`}
      />
      <SectionProduct
        id="Design"
        title="DESIGN"
        cards={desing}
        className={`${design.SectionProduct} ${design.Design}`}
        classNameCard={`${CardDesign.Card} ${CardDesign.Design}`}
      />
      <SectionProduct
        id="ITServices"
        title="IT SERVICES"
        cards={itServices}
        className={`${design.SectionProduct} ${design.ITServices}`}
        classNameCard={`${CardDesign.Card} ${CardDesign.ITServices}`}
      />
      <SectionProduct
        id="CDIPackages"
        title="CDI PACKAGES"
        cards={cdi}
        className={`${design.SectionProduct} ${design.CDIPackages}`}
        classNameCard={`${CardDesign.Card} ${CardDesign.CDIPackages}`}
      />
    </div>
  );
}
