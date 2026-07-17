package jar;

import java.util.NoSuchElementException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user/notfound")
    public String getMissingUser() {
        throw new NoSuchElementException("User not found");
    }
}