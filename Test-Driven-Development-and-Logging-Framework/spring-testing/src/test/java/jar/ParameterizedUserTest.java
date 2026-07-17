package jar;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ParameterizedUserTest {

    @ParameterizedTest
    @ValueSource(strings = {"Vinay", "Babu", "Sam"})
    void testUserNames(String name) {

        assertTrue(name.length() > 0);
    }
}