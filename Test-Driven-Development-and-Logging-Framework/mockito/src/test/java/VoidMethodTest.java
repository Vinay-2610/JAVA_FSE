import com.cognizant.ExternalApi;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class VoidMethodTest {

    @Test
    void testVoidMethod() {

        ExternalApi mockApi = mock(ExternalApi.class);

        doNothing().when(mockApi).sendData("Hello");

        mockApi.sendData("Hello");

        verify(mockApi).sendData("Hello");
    }
}