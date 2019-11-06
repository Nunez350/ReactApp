import react from "react"

function Product(props){
    return (
        <div>
            <h2> {props.product.name}</h2>
            <p>${props.product.price.toLocalString("en-Us", {style:"currency", currency: "USD"})}
            - {props.product.description}</p>
        </div>
    
    )
}

export default Product