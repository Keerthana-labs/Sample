namespace orders.srv;

using {showorder.db as db} from '../db/schema';

service orderApi{
    entity items as projection on db.items;
    entity cus as projection on db.customer;
    entity supp as projection on db.supplier;
    entity cuit as projection on db.customeritems;
    entity cusupp as projection on db.customerSupplier;
    entity book as projection on db.Book;
    entity Author as projection on db.Author;
    entity Category as projection on db.Category;
    entity BookCategory as projection on db.BookCategory;
    entity BookAuthor as projection on db.BookAuthor;
    entity Doctor as projection on db.Doctor;
    entity Patient as projection on db.Patient;
    entity DoctorPatient as projection on db.DoctorPatient;
    entity Student as projection on db.Student;
    entity Course as projection on db.Course;
    entity StudentCourse as projection on db.StudentCourse;
 
}

