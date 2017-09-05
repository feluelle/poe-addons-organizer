var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.responseText);
    }
}
xhr.open('POST', 'https://api.github.com/graphql');
xhr.setRequestHeader('Authorization','Bearer b5fb46c163d8293bd3dd52d37e23da661e4c19fd');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader("Accept", "application/json");
xhr.send(JSON.stringify({
    query:"{search(query: \"topic:poe\", type: REPOSITORY, first: 100) {nodes {... on Repository {description}}}}"
}));