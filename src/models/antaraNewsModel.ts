import { Endpoints } from "../constants";
import { XMLParser } from "fast-xml-parser";
import { ApiGet } from "../services/service";
import { rssResponseMapper } from "../utils/utils";

const { base, rssTerkiniXml } = Endpoints.antaraNews;

export const antaraNewsRssFeedModel = async () => {
    const { data, status } = await ApiGet(`${base}${rssTerkiniXml}`);
    const parser = new XMLParser();
    const jObj = parser.parse(data);
    return {
        status: status,
        error: status === 500,
        message: status === 500 ? data : 'Success get rss feed Terkini - Antara News data',
        data: status === 500 ? null : rssResponseMapper(jObj),
    }
}
