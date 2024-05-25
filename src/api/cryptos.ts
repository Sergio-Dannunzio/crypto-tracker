import { instance } from "./base.api";

const endpoint = "markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false&locale=en";

export const cryptos = {
    getAll: function () {
        return instance.get(endpoint)
    },
    getById: function ({ id }: { id: string | undefined }) {
        return instance.get(`${id}`)
    }

}