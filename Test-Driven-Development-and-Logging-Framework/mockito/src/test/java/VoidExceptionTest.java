import com.cognizant.ExternalApi;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class VoidExceptionTest {

    @Test
    void testVoidException() {

        ExternalApi mockApi = mock(ExternalApi.class);

        doThrow(new RuntimeException("Error"))
            .when(mockApi).sendData("Hello");

        assertThrows(RuntimeException.class, () -> {
            mockApi.sendData("Hello");
        });

        verify(mockApi).sendData("Hello");
    }
}