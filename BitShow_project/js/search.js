const url = "http://api.tvmaze.com/search/shows?q=";
const url1 = 'http://api.tvmaze.com/shows';
const paragraphNoResults = $('.errormessage')
const input = $('input');
const cardHolder = $('.cardHolder');


const search = ((inputValue) =>{
    $.ajax({
        url:`${url}${inputValue}`,
        
        method: 'GET',

    }).done((response) =>{

      //  console.log(response)
        cardHolder.html("");
        $('.heading').html('Search history')
        if(response.length === 0){
            paragraphNoResults.text("No results match");
        }
    
    
        response.forEach((item) =>{
            let card = $(`<div class="col-3 card border-0 "  onclick='gotToShow(${item.show.id})'>
            <img src='${item.show.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${item.show.name}</h5>
            </div>
          </div>`);
          cardHolder.append(card);
        })
       
    }).fail(()=>{
        alert('Network error')
    })
});

const searchHandler = (event) =>{
    
    if(event.keyCode == 13){
        let inputValue = input.val();
        input.blur();
        if (!inputValue) {
            alert("input is required");
           
        }
        search(inputValue)

    }
    $('#searchList').html('')
    input.val('')
    
}
const gotToShow = (id) =>{
    run(id)
    $('#searchList').html('')
    input.val('')
    
    //console.log(id)
}
input.keyup(() => {
	const enteredText = input.val();

	 $.ajax({
		url: `${url}${enteredText}`,
        method: 'GET',
	}).done((gotResult) => {
       
		$("#searchList").text('');
		for (let i = 0; i <= 9; i++) {
			if(gotResult[i] !== undefined) {
				let searchListItem = $(`<li onclick='gotToShow(${gotResult[i].show.id})'>${gotResult[i].show.name}</li>`);
			
				$("#searchList").append(searchListItem);
			}else if($("#searchList").children().length === 0 && input.val() !== ''){
                let searchListItem = $(`<li>No result</li>`);
                $("#searchList").append(searchListItem);
                return;


            }
		}

		
	 });
});

input.on("keydown", searchHandler);




