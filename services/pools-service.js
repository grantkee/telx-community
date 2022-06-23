import BaseService from "./base-service";
import { processPool } from "../type-helpers";

export default class ArticleService extends BaseService {
    constructor() {
        super();
        this.itemType = "pools";
    }

    async fetchSingle(id) {
        const rawData = await super.fetchSingle(id);
        const result = processPool(rawData.id, rawData.attributes);
        return result;
    }

    async fetchSingleBySlug(slug) {
        const rawData = await super.fetchSingleBySlug(slug);
        const result = processPool(rawData.id, rawData.attributes);
        return result;
    }

    async fetchAll() {
        const rawData = await super.fetchAll();
        const result = rawData.map((a) => processPool(a.id, a.attributes));
        const orderedResult = result.sort((a, b) => (a.order > b.order ? 1 : b.order > a.order ? -1 : 0));
        return orderedResult;
    }
}
