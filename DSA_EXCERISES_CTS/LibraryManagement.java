public class LibraryManagement {

    // Linear Search
    public static Book linearSearch(Book[] books, String title) {

        for (Book b : books) {
            if (b.title.equalsIgnoreCase(title)) {
                return b;
            }
        }

        return null;
    }

    // Binary Search
    public static Book binarySearch(Book[] books, String title) {

        int low = 0;
        int high = books.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = books[mid].title.compareToIgnoreCase(title);

            if (result == 0)
                return books[mid];
            else if (result < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        // Keep books sorted by title for Binary Search
        Book[] books = {

            new Book(104,"C Programming","Dennis"),
            new Book(101,"Data Structures","Mark"),
            new Book(102,"Java","James"),
            new Book(103,"Python","Guido")
        };

        Book b1 = linearSearch(books, "Java");

        if (b1 != null)
            System.out.println("Linear Search : " + b1);
        else
            System.out.println("Book Not Found");

        Book b2 = binarySearch(books, "Java");

        if (b2 != null)
            System.out.println("Binary Search : " + b2);
        else
            System.out.println("Book Not Found");
    }
}