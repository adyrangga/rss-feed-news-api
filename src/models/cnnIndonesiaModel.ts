import { Endpoints } from "../constants";
import { XMLParser } from "fast-xml-parser";
import { ApiGet } from "../services/service";
import { rssResponseMapper } from "../utils/utils";

const { base, rssNasionalXml } = Endpoints.cnnIndonesia;

export const cnnIndonesiaRssFeedModel = async () => {
    const { data, status } = await ApiGet(`${base}${rssNasionalXml}`);
    const parser = new XMLParser();
    const jObj = parser.parse(data);
    return {
        status: status,
        error: status === 500,
        message: status === 500 ? data : 'Success get rss feed Nasional - CNN Indonesia',
        data: status === 500 ? null : rssResponseMapper(jObj, "Berita Nasional"),
    }
}
