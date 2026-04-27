namespace sample.srv;

using {API_BUS_SOLUTION_ORDER_SRV as s4} from './external/API_BUS_SOLUTION_ORDER_SRV';
using {sample.db as db} from '../db/schema';


service api{
    entity project as projection on s4.A_BusinessSolutionOrder;
    entity Language as projection on db.A_BusinessSolutionOrder;
    entity BusSolnOrdDescription as projection on db.A_BusinessSolutionOrder;
    entity PaymentTerms as projection on db.A_BusinessSolutionOrder;

}

