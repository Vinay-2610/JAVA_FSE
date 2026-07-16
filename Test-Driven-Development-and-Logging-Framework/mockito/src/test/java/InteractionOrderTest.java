import com.cognizant.ExternalApi;
import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.mockito.Mockito.*;

public class InteractionOrderTest {

    @Test
    void testInteractionOrder() {

        ExternalApi mockApi = mock(ExternalApi.class);

        mockApi.getData();
        mockApi.sendData("Hello");

        InOrder inOrder = inOrder(mockApi);

        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).sendData("Hello");
    }
}