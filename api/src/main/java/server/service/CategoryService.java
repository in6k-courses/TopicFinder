package server.service;

import server.model.Category;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
@Transactional
public interface CategoryService {
    List<Category> findAll();
}
