import java.util.HashMap;

public class InventoryManagement {

    HashMap<Integer, Product> inventory = new HashMap<>();

    // Add Product
    public void addProduct(Product p) {
        inventory.put(p.productId, p);
        System.out.println("Product Added");
    }

    // Update Product
    public void updateProduct(int id, int quantity, double price) {

        Product p = inventory.get(id);

        if (p != null) {
            p.quantity = quantity;
            p.price = price;
            System.out.println("Product Updated");
        } else {
            System.out.println("Product Not Found");
        }
    }

    // Delete Product
    public void deleteProduct(int id) {

        inventory.remove(id);
        System.out.println("Product Deleted");
    }

    // Display Products
    public void displayProducts() {

        for(Product p : inventory.values()) {
            System.out.println(p);
        }
    }

    public static void main(String[] args) {

        InventoryManagement obj = new InventoryManagement();

        obj.addProduct(new Product(101,"Laptop",10,55000));
        obj.addProduct(new Product(102,"Mouse",50,500));
        obj.addProduct(new Product(103,"Keyboard",30,1200));

        obj.displayProducts();

        obj.updateProduct(102,60,600);

        obj.deleteProduct(103);

        System.out.println("\nAfter Update");

        obj.displayProducts();

    }
}