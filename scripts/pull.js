const dateformat = require("dateformat");
const fetch = require('node-fetch');
const fs = require('fs');

let runs = [];
let gameSlug = "nfsmw";
let game = {};

let pullGame = async (slug) => {
  let gamed = await fetch("https://www.speedrun.com/api/v1/games/"+slug).then(res => res.json());
  game = gamed.data;
  game.links = [];
  game.moderators = [];
  let categoryd = await fetch("https://www.speedrun.com/api/v1/games/"+game.id+"/categories").then(res => res.json());
  game.category = categoryd.data[0]; // Change this for other categories
  await pull("https://www.speedrun.com/api/v1/runs?category="+game.category.id+"&status=verified&orderby=date&direction=asc&max=200");
}

pullGame(gameSlug);

let pull = async (url) => {
  let res = await fetch(url).then(res => res.json());
  for (var i = 0; i < res.data.length; i++) {
    let item = res.data[i];
    let player = await fetch(item.players[0].uri).then(res => res.json());
    if(player.data && item.date){
      let name = player.data.name ? player.data.name : player.data.names.international;
      let run = {
        date: item.date,
        time: item.times.primary_t,
        player: name,
        country: player.data.location ? player.data.location.country.code : ``,
        style: player.data["name-style"]
      };
      if(uniquify([run, ...runs], run.player)){
        runs.push(run);
        console.log(run.time, run.player);
      }else{
        console.log("not relevant", run.player);
      }
    }
  }
  if(res.pagination.links.filter(l => l.rel == "next").length == 1){
    await pull(res.pagination.links.filter(l => l.rel == "next")[0].uri);
    console.log("NEXT PAGE");
  }else{
    console.log("DONE");
    game.runs = runs;
    let data = JSON.stringify(game);
    fs.writeFileSync("src/runs/"+game.abbreviation+"_"+game.category.id+'.json', data);
  }
}


function uniquify(runs, player){
  runs = runs.sort((a, b) => (a.time > b.time) ? 1 : -1);
  let uniqueRuns = [];
  runs.forEach((item, i) => {
    if(uniqueRuns.filter(r => r.player == item.player).length == 0){
      uniqueRuns.push(item);
    }
  });
  uniqueRuns = uniqueRuns.slice(0, 20);
  return uniqueRuns.filter(r => r.player == player).length;
}
