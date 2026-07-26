const cds = require('@sap/cds');
const { SELECT, where } = require('@sap/cds/lib/ql/cds-ql');
module.exports = cds.service.impl(async function () {
    const { emp } = this.entities;

  this.on('READ',emp,async(req)=>{



//------------------------BASIC QUESTIONS-----------------

//-----------------display emmployee names and salaries only------------
    // return await SELECT.from(emp).columns('Name','Salary')

//-----------------Find employees working IT department--------------
//    return await SELECT.from(emp).where({Department:'IT'})

//---------------Find employees from Chennai--------------
//    return await SELECT.from(emp).where({City:'Chennai'})


//-----------------Find employees whose age is greater than 30--------
// return await SELECT.from(emp).where({Age:{'>':30}})

//------------------Find employees whose salary is less than 60000-----------
// return await SELECT.from(emp).where({Salary:{'<':60000}})





//----------------AGGREGATE FUNCTION QUESTIONS------------------

//-------------Find total number of employees------------
// return await SELECT.from(emp).columns(`count(*) as TotalEmployees`);


//-------------Find total salary paid to all employees---------
// return await SELECT.from(emp).columns(`sum(Salary) as TotalSalary`);


//------------Find average salary-----------
// return await SELECT.from(emp).columns(`avg(Salary) as AverageSalary`);

//-----------Find highest salary-----------
// return await SELECT.from(emp).columns(`max(Salary) as HighestSalary`);


//----------Find lowest salary---------
// return await SELECT.from(emp).columns(`min(Salary) as LowestSalary`);


//--------Find average age of employees---------
// return await SELECT.from(emp).columns(`avg(Age) as AverageAge`);


//----------Find total salary paid by IT department-----------
// return await SELECT.from(emp).columns(`sum(Salary) as TotalSalary`).where({Department:'IT'})


//-----------find maximum age----------------
// return await SELECT.from(emp).columns(`max(Age) as MaximumAge`);


//------------Find minimum age-------------
// return await SELECT.from(emp).columns(`min(Age) as MinimumAge`);





//-----------------GROUP BY QUESTIONS-------------

//----------Count employees department-wise----------
return await SELECT.from(emp).columns('Department','count(*) as CountDepartment').groupBy('Department');

//----------Find average salary department-wise-----
// return await SELECT.from(emp).columns('Department','count(Salary) as AverageSalary').groupBy('Department');

//----------Find maximum salary department-wise-------
// return await SELECT.from(emp).columns('Department','max(Salary) as MaximumSalary').groupBy('Department');

//----------Find minimum salary department wise--------
// return await SELECT.from(emp).columns('Department','min(Salary) as MinimumSalary').groupBy('Department');

//----------Find total salary department-wise---------
// return await SELECT.from(emp).columns('Department','sum(Salary) as TotalSalary').groupBy('Department');

//----------Find average age department-wise------
// return await SELECT.from(emp).columns('Department','avg(Age) as AverageSalary').groupBy('Department');






//---------HAVING QUESTIONS-------------

//----------Show departments having more than 2 employees-------------
// return await SELECT.from(emp).columns('Department', 'count(*) as EmployeeCount').groupBy('Department').having('count(*) > 2');

//---------Show departments whose average salary is greater than 60000--------
// return await SELECT.from(emp).columns('Department','avg(Salary) as AverageSalary').groupBy('Department').having('avg(Salary)>60000');


//------show departments whose total salary exceeds 150000-------------
// return await SELECT.from(emp).columns('Department','sum(Salary) as TotalSalary').groupBy('Department').having('sum(Salary)>150000');

//------show departments whose maximum salary is greater than 70000------
// return await SELECT.from(emp).columns('Department','max(Salary)as MaximumSalary').groupBy('Department').having('max(Salary)>70000');






//--------------LIKE OPERATOR----------
//-------Find employees whose name starts with 'a'-----------
// return await SELECT.from(emp).where({Name:{'like':'A%'}})


//-------Find employees whose name ends with 'i' --------
// return await SELECT.from(emp).where({Name:{'like':'%i'}})

//--------Find employees whose name contains with 'ar' --------
// return await SELECT.from(emp).where({Name:{'like':'%ar%'}})


//------- Find employees whose city starts with 'M'
// return await SELECT.from(emp).where({City:{'like':'M%'}})

//-------- Find employees whose department contains 'k'
// return await SELECT.from(emp).where({Department:{'like':'%k%'}})







//------------BETWEEN QUESTIONS----------
//---------Find employees with salary between 50000 and 70000
// return await SELECT.from(emp).where(`Salary BETWEEN 50000 and 70000`)


//------Find employees with age between 30 and 35
// return await SELECT.from(emp).where(`Age BETWEEN 30 and 35`)


//Find employees who joined between 2015 and 2020
// return await SELECT.from(emp).where({JoinDate: {between: ['2015-01-01', '2020-12-31']}});


//Find employees whose EmpID is between E001 and E005

// return await SELECT.from(emp).where({ EmpID: { between: ['E001', 'E005'] } });







//--------------IN(OR) OPERATOR QUESTIONS----------------
//---------Find employees from Chennai or Bangalore-----------
// return await SELECT.from(emp).where(`City = 'Chennai' OR City = 'Bangalore'`);
// return await SELECT.from(emp).where({ City: { in: ['Chennai', 'Bangalore'] } });

//---------Find  employees working in IT or HR---------
// return await SELECT.from(emp).where(`Department='IT' OR Department='HR'`);
// return await SELECT.from(emp).where({Department:{in:['IT','HR']}})


//-------Find employees whose salary salary is either 50000, 60000. or 700000.---------
// return await SELECT.from(emp).where({Salary:{in:[50000,60000,70000]}})






//--------------------OREDR BY QUESTIONS----------------------
//-----------Display employees by salary ascending--------
// return await SELECT.from(emp).orderBy({Salary:'asc'}) 


//--------Display employees by salary descending-----------
// return await SELECT.from(emp).orderBy({Salary:'desc'})


//-------Display employees by age descending---------
// return await SELECT.from(emp).orderBy({Age:'desc'})

//-------Display employeesby name ascending-------
// return await SELECT.from(emp).orderBy({Name:'asc'})








//------------TOP N QUESTIONS------------
//-------Find employee with highest salary-----------
// return await SELECT.from(emp).columns(`max(Salary) as HighestSalary`)

//-------Find employee with lowest salary---------
// return await SELECT.from(emp).columns(`min(Salary) as LowestSalary`)

//------Find top 3 highest paid employees-------
// return await SELECT.from(emp).orderBy('Salary desc').limit(3)

//------Find top 2 youngest employees-------
// return await SELECT.from(emp).orderBy('Age asc').limit(2)

//------Find oldest employee---------
// return await SELECT.from(emp).orderBy('Age desc').limit(1)







//---------------SECOND HIGHEST/THIRD HIGHEST----------------
//---------Find second highest salary------------
// return await SELECT.from(emp).orderBy('Salary desc').limit(1,1) 

//--------Find third highest salary-------
// return await SELECT.from(emp).orderBy('Salary desc').limit(1,2)

//-------Find second lowest salary-------
// return await SELECT.from(emp).orderBy('Salary asc').limit(1,1)
})
    
});
