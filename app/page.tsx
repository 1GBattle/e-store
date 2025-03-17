import ProductListComponent from "@/app/components/ProductList.Component";
import Nav from "@/app/components/Nav.Component";

export default function Home() {
  return (
    <div>
      <Nav />
      <ProductListComponent />
    </div>
  );
}
