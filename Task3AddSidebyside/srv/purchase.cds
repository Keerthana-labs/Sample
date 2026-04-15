namespace purchase.srv;

using {API_PURCHASECONTRACT_PROCESS_SRV_0002 as s4} from './external/API_PURCHASECONTRACT_PROCESS_SRV_0002.csn';
using {schema as db} from '../db/schema';

service purchase{
    entity output1 as projection on s4.A_PurCtrAccount;
    entity output2 as projection on db.API_PURCHASECONTRACT;
    entity output3 as projection on db. PurchaseOrder;
}
