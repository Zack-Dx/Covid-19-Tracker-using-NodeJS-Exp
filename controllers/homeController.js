class homeController {
    static async index(req, res) {
        const response = await fetchData();
        res.render('index', { response: response.data.regional });
    }
}
async function fetchData() {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest';
    const data = await fetch(url);
    const res = await data.json();
    return res;
}
module.exports = { homeController };
