namespace localize.srv;

using {localize.db as db } from '../db/schema';

service localizeAPI{
    entity computer as projection on db.Computer;
}