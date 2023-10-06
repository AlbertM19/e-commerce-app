import { useStoreContext } from '../contexts/StoreContext'

import ProductCard from '../Pages/ProductCard'

function ProductLayout() {
  const { products } = useStoreContext()

  return (
    <div className="product-layout">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductLayout