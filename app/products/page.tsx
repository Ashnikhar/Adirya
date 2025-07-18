import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Products3D } from "@/components/3d/products-3d"
import { ProductsSection } from "@/components/sections/products-section"  
import ProductsImages from "@/components/products/products-images"
// import { Ash } from "@/components/ash"



export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <ProductsSection />
      <Products3D />
      <ProductsImages />
      {/* <Ash/> */}
      <Footer />
    </div>
  )
}
