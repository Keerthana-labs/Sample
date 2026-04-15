namespace schemaAPIsrv.srv;

using {API_INBOUND_DELIVERY_SRV_0002 as s4} from './external/API_INBOUND_DELIVERY_SRV_0002.csn';


service ExternalService{

entity A_MaintenanceItemObjList as projection on s4.A_MaintenanceItemObjList;


}

