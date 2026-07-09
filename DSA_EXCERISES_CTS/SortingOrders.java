public class SortingOrders {

    // Bubble Sort
    public static void bubbleSort(Order[] orders) {

        for(int i = 0; i < orders.length - 1; i++) {

            for(int j = 0; j < orders.length - i - 1; j++) {

                if(orders[j].totalPrice > orders[j + 1].totalPrice) {

                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    // Quick Sort
    static int partition(Order[] orders, int low, int high) {

        double pivot = orders[high].totalPrice;

        int i = low - 1;

        for(int j = low; j < high; j++) {

            if(orders[j].totalPrice < pivot) {

                i++;

                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }

        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;

        return i + 1;
    }

    static void quickSort(Order[] orders, int low, int high) {

        if(low < high) {

            int pi = partition(orders, low, high);

            quickSort(orders, low, pi - 1);
            quickSort(orders, pi + 1, high);
        }
    }

    public static void main(String[] args) {

        Order[] orders = {

            new Order(101,"Vinay",2500),
            new Order(102,"Rahul",1500),
            new Order(103,"Anjali",3500),
            new Order(104,"Kiran",1000)
        };

        bubbleSort(orders);

        System.out.println("Bubble Sort");

        for(Order o : orders)
            System.out.println(o);

        quickSort(orders,0,orders.length-1);

        System.out.println("\nQuick Sort");

        for(Order o : orders)
            System.out.println(o);
    }
}