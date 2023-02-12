
import { useEffect, useState } from "react"; 
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function Home(){

        const [products,setProducts] = useState([]);  
      

        useEffect(() => {
            fetch("https://fakestoreapi.com/products")   
            .then((res)=> res.json())
            .then((res)=> {
                console.log("fetch called");
                res.forEach(o=>{
                    o.rating.rate=Math.ceil(Number(o.rating.rate));
                })
                setProducts(res);
            });
        }, [] )

       

    return (
        <div>
            <Header/>
            {/* products */}
            <div className="row">
            {
                    products.map((products,i) => ( <div className="col-3">
                    <ProductCard item = {products} index={i}/>
                    </div>))
                } 
        
         
          
               
            </div>
            <Footer/>
        </div>
    );
}

export default Home ;