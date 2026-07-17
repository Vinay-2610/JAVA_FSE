package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class FileServiceTest {

    @Test
    void testReadFile() {

        FileReader mockReader = mock(FileReader.class);

        when(mockReader.read())
                .thenReturn("Mock File Data");

        FileService service = new FileService(mockReader);

        String result = service.readFile();

        assertEquals("Mock File Data", result);
    }
}