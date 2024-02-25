const rawUrl = `https://jsonplaceholder.typicode.com/posts`

const query = 'ipsum';
const sortField = 'title';
const sortOrder = "desc";
const pageNumber = "1";
const itemPerPage = "10";

const templateURL = `https://jsonplaceholder.typicode.com/posts?q=${query}&_sort=${sortField}&_order=${sortOrder}&_limit=${itemPerPage}&_page=${pageNumber}`

const queries = {
    q: 'ipsum',
    _sort: 'title',
    _order: 'desc',
    _page: '1',
    _limit: '10'
}

const params = new URLSearchParams(queries)
const url = "https://jsonplaceholder.typicode.com/posts";
const fullUrl = url + "?" + params

console.log(fullUrl)

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const postUrl = new URL("posts", baseUrl);

// postUrl.searchParams.append('q', 'ipsum')
// postUrl.searchParams.append('_sort', 'title')
postUrl.search = params.toString()

console.log(postUrl)