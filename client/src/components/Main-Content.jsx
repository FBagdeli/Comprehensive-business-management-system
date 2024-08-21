import { useContext } from "react";
import { CustomersContent } from "./CustomersContent";
import { SupplierContent } from "./SupplierContent";
import { AppContext } from "../context";
import { Dashboard } from "./Dashboard";
import { ProductsContent } from "./ProductsContent";
export const MainContent = () => {
  const { selectedContent } = useContext(AppContext)

  return (
    <div className="main-content">
      {selectedContent=== 'dashboard' && <Dashboard/>}
      {selectedContent=== 'products' && <ProductsContent />}
      {selectedContent === 'customers' && <CustomersContent />}
      {selectedContent === 'suppliers' &&<SupplierContent />}
    </div>
  );
};
