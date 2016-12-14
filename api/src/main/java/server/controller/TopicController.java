package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import server.model.Topic;
import server.service.TopicService;
import server.Utils;

/**
 * Created by employee on 12/6/16.
 */

@Controller
@RequestMapping("/api/topic")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public String viewAllTopics() {
        return Utils.getJsonFromObject(topicService.findAll());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public String addTopic(@ModelAttribute("topic") Topic topic) {
        //topicService.add(topic);
        return Utils.getJsonFromObject(topic);
    }
}
