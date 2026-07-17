package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ProductServiceTest {

    @Test
    void testGetProduct() {

        ProductRepository mockRepository =
                mock(ProductRepository.class);

        when(mockRepository.findProduct())
                .thenReturn("Laptop");

        ProductService service =
                new ProductService(mockRepository);

        String result = service.getProduct();

        assertEquals("Laptop", result);
    }
}