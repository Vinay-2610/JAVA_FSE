import com.cognizant.ExternalApi;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MultipleReturnsTest {

    @Test
    void testMultipleReturns() {

        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData())
            .thenReturn("First")
            .thenReturn("Second");

        assertEquals("First", mockApi.getData());
        assertEquals("Second", mockApi.getData());
    }
}