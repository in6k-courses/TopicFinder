package server.dao;

import org.springframework.data.repository.CrudRepository;
import javax.transaction.Transactional;
import server.model.Topic;

/**
 * Created by employee on 12/7/16.
 */
public interface TopicDao extends CrudRepository<Topic, Long> {
}
