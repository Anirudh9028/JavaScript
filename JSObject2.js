/*
function write inside the object name as method
*/

let employee =
{
    empname : "asd",
    empid:1023,
    empjob: "engineer",
    basicsal: 500000,
    

    bonus: function()
    {
        return ((this.basicsal*10)/100);


    }
};

console.log(employee.bonus());
