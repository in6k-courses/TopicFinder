package server.service;

import server.model.Category;

import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
public interface CategoryService {
    List<Category> findAll();
}
