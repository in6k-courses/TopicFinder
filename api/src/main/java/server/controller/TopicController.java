package server.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import server.dao.TopicDao;
import server.model.Topic;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */

@Controller
@RequestMapping("/api/topic")
public class TopicController {
    @Autowired
    private TopicDao topicDao;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public String viewAllTopics() {
        ObjectMapper mapper = new ObjectMapper();
        List<Topic> topic = (List<Topic>) topicDao.findAll();
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(topic);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return jsonInString;
    }

    @RequestMapping("/create")
    @ResponseBody
    public String createTopic(String title, String description) {
        Topic topic = new Topic("Topic title", "Description");
        topicDao.save(topic);
        return "";
    }

}
