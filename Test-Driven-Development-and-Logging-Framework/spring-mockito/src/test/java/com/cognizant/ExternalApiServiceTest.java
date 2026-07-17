package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ExternalApiServiceTest {

    @Test
    void testGetData() {

        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.fetchData())
                .thenReturn("Mock API Data");

        ExternalApiService service =
                new ExternalApiService(mockApi);

        String result = service.getData();

        assertEquals("Mock API Data", result);
    }
}