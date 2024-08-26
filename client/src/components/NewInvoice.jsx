import { useContext, useState } from "react";
import { AppContext } from "../context";
import { ErrorMessage } from "./ErrorMessage";
import ERR from '../utils/errors.js'
export const NewInvoice = () => {
  const [customerName, setCustomerName] = useState("");
  const [productCode, setProductCode] = useState(0);
  const [dailyGoldPrice, setDailyGoldPrice] = useState(2000);
  const [weight, setWeight] = useState(0);
  const [jewelryMakingFee, setJewelryMakingFee] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [type, setInvoiceType] = useState("SALE");
  const { createNewInvoiceSubmitHandler } = useContext(AppContext);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [error, setError] = useState(null)
  const invoice = {
    customerName,
    productCode,
    dailyGoldPrice,
    weight,
    jewelryMakingFee,
    productPrice,
    type,
    quantity,
    date,
  };
  return (
    <div>
      <form
        className="invoiceForm"
        onSubmit={(e) => {
          e.preventDefault();
          createNewInvoiceSubmitHandler(invoice);
          setCustomerName("")
          setProductCode(0)
          setWeight(0)
          setJewelryMakingFee(0)
          setProductPrice(0)
          setQuantity(0)
        }}
      >
        <h3>New Invoice</h3>

        <label>Customer Name</label>
        <input
          placeholder="Enter customer name"
          value={customerName}
          onChange={(e) => {setCustomerName(e.target.value)}}
        ></input>

        <label>Product code</label>
        <input
          placeholder="Enter product code"
          value={productCode}
          onChange={(e) => {
            if(isNaN(Number(e.target.value))) {
              setError(ERR.ENTER_VALID_NUMBER)
              throw new Error(ERR.ENTER_VALID_NUMBER)
            }
            setError(null)
            setProductCode(Number(e.target.value))
          }}
        ></input>

        <label>Daily gold price</label>
        <input
          placeholder="Enter daily gold price"
          value={dailyGoldPrice}
          onChange={(e) => setDailyGoldPrice(Number(e.target.value))}
        ></input>

        <label>Product weight</label>
        <input
          placeholder="Enter product weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        ></input>

        <label>Product jewelry Making Fee</label>
        <input
          placeholder="Enter jewelry making fee"
          value={jewelryMakingFee}
          onChange={(e) => setJewelryMakingFee(Number(e.target.value))}
        ></input>

        <label>Product price</label>
        <input
          placeholder="Enter product price"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        ></input>

        <label>Invoice type</label>
        <input
          placeholder="Choose Invoice type"
          value={type}
          onChange={(e) => setInvoiceType(e.target.value)}
        ></input>

        <label>Quantity</label>
        <input
          placeholder="Choose quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        ></input>

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        {error && <ErrorMessage error={error}/>}
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
};
