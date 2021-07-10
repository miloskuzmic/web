const tableBody = $('tbody');
const errorElement = $('.alert');

$(document).ready(() =>{
    let repo = localStorage.getItem('user_repo');
    $.ajax({
        url: repo,
        method: 'GET',

    }).done(response => {
        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
        response.forEach(item => {
            let row = $(`<tr><td>${item.name}</td><td>${item.description}</td><td>${item.language}</td>
            <td>${item.watchers_count}</td><td><a href='${item.html_url}' target='_blank' class='btn btn-primary'>Go to repo</a>
            </td></tr>`);
            tableBody.append(row);
        });

    }).fail(() =>{
        errorElement.text("Network error!");
        errorElement.toggle();
    })
})