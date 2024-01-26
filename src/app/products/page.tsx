//requisicao http get sempre vai fazer cache
//node.js

//swr vs react-query vs redux-toolkit

import Image from "next/image";
import { CountButtonClick } from "../components/CountButtonClick";

//edge computing - cloudflare - workers
async function getProducts(): Promise<any[]> {
  const response = await fetch("http://localhost:8000/products", {
    cache: "no-store",
    // next: {
    //   revalidate: 10,
    // },
  });
  return response.json();
}
//png to webp
//Server Components
//Client Components
async function ProductListPage() {
  const products = await getProducts();
  return (
    <div className="p-2">
      <h2>Listagem de produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <Image src={product.image_url} alt={product.name} width={200} height={200} />
          </li>
        ))}
      </ul>
      <CountButtonClick />
    </div>
  );
}

export default ProductListPage;

//Ecommerce - BBB - Big Brother Brasil (terça)

//sessao e cookie
//server actions

//Client Component

//Eventos do DOM - onclick, onsubmit, onkeyup, onkeydown
//API dos browser - audio, video, websocket, streaming, geolocation
//Hooks do react - useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, useImperativeHandle, useLayoutEffect, useDebugValue

//PHP, Java (Spring), Laravel

//Backend do front-end
