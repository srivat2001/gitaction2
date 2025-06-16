const axios = require('axios');

function add(a, b) {
    return a + b;
}

async function fetchData() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(res.data);
}

module.exports = { add, fetchData };

if (require.main === module) {
    fetchData();
}
