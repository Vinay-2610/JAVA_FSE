import com.cognizant.ExternalApi;
import com.cognizant.MyService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class MyServiceVerifyTest {

    @Test
    void testVerifyInteraction() {

        // Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Give mock to service
        MyService service = new MyService(mockApi);

        // Call method
        service.fetchData();

        // Verify getData() was called
        verify(mockApi).getData();
    }
}