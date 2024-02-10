import { Product } from '../../../types/Product'
import Experience from '../../three.js/Experience';
import Experience1 from '../../three.js/Experience1';
/* import { Model } from '../../three.js/Model' */
import style from './Product.module.css'

type Props = {
    product: Product
}



const ProductCard = ({product}:Props) => {
    const {name, description, price,   } = product

  
  return (
    <>  
     
    <div className={style.container}>
        <div className={style.image_container}>
       
     {/*   <Experience /> */}
     <Experience1/>
             
        </div>
       
        <div className={style.info_container}>
            <h3 className={style.name}>{name}</h3>
            <p className={style.description}>{description}</p>
            <span className={style.price}>$ {price}</span>
           
        </div>
    </div>
    </>
  )
}

export default ProductCard