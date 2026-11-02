import { products } from "./db";
import { useState } from 'react'

export default function Prod(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const btnBack =()=>{
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        console.log(currentIndex);
    }
    const btnNext =()=>{
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        console.log(currentIndex);
    }

    return(
    <div style={{padding:"30px"}}>
        <h2>Products:</h2>
        <div style={{padding:"40px"}}>
            <h3>{products[currentIndex].name}</h3>
            <p>Category: {products[currentIndex].category}</p>
            <p>Price: {products[currentIndex].price}</p>
        </div>
        <div style={{padding:"30px"}}>
            <button onClick={btnBack}>Back</button>
            <button onClick={btnNext}>Next</button>
        </div>

    </div>
    )
}

