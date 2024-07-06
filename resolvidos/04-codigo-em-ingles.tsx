// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ListProductFiltered() {
  const [filteredProductsByQuery, setFilteredProductsByQuery] = useState<Product[]>([])

  function searchProduct(search: string) {
    const filteredProductsByQuery = productList.filter(product => product.title.includes(search))

    setFilteredProductsByQuery(filteredProductsByQuery)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {filteredProductsByQuery.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}


