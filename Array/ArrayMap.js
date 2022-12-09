let employeesData = [
    {
        employeeId: 1,
        employeeName: "Aman",
    },
    {
        employeeId: 2,
        employeeName: "Bhargava",
    },
    {
        employeeId: 3,
        employeeName: "Chaitanya",
    },
];
let newUpdatedData = employeesData.map((employee) => {
    if (employee.employeeId === 2) {
        employee.employeeName= "Anthony";
    }
    return employee;
});
console.log("Updated Data: " +newUpdatedData);