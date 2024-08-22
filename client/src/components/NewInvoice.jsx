import { useState } from "react";

export const NewInvoice = () => {
  const [customerName, setCustomerName] = useState("");
  const [productCode, setProductCode] = useState(0);
  const [dailyGoldPrice, setDailyGoldPrice] = useState(2000);
  const [productWeight, setProductWeight] = useState(0);
  const [jewelryMakingFee, setJewelryMakingFee] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [invoiceType, setInvoiceType] = useState("SALE");

  return (
    <div>
      <form className="invoiceForm" onSubmit={(e) => e.preventDefault()}>
        <h3>New Invoice</h3>
        
        <label>Customer Name</label>
        <input 
          placeholder="Enter customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        ></input>
        
        <label>Product code</label>
        <input 
          placeholder="Enter product code"
          value={productCode}
          onChange={(e) => setProductCode(Number(e.target.value))}
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
          value={productWeight}
          onChange={(e) => setProductWeight(Number(e.target.value))}
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
          value={invoiceType}
          onChange={(e) => setInvoiceType(e.target.value)}
        ></input>
        
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
}