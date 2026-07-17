package jar;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository repository;

    @Test
    void testSaveUser() {

        User user = new User(1L, "Vinay");

        repository.save(user);

        User savedUser = repository.findById(1L).orElse(null);

        assertEquals("Vinay", savedUser.getName());
    }
}