namespace schema;

using {API_PURCHASECONTRACT_PROCESS_SRV_0002 as s4} from '../srv/external/API_PURCHASECONTRACT_PROCESS_SRV_0002.csn';

@cds.persistence.table
entity API_PURCHASECONTRACT as projection on s4.A_PurCtrAccount{
    key AccountAssignment,
    PurchaseContractItem,
    Quantity
    
}
//Local entity
entity PurchaseOrder {
    key PurchaseOrderID : String;
        SupplierName : String;
        MaterialName : String;
        Quantity : Integer;
        Price : Decimal(10,2);
        purchaseRef:Association to API_PURCHASECONTRACT;
    
}






