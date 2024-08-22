import { CustomersContent } from "./CustomersContent";
import { SupplierContent } from "./SupplierContent";
import { Dashboard } from "./Dashboard";
import { ProductsContent } from "./ProductsContent";
import { Routes, Route } from "react-router-dom";
import { ProductContent } from "./ProductContent";
import { CreateProduct } from "./CreateProduct";
import { NewInvoice } from "./NewInvoice";
export const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsContent />} />
        <Route path="/customers" element={<CustomersContent />} />
        <Route path="/suppliers" element={<SupplierContent />} />
        <Route path="/products/:id" element={<ProductContent />} />
        <Route path="/products/create" element={<CreateProduct />}/>
        <Route path="/invoices/new" element={<NewInvoice />}/>
      </Routes>
    </div>
  );
};
