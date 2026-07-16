package FactoryMethodPatternExample;

public class Testfile {
    public static void main(String[] args){
    WordFactory factory = new WordFactory();
    Document doc = factory.createDocument();
    doc.open();
}}
