package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ApiServiceTest {

    @Test
    void testFetchData() {

        RestClient mockClient = mock(RestClient.class);

        when(mockClient.getData())
                .thenReturn("Mock Data");

        ApiService service = new ApiService(mockClient);

        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}