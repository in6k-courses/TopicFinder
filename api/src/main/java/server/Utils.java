package server;

import com.fasterxml.jackson.databind.ObjectMapper;

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
}
