// Hook useState

import { useState, useEffect } from "react";

const Contador = (props) => {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState(props.nombre);
  // const [edad, setEdad] = useState(0);
  // const [login, setLogin] = useState(false);
  const [producto, setProducto] = useState("");
  useEffect(() => {
    console.log(`el producto agregado fue: ${producto}`);
  });
  return (
    <div>
      <h1>hola {nombre}</h1>
      <button onClick={() => setNombre("pedro")}>cambiar nombre</button>

      <button onClick={() => setCount(count - 1)}>restart</button>

      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <h1>El Valor actual es: {count} </h1>

      <input type="text" onChange={(e) => setProducto(e.target.value)} />

      <h1>El producto ingresado fue: {producto}</h1>
    </div>
  );
};
export default Contador; // solo tengo una funcion y la exporta
