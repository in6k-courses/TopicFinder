package server.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import server.Utils;
import server.dao.CategoryDao;
import server.dao.TopicDao;
import server.model.Category;
import server.model.Topic;
import server.service.CategoryService;
import server.service.TopicService;

import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
@Controller
@RequestMapping("/api/topic/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public String viewAllTopics() {
        return Utils.getJsonFromObject(categoryService.findAll());
    }
}
