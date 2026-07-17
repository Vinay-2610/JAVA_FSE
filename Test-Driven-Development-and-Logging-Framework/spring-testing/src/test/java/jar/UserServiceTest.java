package jar;

import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Test
    void testGetUserById() {

        UserRepository mockRepository = mock(UserRepository.class);

        User user = new User(1L, "Vinay");

        when(mockRepository.findById(1L))
                .thenReturn(Optional.of(user));

        UserService service = new UserService(mockRepository);

        User result = service.getUserById(1L);

        assertEquals("Vinay", result.getName());
    }
}