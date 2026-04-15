namespace schema.srv;

using {schema.db as db} from '../db/schema';

service CountryAPI{
    entity coun as projection on db.Country;

  function getPlaceList(District:String) returns array of String;
}