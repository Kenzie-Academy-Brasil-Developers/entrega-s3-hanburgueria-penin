import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = ({cartList, addCart, setIsOpen}) => {
   const [productList, setProductList] = useState([]); 
   
   useEffect(() => {
      const getProducts = async () => {
        const { data } = await api.get("products");
        setProductList(data);
      
      }
      getProducts();
    }, [])
   return (
      <>
         <Header cartList={cartList} setIsOpen={setIsOpen}/>
         <main>
            <ProductList addCart={addCart} productList={productList} />
         </main>
      </>
   );
};
