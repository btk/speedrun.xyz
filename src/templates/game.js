import React, {useState, useEffect} from 'react';
import { graphql } from "gatsby"
import dateFormat from 'dateformat';
import flag from 'country-code-emoji';
import { parse } from 'twemoji-parser';
import { useTransition, animated } from "react-spring";

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
  const { game } = data;
  let runRaw = JSON.parse(game.runs);
  const height = 30;
  const [runs, setRuns] = useState([]);
  const [date, setDate] = useState(0);

  useEffect(() => {
    restartTicker();
  }, []);

  let restartTicker = () => {
    setDate(runRaw[0].date);
    let index = 1;
    let interval = setInterval(() => {
      setRuns(uniquify(runRaw.slice(0, index).sort((a, b) => (a.time > b.time) ? 1 : -1)));
      setDate(runRaw[index-1].date);
      index++;
      if(index > runRaw.length){
        clearInterval(interval);
        console.log("DONE!");
      }
    }, 1000);
  }

  const transitions = useTransition(
    runs.map((data, i) => ({ ...data, y: i * height })),
    d => d.player,
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y })
    }
  );

  return (
    <Layout>
      <SEO title={`${game.name}`} description={`Project description for`}/>
      <div className="Game">
        <div style={{width: 170}}>
          <img src={game.cover} style={{width:128,  height:180}}/>
        </div>
        <div className="content">
          <p className="category">{game.category.name}</p>
          <h1>{game.name}</h1>
          <p className="releaseDate">Released: {game.released}</p>
          <p className="runAmount">Number of Record Runs: {runRaw.length}</p>
          <p>This animated graph visualizes timeline of the verified runs for {game.name} in {game.category.name} category that have been in the best 20 at the time of their submission.</p>
        </div>
      </div>
      <div className="timeline">
        <div className="leftPanel">
          <h2>{dateBeautifier(date)}</h2>
          <div className="runs">
            {transitions.map(({ item, props: { y, ...rest }, key }, index) => {
              let flagUrl = parse(item.country.split("/")[0] ? flag(item.country.split("/")[0]) : "🏁")[0].url;
              let color1 = "#555";
              let color2 = "#aaa";
              if(item.style){
                if(item.style.style == "solid"){
                  color1 = item.style.color.dark;
                  color2 = item.style.color.dark;
                }else{
                  color1 = item.style["color-from"].dark;
                  color2 = item.style["color-to"].dark;
                }
              }
              return (
                <animated.div key={key} className="runItem" style={{
                    transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
                    ...rest
                  }}>
                    <div className="playerName">
                      <img src={flagUrl} style={{height: 20, display: "inline"}}/>
                      <span>{item.player}</span>
                    </div>
                    <div className="percent" style={{backgroundImage: "linear-gradient(45deg, "+color1+", "+color2+")", height: 20, width: isNaN(item.percent) ? 30 : (120 - item.percent)}}></div>
                    <div className="runTime">{timeBeautifier(item.time)}</div>
                  </animated.div>
                );
              })}
            </div>
          </div>

          <div className="rightPanel">
            <h2>Days to Hold Record</h2>

            <h2>Most Active Runners</h2>
          </div>
        </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query($slug: String!) {
    game(slug: { eq: $slug }) {
      code
      name
      cover
      category {
        id
        name
      }
      released
      runs
    }
  }
`



function upDate(date){
  const today = date.split(" ")[0];
  const tomorrow = new Date(today)
  return dateFormat(tomorrow.setDate(tomorrow.getDate() + 1), "yyyy-mm-dd");
}

function uniquify(runs){
  let uniqueRuns = [];
  runs.forEach((item, i) => {
    if(uniqueRuns.filter(r => r.player == item.player).length == 0){
      uniqueRuns.push(item);
    }
  });
  uniqueRuns = uniqueRuns.slice(0, 20).map((data, i) => ({ ...data, y: i * 30 }));

  let top = uniqueRuns[0].time;
  let bottom = uniqueRuns[uniqueRuns.length - 1].time;
  uniqueRuns = uniqueRuns.map(run => {
    run.percent = (bottom - run.time) / (bottom - top) * 90 + 10;
    return run;
  });
  return uniqueRuns;
}

function timeBeautifier(totalSeconds){
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  return (
    <div>{hours}<small>h</small> {minutes}<small>m</small> {seconds}<small>s</small></div>
  )
}

function dateBeautifier(date){
  const db = new Date(date);
  return dateFormat(db, "d mmmm yyyy");
}
