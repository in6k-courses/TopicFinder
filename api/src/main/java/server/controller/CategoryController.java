package server.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import server.dao.CategoryDao;
import server.dao.TopicDao;
import server.model.Category;
import server.model.Topic;

import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
@Controller
@RequestMapping("/api/topic/category")
public class CategoryController {
    @Autowired
    private CategoryDao categoryDao;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public String getAllCategory() {
        ObjectMapper mapper = new ObjectMapper();
        List<Category> categoryList = (List<Category>) categoryDao.findAll();
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(categoryList);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return jsonInString;
    }
}
