package server.dao;

import org.springframework.data.repository.CrudRepository;
import server.model.Category;

import javax.transaction.Transactional;

/**
 * Created by yevheniis on 12/13/16.
 */
@Transactional
public interface CategoryDao extends CrudRepository<Category, Long> {
}
