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
  const [runners, setRunners] = useState([]);
  const [holdDays, setHoldDays] = useState([]);
  const [date, setDate] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressIndex, setProgressIndex] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [ended, setEnded] = useState(false);
  const [int, setInt] = useState(null);

  useEffect(() => {
    restartTicker(1000);
  }, []);

  let toggle = () => {
    if(playing){
      stopTicker();
    }else{
      restartTicker(1000);
    }
    setPlaying(!playing);
  }

  let replay = () => {
    setEnded(false);
    setProgressIndex(1);
    setTimeout(() => {
      restartTicker(1000, true);
      setPlaying(true);
    }, 100);
  }

  let changeSpeed = (tickerSpeed) => {
    stopTicker();
    setTimeout(() => {
      restartTicker(tickerSpeed);
    }, 100);
  }

  let stopTicker = () => {
    clearInterval(int);
  }


  let restartTicker = (tickerTime, restart) => {
    let index = restart ? 1 : progressIndex;
    setDate(runRaw[index].date);
    let interval = setInterval(() => {
      let runsByDate = runRaw.slice(0, index).sort((a, b) => (a.time > b.time) ? 1 : -1);
      if(runRaw[index-1]){
        let newDate = runRaw[index-1].date;
        setDate(newDate);
        setProgress(Math.ceil(index/runRaw.length * 100));
        setRuns(uniquify(runsByDate));
        setRunners(runnerCount(runsByDate));
        setHoldDays(runnerDays(runsByDate, holdDays, newDate));
        index++;
        setProgressIndex(index);
        if(index > runRaw.length){
          stopTicker();
          console.log("DONE!");
          setPlaying(false);
          setEnded(true);

          const dt = new Date();
          let dateToday = dateFormat(dt, "yyyy-mm-dd");
          setDate(dateToday);
          setHoldDays(runnerDays(runsByDate, holdDays, dateToday));
        }
      }
    }, tickerTime);
    setInt(interval);
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

  const transitionsHoldDays = useTransition(
    holdDays.map((data, i) => ({ ...data, y: i * height })),
    d => d.player,
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y })
    }
  );

  const transitionsRunCount = useTransition(
    runners.map((data, i) => ({ ...data, y: i * height })),
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
      <SEO title={`${game.name}`} description={`This animated graph visualizes timeline of the verified runs for ${game.name} in ${game.category.name} category that have been in the best 20 at the time of their submission.`}/>
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
      <div className="controller">
        <div className="buttons">
          <div className={playing ? "button ms-Icon ms-Icon--Pause" : "button ms-Icon ms-Icon--Play"} onClick={ended ? () => replay() : () => toggle()}></div>
          <div className="button ms-Icon ms-Icon--FastForwardOneX" onClick={() => changeSpeed(1000)}></div>
          <div className="button ms-Icon ms-Icon--FastForwardFourX" onClick={() => changeSpeed(500)}></div>
          <div className="button ms-Icon ms-Icon--FastForwardEightX" onClick={() => changeSpeed(250)}></div>
        </div>
        <div className="progress"><div className="progressDone" style={{width: `${progress}%`}}></div></div>
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
            <div className="sideStats">
              {transitionsHoldDays.map(({ item, props: { y, ...rest }, key }, index) => {
                let flagUrl = parse(item.country.split("/")[0] ? flag(item.country.split("/")[0]) : "🏁")[0].url;
                return (
                  <animated.div key={key} className="runItem" style={{
                      transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
                      ...rest
                    }}>
                      <div className="playerName">
                        <img src={flagUrl} style={{height: 20, display: "inline"}}/>
                        <span>{item.player}</span>
                      </div>
                      <div className="runTime">{item.daysHold} Days</div>
                    </animated.div>
                  );
                })}
            </div>
            <h2>Most Active Runners</h2>
            <div className="sideStats">
              {transitionsRunCount.map(({ item, props: { y, ...rest }, key }, index) => {
                let flagUrl = parse(item.country.split("/")[0] ? flag(item.country.split("/")[0]) : "🏁")[0].url;
                return (
                  <animated.div key={key} className="runItem" style={{
                      transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
                      ...rest
                    }}>
                      <div className="playerName">
                        <img src={flagUrl} style={{height: 20, display: "inline"}}/>
                        <span>{item.player}</span>
                      </div>
                      <div className="runTime">{item.timesRun} Runs</div>
                    </animated.div>
                  );
                })}
            </div>
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

function runnerCount(runs){
  let mostRunners = [];
  runs.forEach((item, i) => {
    if(mostRunners.filter(r => r.player == item.player).length == 0){
      item.timesRun = 1;
      mostRunners.push(item);
    }else{
      mostRunners.map(r => {
        if(r.player == item.player){
          r.timesRun += 1;
        }
        return r;
      })
    }
  });

  mostRunners = mostRunners.sort((a, b) => (a.timesRun > b.timesRun) ? -1 : 1).slice(0, 7).map((data, i) => ({ ...data, y: i * 30 }));

  return mostRunners;
}

let prevDate = null;

function runnerDays(runs, hd, currentDate){
  let mostDays = hd;
  let bestRunner = runs[0];

  if(mostDays.filter(r => r.player == bestRunner.player).length == 0){
    bestRunner.daysHold = 0;
    mostDays.push(bestRunner);
  }else{
    mostDays.map(r => {
      if(r.player == bestRunner.player){
        if(prevDate){
          r.daysHold += dayDifference(prevDate, currentDate);
        }
      }
      return r;
    })
  }

  mostDays = mostDays.sort((a, b) => (a.daysHold > b.daysHold) ? -1 : 1).slice(0, 7).map((data, i) => ({ ...data, y: i * 30 }));
  prevDate = currentDate;

  return mostDays;
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

function dayDifference(d1, d2){
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
