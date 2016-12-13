package server.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.dao.TopicDao;
import server.model.Topic;

import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
@Service("topicService")
public class TopicServiceImpl implements TopicService {
    @Autowired
    private TopicDao topicDao;

    @Override
    public List<Topic> findAll() {
        return (List<Topic>) topicDao.findAll();
    }
}
