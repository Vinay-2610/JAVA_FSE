package Singletonpatternexample;

public class Testlogger {
    
    public static void main(String[] args) {

        Logger l1 = Logger.getinstance();
        Logger l2 = Logger.getinstance();

        l1.log("User logged");
        l2.log("Payment successfull");
        System.out.println(l1);
        System.out.println(l2);
        System.out.println(l1 == l2);
    }
}
