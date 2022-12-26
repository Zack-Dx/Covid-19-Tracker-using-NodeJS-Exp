class homeController {
    static async index(req, res) {
        const response = await fetchData();
        res.render('index', { response: response.data.regional });
    }
}
function fetchData() {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest';
    return fetch(url).then((res) => res.json());
}
module.exports = { homeController };
