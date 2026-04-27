namespace sample.db;

using {API_BUS_SOLUTION_ORDER_SRV as s4} from '../srv/external/API_BUS_SOLUTION_ORDER_SRV';

entity A_BusinessSolutionOrder as projection on s4.A_BusinessSolutionOrder
{
    Language,
    BusSolnOrdDescription,
    PaymentTerms


};


