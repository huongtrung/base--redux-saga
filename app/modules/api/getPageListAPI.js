import * as Bluebird from 'bluebird';
import UtilApi from '../../utils/UtilApi';

class getPageListAPI {
    get = async () => {
        try {
            const response = await UtilApi.fetch("http://dummy.restapiexample.com/api/v1/employees", { method: "GET" })
            if (response) {
                return Bluebird.resolve(response)
            }
        } catch (err) {
            return Bluebird.reject(err)
        }

    }
}
export default new getPageListAPI()