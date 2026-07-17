package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Test
    void testGetUser() {

        UserRepository mockRepository = mock(UserRepository.class);

        when(mockRepository.findUser())
                .thenReturn("Vinay");

        UserService service = new UserService(mockRepository);

        String result = service.getUser();

        assertEquals("Vinay", result);
    }
}