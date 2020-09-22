const api = {
    fetchNewsList: "news/list",
};

// 编辑分类
export function fetchNewsList(paremater) {
    return axios({
        url: api.fetchNewsList,
        method: "Get",
        params: paremater,
    });
}