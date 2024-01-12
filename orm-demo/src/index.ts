import { AppDataSource } from "./data-source"
import { Client } from "./entity/Client"
import { Employee } from "./entity/Employee"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    const employee = new Employee()
    employee.firstName = "Jason"
    employee.lastName = "Jack"
    employee.salary = 66000

    await AppDataSource.manager.save(employee)
    console.log("Saved a new employee with id: " + employee.id)

    const emp = await AppDataSource.manager.find(Employee)
    console.log('Loaded Employee:',emp)
 
     

}).catch(error => console.log(error))
