package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.dao.TopicDao;
import server.model.Topic;
import java.util.List;
import server.Utils;

/**
 * Created by yevheniis on 12/13/16.
 */
@Service("topicService")
public class TopicServiceImpl implements TopicService {
    @Autowired
    private TopicDao topicDao;

    @Override
    public List<Topic> findAll() {
        return Utils.getListFromIterable(topicDao.findAll());
    }

    @Override
    public void add(Topic topic) {
        topicDao.save(topic);
    }
}
