public class TaskManagement {

    Task head = null;

    // Add Task
    public void addTask(int id, String name, String status) {

        Task newTask = new Task(id, name, status);

        if (head == null) {
            head = newTask;
        } else {

            Task temp = head;

            while (temp.next != null) {
                temp = temp.next;
            }

            temp.next = newTask;
        }

        System.out.println("Task Added");
    }

    // Search Task
    public void searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id) {

                System.out.println("Task Found");
                System.out.println(temp.taskId + " " + temp.taskName + " " + temp.status);
                return;
            }

            temp = temp.next;
        }

        System.out.println("Task Not Found");
    }

    // Display Tasks
    public void displayTasks() {

        Task temp = head;

        while (temp != null) {

            System.out.println(temp.taskId + " " + temp.taskName + " " + temp.status);

            temp = temp.next;
        }
    }

    // Delete Task
    public void deleteTask(int id) {

        if (head == null)
            return;

        if (head.taskId == id) {

            head = head.next;
            System.out.println("Task Deleted");
            return;
        }

        Task temp = head;

        while (temp.next != null && temp.next.taskId != id) {
            temp = temp.next;
        }

        if (temp.next != null) {
            temp.next = temp.next.next;
            System.out.println("Task Deleted");
        } else {
            System.out.println("Task Not Found");
        }
    }

    public static void main(String[] args) {

        TaskManagement obj = new TaskManagement();

        obj.addTask(101, "Design UI", "Pending");
        obj.addTask(102, "Write Code", "In Progress");
        obj.addTask(103, "Testing", "Pending");

        System.out.println("\nTasks:");

        obj.displayTasks();

        obj.searchTask(102);

        obj.deleteTask(102);

        System.out.println("\nAfter Deletion:");

        obj.displayTasks();
    }
}