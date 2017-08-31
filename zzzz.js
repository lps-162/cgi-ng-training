// let employee = {
//     first_name: 'Shivan',
//     last_name: 'Sambhan',
//     city: 'Trivandrum'
//   };

// console.log(employee.city);
// console.log(employee.first_name);
// console.log(employee.city);


// function testFunction() {
//     console.log('Test function ');
//     for (let i=0; i<10; i++) {
//         let quote = 'Bho Sambho Shivambo Swayambho';

//         //console.log(quote);
//     }

//     console.log(quote);
// }

// testFunction();

// listOfEmployees = [
//     {
//       first_name: 'Shivan',
//       last_name: 'Sambhan',
//       city: 'trivandrum',
//       joining_date: new Date(),
//       cities_travelled: ['Chennai', 'Bangalore']
//     },
//     {
//       first_name: 'Nanda',
//       last_name: 'Mahadeva',
//       city: 'Cbe',
//       joining_date: new Date(),
//       cities_travelled: ['Chennai', 'Bangalore', '']
//     },
//     {
//       first_name: 'Ishan',
//       last_name: 'Sambhu',
//       city: 'Chennai',
//       joining_date: new Date(),
//       cities_travelled: ['Trivandrum', 'Los Angeles']
//     }
//   ];

//   listOfEmployees[2].cities_travelled[0];

// const employee = {
//   name: 'whatever',
//   age: 13
// };

// employee.age = 17;

// function Employee(name, age, salary) {
//     this.name;
// }

// let empObj = new Employee('lp', 213, 123);

let mockEmployees = [
    {
        id: 1,
        emp_no: 'AB198',
        first_name: 'Shivan',
        last_name: 'Sambhan',
        city: 'trivandrum'
    },
    {
        id: 2,
        emp_no: 'B678',
        first_name: 'Nanda',
        last_name: 'Mahadeva',
        city: 'Cbe'
    },
    {
        id: 3,
        emp_no: 'A889',
        first_name: 'Ishan',
        last_name: 'Sambhu',
        city: 'Chennai'
    }
    ];

const empDetails = mockEmployees.find(e => e.city === 'Chennai');

//console.log(empDetails);

const modifiedList = mockEmployees.map(e => {
    e.full_name = e.first_name + ' ' + e.last_name;
    return e;
});

console.log(modifiedList);