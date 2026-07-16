import com.cognizant.ExternalApi;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class ArgumentMatchingTest {

    @Test
    void testArgumentMatching() {

        ExternalApi mockApi = mock(ExternalApi.class);

        mockApi.sendData("Hello");

        verify(mockApi).sendData(anyString());
    }
}