package server.service;

import server.model.Topic;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
@Transactional
public interface TopicService {
   List<Topic> findAll();
   void add(Topic topic);
}
