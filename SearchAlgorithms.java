public class SearchAlgorithms {

    // Linear Search
    public static SearchProduct linearSearch(SearchProduct[] products, String name) {

        for (SearchProduct p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }

        return null;
    }

    // Binary Search
    public static SearchProduct binarySearch(SearchProduct[] products, String name) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = products[mid].productName.compareToIgnoreCase(name);

            if (result == 0)
                return products[mid];
            else if (result < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        SearchProduct[] products = {
            new SearchProduct(104, "Camera", "Electronics"),
            new SearchProduct(102, "Keyboard", "Electronics"),
            new SearchProduct(101, "Laptop", "Electronics"),
            new SearchProduct(103, "Mouse", "Electronics")
        };

        SearchProduct p1 = linearSearch(products, "Mouse");

        if (p1 != null)
            System.out.println("Linear Search : " + p1);
        else
            System.out.println("Product Not Found");

        SearchProduct p2 = binarySearch(products, "Mouse");

        if (p2 != null)
            System.out.println("Binary Search : " + p2);
        else
            System.out.println("Product Not Found");
    }
}