namespace showorder.db;

//orderItems
entity items{
    key id:String;
        name:String;
        quantity:Integer;
        price:Integer;
        customer : Association to many customeritems on customer.itemsId = $self;
}

entity customer{
     key id:String;
         name:String;
         contact:Integer;
         email:String;
         items : Association to many customeritems on items.customerId = $self;
}

entity customeritems{
     key id : String;
         itemsId : Association to items;
         customerId : Association to customer;
         
   
}

entity supplier{
    key id:String;
        name:String;
        contact:String;
        customer:Association to many customerSupplier on customer.supplierId=$self;
}

entity customerSupplier{
    key id:String;
        customerId :Association to customer;
        supplierId :Association to supplier;

}

 
//Books
 
 entity Book{
   key id:String;
   title:String;
   author:String;
   price:Decimal(10,2);
   stock:Integer;
   authors : Association to many BookAuthor on authors.bookId = $self;
   category:Association to many  BookCategory on category.bookId=$self;
 
 }
 //(Author-Book:One author can write many books)
 entity  Author{
  key id:String;
  name:String;
  books:Association to many BookAuthor on books.authorId=$self;
 
 
 }
 entity BookAuthor{
    key id : String;
    bookId : Association to Book;
    authorId : Association to Author;
 }
 
//(Category-Book:One category can have many books)
 entity Category{
  key id:String;
  name:String;
  books:Association to many BookCategory on books.categoryId=$self;
 }
 entity BookCategory{
key id:String;
  bookId: Association to Book;  
  categoryId: Association to Category;
 }
 

//Students 
 entity  Student{
    key id:String;
    name:String;
    age:Integer;
    course:Association to  many StudentCourse on course.studentId=$self;
 
 }
 entity Course{
 
    key id:String;
    title:String;
    duration:String;
   
    student:Association  to  many StudentCourse on student.courseId=$self;
 }
 entity StudentCourse{
    key id:String;
        studentId:Association to Student;
        courseId:Association to Course;
 }

 //HospitalManagement
 entity Doctor {
  key ID        : String;
  name          : String;
  specialization: String;
 
  patients      : Association to many DoctorPatient on patients.doctor = $self;
}
 
entity Patient {
  key ID        : String;
  name          : String;
  age           : Integer;
 
  doctors       : Association to many DoctorPatient on doctors.patient = $self;
}
 
entity DoctorPatient {
    key id:String;
        doctor    : Association to Doctor;
        patient   : Association to Patient;
}

