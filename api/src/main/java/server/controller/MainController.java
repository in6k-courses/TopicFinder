package server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by employee on 12/6/16.
 */

@Controller
public class MainController {

    @RequestMapping("/")
    @ResponseBody
    public String index() {
        return "MainController";
    }

}
