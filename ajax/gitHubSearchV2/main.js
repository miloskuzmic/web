const input = $('input');
const errorElements = $('.alert');
const url = "https://api.github.com/search/users?q=";
const cardHolder = $('.cardHolder');



const search = (inputValue) => {
    $.ajax({
        url:`${url}${inputValue}`,
        method: 'GET',
    }).done((response) =>{
        cardHolder.html("");
        if (!response || !response.items.length ){
            errorElements.text("No rezult");
            return;
        }
        response.items.forEach(item => {
            let card = $(`<div class="card" style="width: 18rem;">
            <img src='${item.avatar_url}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.login}</h5>
              <a href="${item.html_url}" class="btn btn-primary">Go to profile</a>
              <a href='' onclick="goToRepositories('${item.repos_url}')" class='btn btn-primary'>Read repositories</a>
            </div>
          </div>`);
          cardHolder.append(card)
        })
    }).fail(() =>{
        errorElements.text("Network error!");
        errorElements.toggle();
    });
    
    
}
const goToRepositories = (repoUrl) => {
    localStorage.setItem("user_repo", repoUrl);
    location.assign('repositories.html');
}
const searchHandler = (event) => {
    if (event.keyCode == 13){
        let inputValue = input.val();
        input.blur();
        if(!inputValue){
            errorElements.text("Input is required");
            errorElements.toggle();
            return;
        }
        search(inputValue)

    }
}
const clearInput = () => {
    input.val('');
    errorElements.text("");
    errorElements.css("display", "none");
}
input.on('keydown', searchHandler);
input.on('focus', clearInput);
