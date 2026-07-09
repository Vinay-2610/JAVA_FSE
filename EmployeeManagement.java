public class EmployeeManagement {

    Employee[] employees = new Employee[5];
    int count = 0;

    // Add Employee
    public void addEmployee(Employee e) {
        employees[count++] = e;
    }

    // Search Employee
    public void searchEmployee(int id) {

        for(int i = 0; i < count; i++) {

            if(employees[i].employeeId == id) {
                System.out.println("Employee Found:");
                System.out.println(employees[i]);
                return;
            }
        }

        System.out.println("Employee Not Found");
    }

    // Traverse Employees
    public void displayEmployees() {

        for(int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }

    // Delete Employee
    public void deleteEmployee(int id) {

        for(int i = 0; i < count; i++) {

            if(employees[i].employeeId == id) {

                for(int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }

                employees[count - 1] = null;
                count--;

                System.out.println("Employee Deleted");
                return;
            }
        }

        System.out.println("Employee Not Found");
    }

    public static void main(String[] args) {

        EmployeeManagement obj = new EmployeeManagement();

        obj.addEmployee(new Employee(101,"Vinay","Developer",50000));
        obj.addEmployee(new Employee(102,"Rahul","Tester",45000));
        obj.addEmployee(new Employee(103,"Anjali","Manager",70000));

        System.out.println("Employees:");

        obj.displayEmployees();

        obj.searchEmployee(102);

        obj.deleteEmployee(102);

        System.out.println("\nAfter Deletion:");

        obj.displayEmployees();
    }
}