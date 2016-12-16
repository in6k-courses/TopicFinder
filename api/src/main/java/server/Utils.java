package server;

import com.fasterxml.jackson.databind.ObjectMapper;
import server.model.Topic;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Created by yevheniis on 12/13/16.
 */
public class Utils {
    public static String getJsonFromObject(Object object) {
        ObjectMapper mapper = new ObjectMapper();
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(object);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return jsonInString;
    }

    public static Topic getTopicFromJson(String json) {
        ObjectMapper mapper = new ObjectMapper();
        Topic topic = null;
        try {
            topic = mapper.readValue(json, Topic.class);
        } catch (Exception e) {
            System.err.println(e);
        }
        return topic;
    }

    public static <E> List<E> getListFromIterable(Iterable<E> iter) {
        List<E> list = new ArrayList<E>();
        for (E item : iter) {
            list.add(item);
        }
        return list;
    }
}
