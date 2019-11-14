import * as Bluebird from "bluebird";
import axios from "axios";

class UtilApi {
    fetch = async (url, config = {}) => {
        try {
            config["method"] = config.method ? config.method : "POST"
            config.headers = {}
            config.headers["Content-Type"] = config.contentType
                ? config.contentType
                : "application/json"
            config["timeout"] = 10 * 1000
            config.url = url;
            console.log("config", config)
            let response = await axios(config)

            console.log("response", response.data)
            return Bluebird.resolve(response.data)
        } catch (err) {
            return Bluebird.resolve(err)
        }
    }
}
export default new UtilApi()