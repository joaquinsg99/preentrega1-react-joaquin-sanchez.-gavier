import React from "react";

const Contador = () => {

    const [contar, setContar] = React.useState(0);

    const sumar = () => {
        setContar (contar + 1)
    }; 

    const restar = () => {
        setContar (contar - 1)
    };




    return (
        <div style={buttonStyle}>
            <button onClick={restar}>-</button>
            <p>{contar}</p>
            <button onClick={sumar}>+</button>
            
        </div>
    )
};


export default Contador

const buttonStyle =  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "red",
}
const CONTAINER_STYLE = {
    margin: "200px 400px" ,
    display: "flex",
    justifyContent: "center",
    padding: "20px 40px",

}