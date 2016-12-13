package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.dao.CategoryDao;
import server.model.Category;

import java.util.List;

/**
 * Created by yevheniis on 12/13/16.
 */
@Service("categoryService")
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryDao categoryDao;

    @Override
    public List<Category> findAll() {
        return (List<Category>) categoryDao.findAll();
    }
}
