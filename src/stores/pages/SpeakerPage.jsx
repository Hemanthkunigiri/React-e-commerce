import React, { useState } from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SpeakerPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
    speakerData : speakerData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="fullpage">
    
<div className="pro-selected">

{filteredProduct.map((phone)=>{
    return(
        <div className='pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(phone.brand)}
                onChange={()=>companyHandler(phone.brand)}
                />
                {phone.brand}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/speaker/${item.product}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel">
                  {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default SpeakerPage