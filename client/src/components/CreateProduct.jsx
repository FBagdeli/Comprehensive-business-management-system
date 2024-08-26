import { useContext, useState } from "react";
import { AppContext } from "../context";

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("RING");
  const [weight, setWeight] = useState(0);
  const [jewelryMakingFee, setJewelryMakingFee] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const { createNewProductSubmitHandler } = useContext(AppContext);
  
  const productData = {
    name,
    type,
    weight,
    jewelryMakingFee,
    quantity,
    price,
    description,
  };
  return (
    <div>
      <form className="create-product" onSubmit={(e) => {
        e.preventDefault()
        createNewProductSubmitHandler(productData)
      }}>
        <p>Enter product information</p>
        <label>Prdocut name</label>
        <input
          placeholder="Enter product name"
          value={name}
          onChange={(e) => {setName(e.target.value)
            
          }}
        ></input>
        <label>Type</label>
        <input
          placeholder="choose type of product"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label>Weight</label>
        <input
          placeholder="Enter product weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))
          }
        ></input>
        <label>JewelryMakingFee</label>
        <input
          placeholder="Enter product jewelryMakingFee"
          value={jewelryMakingFee}
          onChange={(e) => setJewelryMakingFee(Number(e.target.value))}
        ></input>
        <label>Quantity</label>
        <input
          placeholder="Enter product quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value))
            console.log(quantity)
          }}
        ></input>
        <label>Price</label>
        <input
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        ></input>
        <label>Description</label>
        <input
          placeholder="Enter product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
