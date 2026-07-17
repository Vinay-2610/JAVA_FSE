package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class IntegrationTest {

    @Test
    void testIntegration() {

        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.fetchData())
                .thenReturn("Integration Data");

        ExternalApiService service =
                new ExternalApiService(mockApi);

        String result = service.getData();

        assertEquals("Integration Data", result);

        verify(mockApi).fetchData();
    }
}