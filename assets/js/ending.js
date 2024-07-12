var ending_effect_interval = null;

var left = 0;

const RenderEndPage = async(character,player_won) =>{

  var page = document.querySelector(".fight_page");

  document.body.style.backgroundColor = "black";

  var win_text = player_won ? "Won" : "Lost";
  var win_color = player_won ? "win_text" : "lost_text";
  var background = player_won ? "./assets/imgs/win.gif" : "./assets/imgs/lose.gif"

  var html = `

    <div class="container-fluid ending_container_new  ending_container_ relative">

      <p class="${win_color}">You ${win_text}</p>

      <div class="row">

        <div class="col-6">

          <p class="ending_title">
            Returning to Character Selection....
          </p>

        </div>

        <div class="col-5"></div>

      </div>

        <div class="row">

          <div class="col-4"></div>

          <div class="col-4 relative height-100vh">

            <img class="width-100 medal medal_ani" src="${character.display_image}"/>
            <img class="width-100 medal_inner medal_ani" src="./assets/imgs/medal.png"/>
            <h1 class="text-center winner_name">${character.name}</h1>

          </div>

          <div class="col-4"></div>

        </div>

  </div>`


  EmptyContainer(page);

  var container = document.createElement("div");

  container.classList.add("ending_page");
  container.innerHTML = html;

  page.append(container);

  var ending_container = document.querySelector(".ending_container");
  var effect_class = player_won ? "winning_countdown_effect" : "countdown_effect";

  var left = 0;

  clearInterval(ending_effect_interval);

  ending_effect_interval = setInterval(()=>{

    if(left >=98){
      left = 0;
    }else{
      left += 2;
    }

    PlayerSelectedSpecialEffect(5,"countdown_effect_","ending_container","./assets/imgs/flame_e.png",Math.floor(Math.random() * 100),false);

  },100);

  await delay(5000);

  window.location.assign("./index.html");

  EmptyContainer(ending_container);

}
