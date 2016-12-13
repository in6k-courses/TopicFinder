package server.service;

import server.model.Topic;

import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
public interface TopicService {
   List<Topic> findAll();
}
