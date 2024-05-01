using { Northwind as external } from '../srv/external/Northwind';

service EmployeeSrv {
    @readonly
    entity Employees as projection on external.Employees {
        key EmployeeID,
            FirstName,
            LastName
    }
}