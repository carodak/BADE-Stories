/********************* 
 * Bade_Stories Test *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'BADE_Stories';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
/* 
Use danfos to convert the data into dataframe
We will be able to make calculations on the data more easily
and in a clearer way for a future reading of the code.
The calculations are also similar to those with Python and Pandas,
so it is less work.
*/

var danfosUrl = './bundle.min.js';


function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript(danfosUrl);
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('Gainsboro'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(langRoutineBegin());
flowScheduler.add(langRoutineEachFrame());
flowScheduler.add(langRoutineEnd());
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const practicesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practicesLoopBegin(practicesLoopScheduler));
flowScheduler.add(practicesLoopScheduler);
flowScheduler.add(practicesLoopEnd);
flowScheduler.add(readyRoutineBegin());
flowScheduler.add(readyRoutineEachFrame());
flowScheduler.add(readyRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'conditions/BADE_stories_task_conditions_practice_en.csv', 'path': 'conditions/BADE_stories_task_conditions_practice_en.csv'},
    {'name': 'conditions/BADE_stories_task_conditions_en.csv', 'path': 'conditions/BADE_stories_task_conditions_en.csv'},
    {'name': 'bundle.min.js', 'path': 'bundle.min.js'},
    {'name': 'BADE_en.png', 'path': 'BADE_en.png'},
    {'name': 'button.png', 'path': 'button.png'},
    {'name': 'conditions/BADE_stories_task_conditions_practice_fr.csv', 'path': 'conditions/BADE_stories_task_conditions_practice_fr.csv'},
    {'name': 'BADE_fr.png', 'path': 'BADE_fr.png'},
    {'name': 'conditions/BADE_stories_task_conditions_fr.csv', 'path': 'conditions/BADE_stories_task_conditions_fr.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var langClock;
var date1;
var d;
var startingDate;
var french;
var english;
var practiceConditions;
var trialConditions;
var redcapVars;
var button1;
var button2;
var txt_instr;
var txt_button1;
var txt_button2;
var mouse1;
var instrClock;
var thisExp;
var win;
var event;
var img_instr;
var end_instr_text1;
var expTitle;
var expEx;
var img_i;
var instr_text_1;
var instr_text_1_2;
var instr_text_2;
var next_i;
var txt_next_i;
var mouse_i;
var pracClock;
var mouse_clicked;
var randomSliders_pr;
var stateBox_pr;
var statement1_pr;
var statement2_pr;
var statement3_pr;
var slider1_pr;
var slider2_pr;
var slider3_pr;
var slider4_pr;
var sliderS1_pr;
var sliderS2_pr;
var sliderS3_pr;
var sliderS4_pr;
var sliderV1_pr;
var sliderV2_pr;
var sliderV3_pr;
var sliderV4_pr;
var next_pr;
var txt_next_pr;
var mouse_pr;
var readyClock;
var txt_rdy;
var next_rdy;
var txt_next_rdy;
var mouse_rdy;
var trialClock;
var currentTrial;
var randomSliders;
var stateBox;
var statement1;
var statement2;
var statement3;
var slider1;
var slider2;
var slider3;
var slider4;
var sliderS1;
var sliderS2;
var sliderS3;
var sliderS4;
var sliderV1;
var sliderV2;
var sliderV3;
var sliderV4;
var next;
var txt_next;
var mouse;
var thanksClock;
var thx;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "lang"
  langClock = new util.Clock();
  // Run 'Begin Experiment' code from code_lang
  date1 = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  d = new Date(date1);
  startingDate =  d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " +
  d.getHours() + ":" + d.getMinutes();
  
  //Set french or english variable to true when the language is selected
  french = false;
  english = false;
  
  practiceConditions = "";
  trialConditions = "";
  
  redcapVars = [];
  
  //Remove illegal characters in participants' name to avoid errors in filenames
  function CheckFilename(){
     expInfo['participant']= expInfo['participant'].replace(/([^.a-z0-9]+)/gi, '-');
  }
  
  // Load redcap variables from Google Spreadsheet
  function LoadRedcapVars(redcapVars){
      try {
          // Retrieve data between B2 and max range
          let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2HrrKB78yxkxRABtTlghA1reADPaQN32V5oJ2BbRXEZOhr8YrkGDZaIVZtjqNMXWTLzeG6-xRaEBl/pub?gid=0&range=B2:AA2&output=csv";
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4) {
                  let array = xmlhttp.responseText.split(',');
                  for (let i = 0; i < array.length; i++) {
                      redcapVars.push(array[i]);
                  }
              }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send(null);
          return redcapVars;
      }
      catch(err) {
          console.log("Erreur while loading Redcap variables", err.message);
      }
      
  }
  
  CheckFilename();
  redcapVars = LoadRedcapVars(redcapVars);
  button1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button1', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, 0.02], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  button2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button2', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.07)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  txt_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_instr',
    text: 'Veuillez sélectionner votre langue.\n\nPlease select your language.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.18], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -3.0 
  });
  
  txt_button1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_button1',
    text: 'FRANÇAIS',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -4.0 
  });
  
  txt_button2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_button2',
    text: 'ENGLISH',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -5.0 
  });
  
  mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse1.mouseClock = new util.Clock();
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  // Run 'Begin Experiment' code from code_i
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  Array.prototype.append = [].push;
  
  //We'll set the picture depending on the language
  img_instr = "";
  
  end_instr_text1="";
  expTitle = new visual.TextStim({
    win: psychoJS.window,
    name: 'expTitle',
    text: 'Story task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.395], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -1.0 
  });
  
  expEx = new visual.TextStim({
    win: psychoJS.window,
    name: 'expEx',
    text: '(Example)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.345], height: 0.018,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -2.0 
  });
  
  img_i = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_i', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.09], size : [0.737, 0.47],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  instr_text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.245)], height: 0.021,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -4.0 
  });
  
  instr_text_1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_1_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.27)], height: 0.021,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -5.0 
  });
  
  instr_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_2',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.245)], height: 0.021,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 0,
    depth: -6.0 
  });
  
  next_i = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_i', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.463)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  txt_next_i = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_next_i',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -8.0 
  });
  
  mouse_i = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_i.mouseClock = new util.Clock();
  // Initialize components for Routine "prac"
  pracClock = new util.Clock();
  // Run 'Begin Experiment' code from code_pr
  mouse_clicked = false;
  randomSliders_pr = [];
  stateBox_pr = new visual.Rect ({
    win: psychoJS.window, name: 'stateBox_pr', 
    width: [1.4, 0.3][0], height: [1.4, 0.3][1],
    ori: 0, pos: [0, 0.285],
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color('lightGrey'),
    fillColor: new util.Color('lightGrey'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  statement1_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'statement1_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  statement2_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'statement2_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.28], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -3.0 
  });
  
  statement3_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'statement3_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.21], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -4.0 
  });
  
  slider1_pr = new visual.Slider({
    win: psychoJS.window, name: 'slider1_pr',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, 0.01], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  slider2_pr = new visual.Slider({
    win: psychoJS.window, name: 'slider2_pr',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, (- 0.122)], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  slider3_pr = new visual.Slider({
    win: psychoJS.window, name: 'slider3_pr',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, (- 0.25)], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  slider4_pr = new visual.Slider({
    win: psychoJS.window, name: 'slider4_pr',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, (- 0.38)], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  sliderS1_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS1_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -9.0 
  });
  
  sliderS2_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS2_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -10.0 
  });
  
  sliderS3_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS3_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -11.0 
  });
  
  sliderS4_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS4_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -12.0 
  });
  
  sliderV1_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV1_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -13.0 
  });
  
  sliderV2_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV2_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -14.0 
  });
  
  sliderV3_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV3_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -15.0 
  });
  
  sliderV4_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV4_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -16.0 
  });
  
  next_pr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_pr', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.463)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -17.0 
  });
  txt_next_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_next_pr',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -18.0 
  });
  
  mouse_pr = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pr.mouseClock = new util.Clock();
  // Initialize components for Routine "ready"
  readyClock = new util.Clock();
  txt_rdy = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_rdy',
    text: 'Ready to begin?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -1.0 
  });
  
  next_rdy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_rdy', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  txt_next_rdy = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_next_rdy',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -3.0 
  });
  
  mouse_rdy = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_rdy.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  mouse_clicked = false; //boulean to check if the button was pressed
  // Save the current trial
  currentTrial = 1;
  randomSliders = [];
  stateBox = new visual.Rect ({
    win: psychoJS.window, name: 'stateBox', 
    width: [1.4, 0.3][0], height: [1.4, 0.3][1],
    ori: 0, pos: [0, 0.285],
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color('lightGrey'),
    fillColor: new util.Color('lightGrey'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  statement1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'statement1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -2.0 
  });
  
  statement2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'statement2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.28], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1.0,
    depth: -3.0 
  });
  
  statement3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'statement3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.21], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1.0,
    depth: -4.0 
  });
  
  slider1 = new visual.Slider({
    win: psychoJS.window, name: 'slider1',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, 0.01], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  slider2 = new visual.Slider({
    win: psychoJS.window, name: 'slider2',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, (- 0.122)], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  slider3 = new visual.Slider({
    win: psychoJS.window, name: 'slider3',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, (- 0.25)], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  slider4 = new visual.Slider({
    win: psychoJS.window, name: 'slider4',
    startValue: undefined,
    size: [1.4, 0.03], pos: [0, (- 0.38)], ori: 0, units: 'height',
    labels: ["0%", "100%"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0, style: ["RATING"],
    color: new util.Color('Gray'), markerColor: new util.Color('Black'), lineColor: new util.Color('White'), 
    opacity: 1, fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  sliderS1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -9.0 
  });
  
  sliderS2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -10.0 
  });
  
  sliderS3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -11.0 
  });
  
  sliderS4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderS4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -12.0 
  });
  
  sliderV1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -13.0 
  });
  
  sliderV2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -14.0 
  });
  
  sliderV3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -15.0 
  });
  
  sliderV4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderV4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -16.0 
  });
  
  next = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.463)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -17.0 
  });
  txt_next = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_next',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -18.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thx = new visual.TextStim({
    win: psychoJS.window,
    name: 'thx',
    text: 'Thank you for your participation!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var langComponents;
function langRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'lang' ---
    t = 0;
    langClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    thisExp=psychoJS.experiment;
    win=psychoJS.window;
    event=psychoJS.eventManager;
    Array.prototype.append = [].push;
    txt_button1.setPos(button1.pos);
    txt_button2.setPos(button2.pos);
    // setup some python lists for storing info about the mouse1
    mouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse1.mouseClock.reset();
    // keep track of which components have finished
    langComponents = [];
    langComponents.push(button1);
    langComponents.push(button2);
    langComponents.push(txt_instr);
    langComponents.push(txt_button1);
    langComponents.push(txt_button2);
    langComponents.push(mouse1);
    
    for (const thisComponent of langComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function langRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'lang' ---
    // get current time
    t = langClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_lang
    //Change the color of highlighed rect
    function HighlightRect(rec1, rec2, txt_rec1, txt_rec2, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
         if (rec2.contains(mouse)) {
            rec2.setOpacity(0.99);
            txt_rec2.setOpacity(2);
         } 
        else{
            rec2.setOpacity(0.73);
            txt_rec2.setOpacity(0.73);
        }
    }
    
    //Function that is going to set the chosen language
    function SelectLanguage(rec1, rec2, mouse){
        if (rec1.contains(mouse) && mouse.getPressed()[0] === 1 ) {
            french = true;
            practiceConditions = "conditions/BADE_stories_task_conditions_practice_fr.csv";
            trialConditions = "conditions/BADE_stories_task_conditions_fr.csv";
        }
        else if (rec2.contains(mouse) && mouse.getPressed()[0] === 1 ) {
            english = true;
            practiceConditions = "conditions/BADE_stories_task_conditions_practice_en.csv";
            trialConditions = "conditions/BADE_stories_task_conditions_en.csv";
        }
    }
    
    HighlightRect(button1,  button2, txt_button1, txt_button2, mouse1);
    SelectLanguage(button1,  button2, mouse1);
    
    
    // *button1* updates
    if (t >= 0.0 && button1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button1.tStart = t;  // (not accounting for frame time here)
      button1.frameNStart = frameN;  // exact frame index
      
      button1.setAutoDraw(true);
    }

    
    // *button2* updates
    if (t >= 0.0 && button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button2.tStart = t;  // (not accounting for frame time here)
      button2.frameNStart = frameN;  // exact frame index
      
      button2.setAutoDraw(true);
    }

    
    // *txt_instr* updates
    if (t >= 0.0 && txt_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_instr.tStart = t;  // (not accounting for frame time here)
      txt_instr.frameNStart = frameN;  // exact frame index
      
      txt_instr.setAutoDraw(true);
    }

    
    // *txt_button1* updates
    if (t >= 0.0 && txt_button1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_button1.tStart = t;  // (not accounting for frame time here)
      txt_button1.frameNStart = frameN;  // exact frame index
      
      txt_button1.setAutoDraw(true);
    }

    
    // *txt_button2* updates
    if (t >= 0.0 && txt_button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_button2.tStart = t;  // (not accounting for frame time here)
      txt_button2.frameNStart = frameN;  // exact frame index
      
      txt_button2.setAutoDraw(true);
    }

    // *mouse1* updates
    if (t >= 0.0 && mouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse1.tStart = t;  // (not accounting for frame time here)
      mouse1.frameNStart = frameN;  // exact frame index
      
      mouse1.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button1, button2]) {
            if (obj.contains(mouse1)) {
              gotValidClick = true;
              mouse1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of langComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function langRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'lang' ---
    for (const thisComponent of langComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_lang
    thisExp.addData("Language", english===true ? "en" : "fr");
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "lang" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var curInstr;
var instr_clicked;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_i
    curInstr = 1; //value of the current displayed instr
    instr_clicked = false; //true if we clicked on instr1
    //Change the text according to the selected language, function SetTxtInstr()
    function SetTxtInstr(){
        if (english){
            expTitle.text = "Story task";
            expEx.text = "(Example)";
            img_instr = "BADE_en.png";
            instr_text_1.text = "You will be shown three statements, presented one at a time, describing an event or person. Each new statement will provide additional information about the event or person that is being described. Below the statements, you will also see four interpretations about the event or person being described in the statement(s). Each interpretation has its own scale (from 0 - 100%), where you will be asked to rate the likelihood of each interpretation given the information described in the statement(s). Rate how well you believe each interpretation relates to the event or person described in the statement(s).";
            instr_text_1_2 = new visual.TextStim({"win": win, "color":[-1,-1,-1], "colorSpace":'rgb', "font": "Arial", "height": 0.022,"pos":[0, -0.38],"bold":true});
            instr_text_1_2.text = "It is important to rate each of the four interpretations independently from one another. Do not compare the interpretations to each other. The total of the interpretations should not necessarily equal 100%.";
            instr_text_2.text = "\n\nAs each new statement is shown, reconsider the ratings you have assigned to each interpretation. Ratings for each interpretation can be changed as much or as little as you like, or can be kept the same if you feel that they have not changed with the addition of a new statement. It is possible that none or many of the interpretations will be a good fit for the statements.\n\nYou will be using the mouse or touchpad to make your ratings. Click on 'Next' to display the next statement. After you have seen all three statements, click 'Done' to move to the next trial. You will now complete 2 practice trials before beginning the experiment.";
            txt_next_i.text = "NEXT";
        }
        else{
            expTitle.text = "Tâche d'histoires";
            expEx.text = "(Exemple)";
            img_instr = "BADE_fr.png";
            instr_text_1.text = "Trois énoncés vous seront montrés, un à la fois. Chacun décrit un événement ou une personne. Chaque nouvel énoncé apportera de l’information additionnelle à propos de l’événement ou de la personne décrit(e). Sous les énoncés, vous verrez aussi quatre interprétations de l’événement ou de la personne décrit(e) dans le(les) énoncé(s). Chaque interprétation a sa propre échelle (de 0 – 100%), vous aurez donc à évaluer la probabilité que chaque interprétation décrive l’énoncé, selon les informations données. Évaluez à quel point vous pensez que chaque interprétation se rapporte à l’évènement ou la personne décrite dans l’(les) énoncé(s).";
            instr_text_1_2 = new visual.TextStim({"win": win, "color":[-1,-1,-1], "colorSpace":'rgb', "font": "Arial", "height": 0.022,"pos":[0, -0.38],"bold":true});
            instr_text_1_2.text = "Il est important d’évaluer chacune des quatre interprétations indépendamment les unes des autres. Ne comparez pas les interprétations entres elles. Le total des interprétations ne doit pas faire nécessairement 100%.";
            instr_text_2.text = "\n\nÀ chaque nouvel énoncé présenté, reconsidérez les évaluations que vous avez assignées à chaque interprétation. Les évaluations des interprétations peuvent être changées autant que vous le voulez, vous pouvez aussi les laisser intactes, si vous avez l’impression qu’elles n'ont pas changé avec l’addition de nouveaux énoncés. Il est possible qu’aucune ou que plusieurs interprétations soi(en)t un bon pairage avec les énoncés.\n\nVous utiliserez la souris ou le pavé tactile pour faire vos évaluations. Appuyez sur ‘Suivant’ pour afficher le prochain énoncé. Après avoir vu tous les trois énoncés, appuyez sur ‘Complété’, pour accéder à l’essai suivant. Vous allez maintenant faire 2 essais de pratique, avant de commencer l’exercice.";
            txt_next_i.text = "SUIVANT";
        }
    }
    
    SetTxtInstr();
    img_i.setImage(img_instr);
    txt_next_i.setPos(next_i.pos);
    // setup some python lists for storing info about the mouse_i
    // current position of the mouse:
    mouse_i.x = [];
    mouse_i.y = [];
    mouse_i.leftButton = [];
    mouse_i.midButton = [];
    mouse_i.rightButton = [];
    mouse_i.time = [];
    mouse_i.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_i.mouseClock.reset();
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(expTitle);
    instrComponents.push(expEx);
    instrComponents.push(img_i);
    instrComponents.push(instr_text_1);
    instrComponents.push(instr_text_1_2);
    instrComponents.push(instr_text_2);
    instrComponents.push(next_i);
    instrComponents.push(txt_next_i);
    instrComponents.push(mouse_i);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_i
    //Function that will display next instruction or go to next routine
    function DisplayNext(){
        //Display next instruction
        if (next_i.contains(mouse_i) && mouse_i.getPressed()[0] === 1){
            if (!instr_clicked){
                instr_clicked = true;
                if (curInstr === 1){
                    instr_text_1.setOpacity(0);
                    instr_text_1_2.setOpacity(0);
                    instr_text_2.setOpacity(1);
                    curInstr = 2;
                    }
                else{
                   continueRoutine = false; //go to next routine
                 }
            }     
        }
        else{
            instr_clicked = false;
         }
    }
    
    //Change the color of highlighed rect
    function HighlightRect(rec1, txt_rec1, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
    }
    
    HighlightRect(next_i, txt_next_i, mouse_i);
    
    DisplayNext();
    
    // *expTitle* updates
    if (t >= 0.0 && expTitle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      expTitle.tStart = t;  // (not accounting for frame time here)
      expTitle.frameNStart = frameN;  // exact frame index
      
      expTitle.setAutoDraw(true);
    }

    
    // *expEx* updates
    if (t >= 0.0 && expEx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      expEx.tStart = t;  // (not accounting for frame time here)
      expEx.frameNStart = frameN;  // exact frame index
      
      expEx.setAutoDraw(true);
    }

    
    // *img_i* updates
    if (t >= 0.0 && img_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_i.tStart = t;  // (not accounting for frame time here)
      img_i.frameNStart = frameN;  // exact frame index
      
      img_i.setAutoDraw(true);
    }

    
    // *instr_text_1* updates
    if (t >= 0.0 && instr_text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_1.tStart = t;  // (not accounting for frame time here)
      instr_text_1.frameNStart = frameN;  // exact frame index
      
      instr_text_1.setAutoDraw(true);
    }

    
    // *instr_text_1_2* updates
    if (t >= 0.0 && instr_text_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_1_2.tStart = t;  // (not accounting for frame time here)
      instr_text_1_2.frameNStart = frameN;  // exact frame index
      
      instr_text_1_2.setAutoDraw(true);
    }

    
    // *instr_text_2* updates
    if (t >= 0.0 && instr_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_2.tStart = t;  // (not accounting for frame time here)
      instr_text_2.frameNStart = frameN;  // exact frame index
      
      instr_text_2.setAutoDraw(true);
    }

    
    // *next_i* updates
    if (t >= 0.0 && next_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_i.tStart = t;  // (not accounting for frame time here)
      next_i.frameNStart = frameN;  // exact frame index
      
      next_i.setAutoDraw(true);
    }

    
    // *txt_next_i* updates
    if (t >= 0.0 && txt_next_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_next_i.tStart = t;  // (not accounting for frame time here)
      txt_next_i.frameNStart = frameN;  // exact frame index
      
      txt_next_i.setAutoDraw(true);
    }

    // *mouse_i* updates
    if (t >= 0.0 && mouse_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_i.tStart = t;  // (not accounting for frame time here)
      mouse_i.frameNStart = frameN;  // exact frame index
      
      mouse_i.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_i.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_i.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_i.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_i]) {
            if (obj.contains(mouse_i)) {
              gotValidClick = true;
              mouse_i.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_i.getPos();
          mouse_i.x.push(_mouseXYs[0]);
          mouse_i.y.push(_mouseXYs[1]);
          mouse_i.leftButton.push(_mouseButtons[0]);
          mouse_i.midButton.push(_mouseButtons[1]);
          mouse_i.rightButton.push(_mouseButtons[2]);
          mouse_i.time.push(mouse_i.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_i.x', mouse_i.x);
    psychoJS.experiment.addData('mouse_i.y', mouse_i.y);
    psychoJS.experiment.addData('mouse_i.leftButton', mouse_i.leftButton);
    psychoJS.experiment.addData('mouse_i.midButton', mouse_i.midButton);
    psychoJS.experiment.addData('mouse_i.rightButton', mouse_i.rightButton);
    psychoJS.experiment.addData('mouse_i.time', mouse_i.time);
    psychoJS.experiment.addData('mouse_i.clicked_name', mouse_i.clicked_name);
    
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practices;
function practicesLoopBegin(practicesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practices = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: practiceConditions,
      seed: undefined, name: 'practices'
    });
    psychoJS.experiment.addLoop(practices); // add the loop to the experiment
    currentLoop = practices;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice of practices) {
      snapshot = practices.getSnapshot();
      practicesLoopScheduler.add(importConditions(snapshot));
      practicesLoopScheduler.add(pracRoutineBegin(snapshot));
      practicesLoopScheduler.add(pracRoutineEachFrame());
      practicesLoopScheduler.add(pracRoutineEnd(snapshot));
      practicesLoopScheduler.add(practicesLoopEndIteration(practicesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practicesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practices);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practicesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: trialConditions,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var curStatement;
var end_text;
var col;
var slider1_is_initialized;
var slider2_is_initialized;
var slider3_is_initialized;
var slider4_is_initialized;
var allRatings;
var trialDuration_pr;
var pracComponents;
function pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac' ---
    t = 0;
    pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_pr
    curStatement = 1; //display first statement by default
    end_text = ""; //text of ending button
    col = new util.Color('black');
    slider1_is_initialized = false; //true when we set the color of slider1..
    slider2_is_initialized = false;
    slider3_is_initialized = false;
    slider4_is_initialized = false;
    allRatings = false; //true when the user rated on all 4 sliders
    
    // Save results
    trialDuration_pr = -1;
    
    //define sliders (defining them here fix the labels position issue)
    slider1_pr = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, 0.01], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    slider2_pr = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, -0.122], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    slider3_pr = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, -0.25], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    slider4_pr = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, -0.38], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    
    // Shuffle the statements
    randomSliders_pr = 
    [ 
        [0, "NL", sliderSub1, ["", "", ""] ],
        [1, "EL", sliderSub2, ["", "", ""] ],
        [2, "A", sliderSub3, ["", "", ""] ],
        [3, "T", sliderSub4, ["", "", ""] ]
    ];
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    shuffleArray(randomSliders_pr);
    
    //Change the text according to the selected language, function SetTxtInstr()
    function SetTxtInstr(){
        if (english){
            txt_next_pr.text = "NEXT";
            end_text = "DONE";
        }
        else{
            txt_next_pr.text = "SUIVANT";
            end_text = "COMPLÉTÉ";
        }
    }
    
    SetTxtInstr();
    statement1_pr.setText(state1);
    statement2_pr.setOpacity(0);
    statement2_pr.setText(state2);
    statement3_pr.setOpacity(0);
    statement3_pr.setText(state3);
    slider1_pr.reset()
    slider2_pr.reset()
    slider3_pr.reset()
    slider4_pr.reset()
    sliderS1_pr.setPos([slider1_pr.pos[0], (slider1_pr.pos[1] + 0.03)]);
    sliderS1_pr.setText(randomSliders_pr[0][2]);
    sliderS2_pr.setPos([slider2_pr.pos[0], (slider2_pr.pos[1] + 0.03)]);
    sliderS2_pr.setText(randomSliders_pr[1][2]);
    sliderS3_pr.setPos([slider3_pr.pos[0], (slider3_pr.pos[1] + 0.03)]);
    sliderS3_pr.setText(randomSliders_pr[2][2]);
    sliderS4_pr.setPos([slider4_pr.pos[0], (slider4_pr.pos[1] + 0.03)]);
    sliderS4_pr.setText(randomSliders_pr[3][2]);
    sliderV1_pr.setPos([(slider1_pr.pos[0] + 0.74), slider1_pr.pos[1]]);
    sliderV2_pr.setPos([(slider2_pr.pos[0] + 0.74), slider2_pr.pos[1]]);
    sliderV3_pr.setPos([(slider3_pr.pos[0] + 0.74), slider3_pr.pos[1]]);
    sliderV4_pr.setPos([(slider4_pr.pos[0] + 0.74), slider4_pr.pos[1]]);
    txt_next_pr.setPos(next_pr.pos);
    // setup some python lists for storing info about the mouse_pr
    // current position of the mouse:
    mouse_pr.x = [];
    mouse_pr.y = [];
    mouse_pr.leftButton = [];
    mouse_pr.midButton = [];
    mouse_pr.rightButton = [];
    mouse_pr.time = [];
    mouse_pr.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_pr.mouseClock.reset();
    // keep track of which components have finished
    pracComponents = [];
    pracComponents.push(stateBox_pr);
    pracComponents.push(statement1_pr);
    pracComponents.push(statement2_pr);
    pracComponents.push(statement3_pr);
    pracComponents.push(slider1_pr);
    pracComponents.push(slider2_pr);
    pracComponents.push(slider3_pr);
    pracComponents.push(slider4_pr);
    pracComponents.push(sliderS1_pr);
    pracComponents.push(sliderS2_pr);
    pracComponents.push(sliderS3_pr);
    pracComponents.push(sliderS4_pr);
    pracComponents.push(sliderV1_pr);
    pracComponents.push(sliderV2_pr);
    pracComponents.push(sliderV3_pr);
    pracComponents.push(sliderV4_pr);
    pracComponents.push(next_pr);
    pracComponents.push(txt_next_pr);
    pracComponents.push(mouse_pr);
    
    for (const thisComponent of pracComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pracRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac' ---
    // get current time
    t = pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_pr
    //Initialize slider
    function InitializeSlider(slider){
         try {
            slider._skin.STANDARD.MARKER_COLOR = col;
            slider._skin.MARKER_SIZE = [0.025, 0.025];
            slider._barSize = [1, 0.01];
            slider._onChange(true)();
            slider._setupSlider();
        } catch (err) {}
    }
    
    //Change the color of highlighed rect
    function HighlightRect(rec1, txt_rec1, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
    }
    
    //Prepare the initialisation of the sliders
    function PrepSlidersInit(){
        if (!slider1_is_initialized && statement1_pr.status === STARTED){
            slider1_is_initialized  = true;
            slider2_is_initialized  = true;
            slider3_is_initialized  = true;
            slider4_is_initialized  = true;
            InitializeSliders();
        }    
    }
    
    //Initialize sliders
    function InitializeSliders(){
        const array_ = [slider1_pr,slider2_pr,slider3_pr,slider4_pr];
        array_.map(x =>InitializeSlider(x));
    }
    
    // Check if the user rated on all sliders
    function CheckAllRatingsDone(){
        if (slider1_pr.getRating() !== undefined && slider2_pr.getRating() !== undefined && slider3_pr.getRating() !== undefined && slider4_pr.getRating() !== undefined){
            allRatings = true;
         }
     else
        allRatings = false;
    }
    
    //Function that will display next instruction or go to next routine
    function DisplayNext(){
        //Display next instruction
        if (next_pr.contains(mouse_pr) && mouse_pr.getPressed()[0] === 1 && allRatings){
            if (!mouse_clicked){
                mouse_clicked = true;
                if (curStatement === 1){
                    statement2_pr.setOpacity(1);
                    randomSliders_pr[0][3][curStatement-1] = slider1_pr.getRating();
                    randomSliders_pr[1][3][curStatement-1] = slider2_pr.getRating();
                    randomSliders_pr[2][3][curStatement-1] = slider3_pr.getRating();
                    randomSliders_pr[3][3][curStatement-1] = slider4_pr.getRating();
                    curStatement = curStatement + 1;
                }
                else if(curStatement === 2){
                    statement3_pr.setOpacity(1);
                    randomSliders_pr[0][3][curStatement-1] = slider1_pr.getRating();
                    randomSliders_pr[1][3][curStatement-1] = slider2_pr.getRating();
                    randomSliders_pr[2][3][curStatement-1] = slider3_pr.getRating();
                    randomSliders_pr[3][3][curStatement-1] = slider4_pr.getRating();
                    curStatement = curStatement + 1;
                    txt_next_pr.text = end_text;
                }
                else{
                    randomSliders_pr[0][3][curStatement-1] = slider1_pr.getRating();
                    randomSliders_pr[1][3][curStatement-1] = slider2_pr.getRating();
                    randomSliders_pr[2][3][curStatement-1] = slider3_pr.getRating();
                    randomSliders_pr[3][3][curStatement-1] = slider4_pr.getRating();
                    trialDuration_pr = t
                    continueRoutine = false; //go to next routine
                 }
            }     
        }
        else{
            mouse_clicked = false;
         }
    }
    
    //Display ratings values:
    function DisplayRating(slider_,slider_score){
        if(slider_.getRating()){
            slider_score.text = Math.round(slider_.markerPos) + "%";
        }
    }
    
    //Display rating of each slider
    function DisplayRatings(){
        const array1 = [[slider1_pr, sliderV1_pr],[slider2_pr,sliderV2_pr],[slider3_pr, sliderV3_pr], [slider4_pr, sliderV4_pr]];
        array1.map(x =>DisplayRating(x[0],x[1]));
    }
    
    PrepSlidersInit();
    CheckAllRatingsDone();
    DisplayNext();
    HighlightRect(next_pr, txt_next_pr, mouse_pr);
    DisplayRatings();
    
    // *stateBox_pr* updates
    if (t >= 0.0 && stateBox_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stateBox_pr.tStart = t;  // (not accounting for frame time here)
      stateBox_pr.frameNStart = frameN;  // exact frame index
      
      stateBox_pr.setAutoDraw(true);
    }

    
    // *statement1_pr* updates
    if (t >= 0.0 && statement1_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statement1_pr.tStart = t;  // (not accounting for frame time here)
      statement1_pr.frameNStart = frameN;  // exact frame index
      
      statement1_pr.setAutoDraw(true);
    }

    
    // *statement2_pr* updates
    if (t >= 0.0 && statement2_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statement2_pr.tStart = t;  // (not accounting for frame time here)
      statement2_pr.frameNStart = frameN;  // exact frame index
      
      statement2_pr.setAutoDraw(true);
    }

    
    // *statement3_pr* updates
    if (t >= 0.0 && statement3_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statement3_pr.tStart = t;  // (not accounting for frame time here)
      statement3_pr.frameNStart = frameN;  // exact frame index
      
      statement3_pr.setAutoDraw(true);
    }

    
    // *slider1_pr* updates
    if (t >= 0.0 && slider1_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider1_pr.tStart = t;  // (not accounting for frame time here)
      slider1_pr.frameNStart = frameN;  // exact frame index
      
      slider1_pr.setAutoDraw(true);
    }

    
    // *slider2_pr* updates
    if (t >= 0.0 && slider2_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider2_pr.tStart = t;  // (not accounting for frame time here)
      slider2_pr.frameNStart = frameN;  // exact frame index
      
      slider2_pr.setAutoDraw(true);
    }

    
    // *slider3_pr* updates
    if (t >= 0.0 && slider3_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider3_pr.tStart = t;  // (not accounting for frame time here)
      slider3_pr.frameNStart = frameN;  // exact frame index
      
      slider3_pr.setAutoDraw(true);
    }

    
    // *slider4_pr* updates
    if (t >= 0.0 && slider4_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider4_pr.tStart = t;  // (not accounting for frame time here)
      slider4_pr.frameNStart = frameN;  // exact frame index
      
      slider4_pr.setAutoDraw(true);
    }

    
    // *sliderS1_pr* updates
    if (t >= 0.0 && sliderS1_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS1_pr.tStart = t;  // (not accounting for frame time here)
      sliderS1_pr.frameNStart = frameN;  // exact frame index
      
      sliderS1_pr.setAutoDraw(true);
    }

    
    // *sliderS2_pr* updates
    if (t >= 0.0 && sliderS2_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS2_pr.tStart = t;  // (not accounting for frame time here)
      sliderS2_pr.frameNStart = frameN;  // exact frame index
      
      sliderS2_pr.setAutoDraw(true);
    }

    
    // *sliderS3_pr* updates
    if (t >= 0.0 && sliderS3_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS3_pr.tStart = t;  // (not accounting for frame time here)
      sliderS3_pr.frameNStart = frameN;  // exact frame index
      
      sliderS3_pr.setAutoDraw(true);
    }

    
    // *sliderS4_pr* updates
    if (t >= 0.0 && sliderS4_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS4_pr.tStart = t;  // (not accounting for frame time here)
      sliderS4_pr.frameNStart = frameN;  // exact frame index
      
      sliderS4_pr.setAutoDraw(true);
    }

    
    // *sliderV1_pr* updates
    if (t >= 0.0 && sliderV1_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV1_pr.tStart = t;  // (not accounting for frame time here)
      sliderV1_pr.frameNStart = frameN;  // exact frame index
      
      sliderV1_pr.setAutoDraw(true);
    }

    
    // *sliderV2_pr* updates
    if (t >= 0.0 && sliderV2_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV2_pr.tStart = t;  // (not accounting for frame time here)
      sliderV2_pr.frameNStart = frameN;  // exact frame index
      
      sliderV2_pr.setAutoDraw(true);
    }

    
    // *sliderV3_pr* updates
    if (t >= 0.0 && sliderV3_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV3_pr.tStart = t;  // (not accounting for frame time here)
      sliderV3_pr.frameNStart = frameN;  // exact frame index
      
      sliderV3_pr.setAutoDraw(true);
    }

    
    // *sliderV4_pr* updates
    if (t >= 0.0 && sliderV4_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV4_pr.tStart = t;  // (not accounting for frame time here)
      sliderV4_pr.frameNStart = frameN;  // exact frame index
      
      sliderV4_pr.setAutoDraw(true);
    }

    
    // *next_pr* updates
    if ((allRatings) && next_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_pr.tStart = t;  // (not accounting for frame time here)
      next_pr.frameNStart = frameN;  // exact frame index
      
      next_pr.setAutoDraw(true);
    }

    
    // *txt_next_pr* updates
    if ((allRatings) && txt_next_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_next_pr.tStart = t;  // (not accounting for frame time here)
      txt_next_pr.frameNStart = frameN;  // exact frame index
      
      txt_next_pr.setAutoDraw(true);
    }

    // *mouse_pr* updates
    if (t >= 0.0 && mouse_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pr.tStart = t;  // (not accounting for frame time here)
      mouse_pr.frameNStart = frameN;  // exact frame index
      
      mouse_pr.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_pr.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_pr.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pr.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_pr]) {
            if (obj.contains(mouse_pr)) {
              gotValidClick = true;
              mouse_pr.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_pr.getPos();
          mouse_pr.x.push(_mouseXYs[0]);
          mouse_pr.y.push(_mouseXYs[1]);
          mouse_pr.leftButton.push(_mouseButtons[0]);
          mouse_pr.midButton.push(_mouseButtons[1]);
          mouse_pr.rightButton.push(_mouseButtons[2]);
          mouse_pr.time.push(mouse_pr.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pracComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac' ---
    for (const thisComponent of pracComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_pr
    // Save results
    
    //Save the order the statements were presented 
    psychoJS.experiment.addData('slidersRandomized', randomSliders_pr);
    
    // Reorder array
    function sortArray(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    randomSliders_pr.sort(sortArray);
    
    for (let i=0; i<4; i++){
        let statementType = randomSliders_pr[i][1];
        for (let j=0; j<3; j++){
            let strStatement = "statement".concat((j+1).toString(),"_", statementType);
            psychoJS.experiment.addData(strStatement, randomSliders_pr[i][3][j]);
        }
    }
    
    psychoJS.experiment.addData('trialDuration', trialDuration_pr);
    
    //Reset some elements for next trial
    function ResetElements(){
        statement2_pr.setOpacity(0);
        statement3_pr.setOpacity(0);
        const array2 = [sliderV1_pr, sliderV2_pr, sliderV3_pr, sliderV4_pr];
        array2.map(x =>x.text="");
    }
    
    ResetElements();
    psychoJS.experiment.addData('slider1_pr.response', slider1_pr.getRating());
    psychoJS.experiment.addData('slider1_pr.rt', slider1_pr.getRT());
    psychoJS.experiment.addData('slider1_pr.history', slider1_pr.getHistory());
    psychoJS.experiment.addData('slider2_pr.response', slider2_pr.getRating());
    psychoJS.experiment.addData('slider2_pr.rt', slider2_pr.getRT());
    psychoJS.experiment.addData('slider2_pr.history', slider2_pr.getHistory());
    psychoJS.experiment.addData('slider3_pr.response', slider3_pr.getRating());
    psychoJS.experiment.addData('slider3_pr.rt', slider3_pr.getRT());
    psychoJS.experiment.addData('slider3_pr.history', slider3_pr.getHistory());
    psychoJS.experiment.addData('slider4_pr.response', slider4_pr.getRating());
    psychoJS.experiment.addData('slider4_pr.rt', slider4_pr.getRT());
    psychoJS.experiment.addData('slider4_pr.history', slider4_pr.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_pr.x', mouse_pr.x);
    psychoJS.experiment.addData('mouse_pr.y', mouse_pr.y);
    psychoJS.experiment.addData('mouse_pr.leftButton', mouse_pr.leftButton);
    psychoJS.experiment.addData('mouse_pr.midButton', mouse_pr.midButton);
    psychoJS.experiment.addData('mouse_pr.rightButton', mouse_pr.rightButton);
    psychoJS.experiment.addData('mouse_pr.time', mouse_pr.time);
    psychoJS.experiment.addData('mouse_pr.clicked_name', mouse_pr.clicked_name);
    
    // the Routine "prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var readyComponents;
function readyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ready' ---
    t = 0;
    readyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_rdy
    //Change the text according to the selected language, function SetTxtInstr2()
    function SetTxtReady(){
        if (english){
            txt_rdy.text = "Ready to begin?";
            txt_next_rdy.text = "BEGIN";
        }
        else{
            txt_rdy.text = "Prêt à commencer ?";
            txt_next_rdy.text = "COMMENCER";
        }
    }
    SetTxtReady();
    txt_next_rdy.setPos(next_rdy.pos);
    // setup some python lists for storing info about the mouse_rdy
    mouse_rdy.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_rdy.mouseClock.reset();
    // keep track of which components have finished
    readyComponents = [];
    readyComponents.push(txt_rdy);
    readyComponents.push(next_rdy);
    readyComponents.push(txt_next_rdy);
    readyComponents.push(mouse_rdy);
    
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function readyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ready' ---
    // get current time
    t = readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_rdy
    //Change the color of highlighed rect
    function HighlightRect(rec1, txt_rec1, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
    }
    
    HighlightRect(next_rdy, txt_next_rdy, mouse_rdy);
    
    // *txt_rdy* updates
    if (t >= 0.0 && txt_rdy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_rdy.tStart = t;  // (not accounting for frame time here)
      txt_rdy.frameNStart = frameN;  // exact frame index
      
      txt_rdy.setAutoDraw(true);
    }

    
    // *next_rdy* updates
    if (t >= 0.0 && next_rdy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_rdy.tStart = t;  // (not accounting for frame time here)
      next_rdy.frameNStart = frameN;  // exact frame index
      
      next_rdy.setAutoDraw(true);
    }

    
    // *txt_next_rdy* updates
    if (t >= 0.0 && txt_next_rdy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_next_rdy.tStart = t;  // (not accounting for frame time here)
      txt_next_rdy.frameNStart = frameN;  // exact frame index
      
      txt_next_rdy.setAutoDraw(true);
    }

    // *mouse_rdy* updates
    if (t >= 0.0 && mouse_rdy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_rdy.tStart = t;  // (not accounting for frame time here)
      mouse_rdy.frameNStart = frameN;  // exact frame index
      
      mouse_rdy.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_rdy.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_rdy.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_rdy.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_rdy]) {
            if (obj.contains(mouse_rdy)) {
              gotValidClick = true;
              mouse_rdy.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function readyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ready' ---
    for (const thisComponent of readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    curStatement = 1; //display first statement by default
    end_text = ""; //text of ending button
    col = new util.Color('black');
    slider1_is_initialized = false; //true when we set the color of slider1..
    slider2_is_initialized = false;
    slider3_is_initialized = false;
    slider4_is_initialized = false;
    allRatings = false; //true when the user rated on all 4 sliders
    
    // Save results
    trialDuration = -1
    
    //define sliders (defining them here fix the labels position issue)
    
    slider1 = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, 0.01], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    slider2 = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, -0.122], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    slider3 = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, -0.25], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    slider4 = new visual.Slider({"win": win, "name": "rating", "size": [1.4, 0.03], "pos": [0, -0.38], "labels": ["0%", "100%"], "ticks": [0, 100], "granularity": 0, "style": ["rating"], "color": "Gray", "font": "Arial", "flip": false, "labelHeight": 0.03, "markerColor": [-1, -1, -1], "lineColor": "White", "barSize": [1, 0.01]});
    
    // Shuffle the statements
    randomSliders = 
    [ 
        [0, "NL", sliderSub1, ["", "", ""] ],
        [1, "EL", sliderSub2, ["", "", ""] ],
        [2, "A", sliderSub3, ["", "", ""] ],
        [3, "T", sliderSub4, ["", "", ""] ]
    ];
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    shuffleArray(randomSliders);
    
    //Change the text according to the selected language, function SetTxtInstr()
    function SetTxtInstr(){
        if (english){
            txt_next.text = "NEXT";
            end_text = "DONE";
        }
        else{
            txt_next.text = "SUIVANT";
            end_text = "COMPLÉTÉ";
        }
    }
    
    SetTxtInstr();
    statement1.setText(state1);
    statement2.setOpacity(0);
    statement2.setText(state2);
    statement3.setOpacity(0);
    statement3.setText(state3);
    slider1.reset()
    slider2.reset()
    slider3.reset()
    slider4.reset()
    sliderS1.setPos([slider1.pos[0], (slider1.pos[1] + 0.03)]);
    sliderS1.setText(randomSliders[0][2]);
    sliderS2.setPos([slider2.pos[0], (slider2.pos[1] + 0.03)]);
    sliderS2.setText(randomSliders[1][2]);
    sliderS3.setPos([slider3.pos[0], (slider3.pos[1] + 0.03)]);
    sliderS3.setText(randomSliders[2][2]);
    sliderS4.setPos([slider4.pos[0], (slider4.pos[1] + 0.03)]);
    sliderS4.setText(randomSliders[3][2]);
    sliderV1.setPos([(slider1.pos[0] + 0.74), slider1.pos[1]]);
    sliderV2.setPos([(slider2.pos[0] + 0.74), slider2.pos[1]]);
    sliderV3.setPos([(slider3.pos[0] + 0.74), slider3.pos[1]]);
    sliderV4.setPos([(slider4.pos[0] + 0.74), slider4.pos[1]]);
    txt_next.setPos(next.pos);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse.mouseClock.reset();
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(stateBox);
    trialComponents.push(statement1);
    trialComponents.push(statement2);
    trialComponents.push(statement3);
    trialComponents.push(slider1);
    trialComponents.push(slider2);
    trialComponents.push(slider3);
    trialComponents.push(slider4);
    trialComponents.push(sliderS1);
    trialComponents.push(sliderS2);
    trialComponents.push(sliderS3);
    trialComponents.push(sliderS4);
    trialComponents.push(sliderV1);
    trialComponents.push(sliderV2);
    trialComponents.push(sliderV3);
    trialComponents.push(sliderV4);
    trialComponents.push(next);
    trialComponents.push(txt_next);
    trialComponents.push(mouse);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    //Initialize slider
    function InitializeSlider(slider){
         try {
            slider._skin.STANDARD.MARKER_COLOR = col;
            slider._skin.MARKER_SIZE = [0.025, 0.025];
            slider._barSize = [1, 0.01];
            slider._onChange(true)();
            slider._setupSlider();
        } catch (err) {}
    }
    
    //Change the color of highlighed rect
    function HighlightRect(rec1, txt_rec1, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
    }
    
    //Prepare the initialisation of the sliders
    function PrepSlidersInit(){
        if (!slider1_is_initialized && statement1.status === STARTED){
            slider1_is_initialized  = true;
            slider2_is_initialized  = true;
            slider3_is_initialized  = true;
            slider4_is_initialized  = true;
            InitializeSliders();
        }    
    }
    
    //Initialize sliders
    function InitializeSliders(){
        const array_ = [slider1,slider2,slider3,slider4];
        array_.map(x =>InitializeSlider(x));
    }
    
    // Check if the user rated on all sliders
    function CheckAllRatingsDone(){
        if (slider1.getRating() !== undefined && slider2.getRating() !== undefined && slider3.getRating() !== undefined && slider4.getRating() !== undefined){
            allRatings = true;
         }
     else
        allRatings = false;
    }
    
    //Function that will display next instruction or go to next routine
    function DisplayNext(){
        //Display next instruction
        if (next.contains(mouse) && mouse.getPressed()[0] === 1 && allRatings){
            if (!mouse_clicked){
                mouse_clicked = true;
                if (curStatement === 1){
                    statement2.setOpacity(1);
                    randomSliders[0][3][curStatement-1] = slider1.getRating();
                    randomSliders[1][3][curStatement-1] = slider2.getRating();
                    randomSliders[2][3][curStatement-1] = slider3.getRating();
                    randomSliders[3][3][curStatement-1] = slider4.getRating();
                    curStatement = curStatement + 1;
                }
                else if(curStatement === 2){
                    statement3.setOpacity(1);
                    txt_next.text = end_text;
                    randomSliders[0][3][curStatement-1] = slider1.getRating();
                    randomSliders[1][3][curStatement-1] = slider2.getRating();
                    randomSliders[2][3][curStatement-1] = slider3.getRating();
                    randomSliders[3][3][curStatement-1] = slider4.getRating();
                    curStatement = curStatement + 1;
                }
                else{
                    randomSliders[0][3][curStatement-1] = slider1.getRating();
                    randomSliders[1][3][curStatement-1] = slider2.getRating();
                    randomSliders[2][3][curStatement-1] = slider3.getRating();
                    randomSliders[3][3][curStatement-1] = slider4.getRating();
                    curStatement = curStatement + 1;
                    trialDuration = t
                    continueRoutine = false; //go to next routine
                 }
            }     
        }
        else{
            mouse_clicked = false;
         }
    }
    
    //Display ratings values:
    function DisplayRating(slider_,slider_score){
        if(slider_.getRating()){
            slider_score.text = Math.round(slider_.markerPos) + "%";
        }
    }
    
    //Display rating of each slider
    function DisplayRatings(){
        const array1 = [[slider1, sliderV1],[slider2,sliderV2],[slider3, sliderV3], [slider4, sliderV4]];
        array1.map(x =>DisplayRating(x[0],x[1]));
    }
    
    PrepSlidersInit();
    CheckAllRatingsDone();
    DisplayNext();
    HighlightRect(next, txt_next, mouse);
    DisplayRatings();
    
    // *stateBox* updates
    if (t >= 0.0 && stateBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stateBox.tStart = t;  // (not accounting for frame time here)
      stateBox.frameNStart = frameN;  // exact frame index
      
      stateBox.setAutoDraw(true);
    }

    
    // *statement1* updates
    if (t >= 0.0 && statement1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statement1.tStart = t;  // (not accounting for frame time here)
      statement1.frameNStart = frameN;  // exact frame index
      
      statement1.setAutoDraw(true);
    }

    
    // *statement2* updates
    if (t >= 0.0 && statement2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statement2.tStart = t;  // (not accounting for frame time here)
      statement2.frameNStart = frameN;  // exact frame index
      
      statement2.setAutoDraw(true);
    }

    
    // *statement3* updates
    if (t >= 0.0 && statement3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statement3.tStart = t;  // (not accounting for frame time here)
      statement3.frameNStart = frameN;  // exact frame index
      
      statement3.setAutoDraw(true);
    }

    
    // *slider1* updates
    if (t >= 0.0 && slider1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider1.tStart = t;  // (not accounting for frame time here)
      slider1.frameNStart = frameN;  // exact frame index
      
      slider1.setAutoDraw(true);
    }

    
    // *slider2* updates
    if (t >= 0.0 && slider2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider2.tStart = t;  // (not accounting for frame time here)
      slider2.frameNStart = frameN;  // exact frame index
      
      slider2.setAutoDraw(true);
    }

    
    // *slider3* updates
    if (t >= 0.0 && slider3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider3.tStart = t;  // (not accounting for frame time here)
      slider3.frameNStart = frameN;  // exact frame index
      
      slider3.setAutoDraw(true);
    }

    
    // *slider4* updates
    if (t >= 0.0 && slider4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider4.tStart = t;  // (not accounting for frame time here)
      slider4.frameNStart = frameN;  // exact frame index
      
      slider4.setAutoDraw(true);
    }

    
    // *sliderS1* updates
    if (t >= 0.0 && sliderS1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS1.tStart = t;  // (not accounting for frame time here)
      sliderS1.frameNStart = frameN;  // exact frame index
      
      sliderS1.setAutoDraw(true);
    }

    
    // *sliderS2* updates
    if (t >= 0.0 && sliderS2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS2.tStart = t;  // (not accounting for frame time here)
      sliderS2.frameNStart = frameN;  // exact frame index
      
      sliderS2.setAutoDraw(true);
    }

    
    // *sliderS3* updates
    if (t >= 0.0 && sliderS3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS3.tStart = t;  // (not accounting for frame time here)
      sliderS3.frameNStart = frameN;  // exact frame index
      
      sliderS3.setAutoDraw(true);
    }

    
    // *sliderS4* updates
    if (t >= 0.0 && sliderS4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderS4.tStart = t;  // (not accounting for frame time here)
      sliderS4.frameNStart = frameN;  // exact frame index
      
      sliderS4.setAutoDraw(true);
    }

    
    // *sliderV1* updates
    if (t >= 0 && sliderV1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV1.tStart = t;  // (not accounting for frame time here)
      sliderV1.frameNStart = frameN;  // exact frame index
      
      sliderV1.setAutoDraw(true);
    }

    
    // *sliderV2* updates
    if (t >= 0.0 && sliderV2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV2.tStart = t;  // (not accounting for frame time here)
      sliderV2.frameNStart = frameN;  // exact frame index
      
      sliderV2.setAutoDraw(true);
    }

    
    // *sliderV3* updates
    if (t >= 0.0 && sliderV3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV3.tStart = t;  // (not accounting for frame time here)
      sliderV3.frameNStart = frameN;  // exact frame index
      
      sliderV3.setAutoDraw(true);
    }

    
    // *sliderV4* updates
    if (t >= 0.0 && sliderV4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderV4.tStart = t;  // (not accounting for frame time here)
      sliderV4.frameNStart = frameN;  // exact frame index
      
      sliderV4.setAutoDraw(true);
    }

    
    // *next* updates
    if ((allRatings) && next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next.tStart = t;  // (not accounting for frame time here)
      next.frameNStart = frameN;  // exact frame index
      
      next.setAutoDraw(true);
    }

    
    // *txt_next* updates
    if ((allRatings) && txt_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_next.tStart = t;  // (not accounting for frame time here)
      txt_next.frameNStart = frameN;  // exact frame index
      
      txt_next.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code
    // Save results
    
    //Save the order the statements were presented 
    psychoJS.experiment.addData('slidersRandomized', randomSliders);
    
    // Reorder array
    function sortArray(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    randomSliders.sort(sortArray);
    
    for (let i=0; i<4; i++){
        let statementType = randomSliders[i][1];
        for (let j=0; j<3; j++){
            let strStatement = "statement".concat((j+1).toString(),"_", statementType);
            psychoJS.experiment.addData(strStatement, randomSliders[i][3][j]);
        }
    }
    
    psychoJS.experiment.addData('trialDuration', trialDuration);
    psychoJS.experiment.addData('currentTrial', currentTrial);
    currentTrial = currentTrial + 1;
    
    //Reset some elements for next trial
    function ResetElements(){
        statement2.setOpacity(0);
        statement3.setOpacity(0);
        const array2 = [sliderV1, sliderV2, sliderV3, sliderV4];
        array2.map(x =>x.text="");
    }
    
    ResetElements();
    psychoJS.experiment.addData('slider1.response', slider1.getRating());
    psychoJS.experiment.addData('slider1.rt', slider1.getRT());
    psychoJS.experiment.addData('slider1.history', slider1.getHistory());
    psychoJS.experiment.addData('slider2.response', slider2.getRating());
    psychoJS.experiment.addData('slider2.rt', slider2.getRT());
    psychoJS.experiment.addData('slider2.history', slider2.getHistory());
    psychoJS.experiment.addData('slider3.response', slider3.getRating());
    psychoJS.experiment.addData('slider3.rt', slider3.getRT());
    psychoJS.experiment.addData('slider3.history', slider3.getHistory());
    psychoJS.experiment.addData('slider4.response', slider4.getRating());
    psychoJS.experiment.addData('slider4.rt', slider4.getRT());
    psychoJS.experiment.addData('slider4.history', slider4.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_thx
    //Change the text according to the selected language, function SetTxtInstr2()
    function SetTxtReady(){
        if (english){
            thx.text = "Thank you for your participation!";
        }
        else{
            thx.text = "Merci de votre participation!";
        }
    }
    function GetData(){
        try{
            let data = thisExp._trialsData;
            //console.log("data: ", data);
            /* Make array objects all have the same keys */
            let defaults = { "Language" : "", "participant" : "", "date" : "", "session": "", "expName:":"", 
            "psychopyVersion": "", "OS": "", "frameRate": "", "mouse_i.x": "", "mouse_i.y": "", 
            "mouse_i.leftButton": "", "mouse_i.midButton": "", "mouse_i.rightButton": "", "mouse_i.time": "", 
            "mouse_i.clicked_name": "", "currentTrial" : "", "statement1_NL": "", "statement1_EL": "", "statement1_A": "", "statement1_T": "", 
            "statement2_NL": "", "statement2_EL": "", "statement2_A": "", "statement2_T": "", 
            "statement3_NL": "", "statement3_EL": "", "statement3_A": "", "statement3_T": "", "trialDuration": "", "Type": ""};
            data = $.map( data, function( item ){
                return $.extend( {}, defaults, item ); 
            });
            
            // Create all the variables we will need
            let data2 = ["average_non_filler_statement1_NL", "average_non_filler_statement1_EL",
            "average_non_filler_statement1_A", "average_non_filler_statement1_T", 
            "average_non_filler_statement2_NL", "average_non_filler_statement2_EL",
            "average_non_filler_statement2_A", "average_non_filler_statement2_T",
            "average_non_filler_statement3_NL", "average_non_filler_statement3_EL",
            "average_non_filler_statement3_A", "average_non_filler_statement3_T",
            "average_non_filler_trialDuration", "sBADE_evidence_integration", 
            "sBADE_evidence_integration_norm_rev", "sBADE_conservatism", "sBADE_trial_duration"];
            
            // Add them to the data
            for (let i = 0; i < data2.length; i++) {
                data[data2[i]] = "";
            }
            
            // Create our dataframe where we will compute all the values
            
            let df1 = new dfd.DataFrame(data);
            
            // Select trials (practice number is non existent)
            df1 = df1.loc({
                rows: df1["currentTrial"].gt(0)
            });
            df1.resetIndex({ inplace: true });
    
            // We will compute the scores
            
            df1["statement1_NL"] = df1['statement1_NL'].div(100);
            df1["statement1_EL"] = df1['statement1_EL'].div(100);
            df1["statement1_A"] = df1['statement1_A'].div(100);
            df1["statement1_T"] = df1['statement1_T'].div(100);
    
            df1["statement2_NL"] = df1['statement2_NL'].div(100);
            df1["statement2_EL"] = df1['statement2_EL'].div(100);
            df1["statement2_A"] = df1['statement2_A'].div(100);
            df1["statement2_T"] = df1['statement2_T'].div(100);
    
            df1["statement3_NL"] = df1['statement3_NL'].div(100);
            df1["statement3_EL"] = df1['statement3_EL'].div(100);
            df1["statement3_A"] = df1['statement3_A'].div(100);
            df1["statement3_T"] = df1['statement3_T'].div(100);
            
            let sub_df = df1.iloc({
                rows: df1["Type"].eq("non-filler")
            });
            sub_df.resetIndex({ inplace: true });
            
            // Compute means
            df1["average_non_filler_statement1_NL"] = sub_df["statement1_NL"].mean();
            df1["average_non_filler_statement1_EL"] = sub_df["statement1_EL"].mean();
            df1["average_non_filler_statement1_A"] = sub_df["statement1_A"].mean();
            df1["average_non_filler_statement1_T"] = sub_df["statement1_T"].mean();
            
            df1["average_non_filler_statement2_NL"] = sub_df["statement2_NL"].mean();
            df1["average_non_filler_statement2_EL"] = sub_df["statement2_EL"].mean();
            df1["average_non_filler_statement2_A"] = sub_df["statement2_A"].mean();
            df1["average_non_filler_statement2_T"] = sub_df["statement2_T"].mean();
    
            df1["average_non_filler_statement3_NL"] = sub_df["statement3_NL"].mean();
            df1["average_non_filler_statement3_EL"] = sub_df["statement3_EL"].mean();
            df1["average_non_filler_statement3_A"] = sub_df["statement3_A"].mean();
            df1["average_non_filler_statement3_T"] = sub_df["statement3_T"].mean();
    
            df1["average_non_filler_trialDuration"] = sub_df["trialDuration"].mean();
            
            // Compute sBADE evidence integration
            let sum1 = df1["average_non_filler_statement1_A"]+df1["average_non_filler_statement2_A"]+df1["average_non_filler_statement3_A"]+df1["average_non_filler_statement2_NL"]+df1["average_non_filler_statement2_EL"]+df1["average_non_filler_statement3_NL"]+df1["average_non_filler_statement3_EL"];
            df1["sBADE_evidence_integration"] = sum1-df1["average_non_filler_statement3_T"];
            
            //console.log("sBADE_evidence_integration", df1["sBADE_evidence_integration"]);
            
            // Compute sBADE_conservatism
            let sum2 = df1["average_non_filler_statement1_NL"]+df1["average_non_filler_statement1_EL"]+df1["average_non_filler_statement1_T"]+df1["average_non_filler_statement2_NL"]+df1["average_non_filler_statement2_EL"]+df1["average_non_filler_statement2_T"]+df1["average_non_filler_statement3_T"];
            df1["sBADE_conservatism"] = sum2;
            
            //console.log("sBADE_conservatism", df1["sBADE_conservatism"]);
            
            df1["sBADE_trial_duration"] = df1['average_non_filler_trialDuration'];
            
            /* 
            Compute reverse sBADE evidence integration
            https://stackoverflow.com/questions/929103/convert-a-number-range-to-another-range-maintaining-ratio
            */
            let oldMax, oldMin, newMax, newMin, oldRange, newRange, newValue, oldValue;
            oldMax = -1; oldMin = 7; newMax = 1; newMin = 0; oldRange = oldMax-oldMin; newRange = newMax-newMin; oldValue = df1["sBADE_evidence_integration"];
            newValue = (((oldValue-oldMin)*newRange)/oldRange)+newMin;
            
            df1["sBADE_evidence_integration_norm_rev"] = newValue;
           
            //console.log("new dataframe: ", df1);
            
            let taskVersion = "Online_v3.1.0"; // Version of the task
            
            const exp_name = "iCog_BADE_stories_short";
            
            df1["date_exp"] = startingDate;
            df1["task_version"] = taskVersion;
            
            // Save dataframe inside the logfile
            psychoJS.experiment.addData('date_exp', df1["date_exp"]);
            psychoJS.experiment.addData('task_version', df1["task_version"]);
            psychoJS.experiment.addData('sBADE_evidence_integration', df1["sBADE_evidence_integration"]);
            psychoJS.experiment.addData('sBADE_evidence_integration_norm_rev', df1["sBADE_evidence_integration_norm_rev"]);
            psychoJS.experiment.addData('sBADE_conservatism', df1["sBADE_conservatism"]);
            psychoJS.experiment.addData('sBADE_trial_duration', df1["sBADE_trial_duration"]);
            return df1;
        }
        catch(err) {
            console.log("Error while computing scores.");
            dumpError(err);
        }
    }
    
    function REDCapImportRecord(df1) {
        try{
          const url = 'https://portal.rimuhc.ca/cim/redcap/api/';
          let testdata;
          // Warning: If we add or remove columns in the Google file, we must also change the variables here
          testdata = [{
                    record_id: df1.loc({rows: [0], columns: ["participant"]}).values[0][0],
                    [redcapVars[1]]: df1["date_exp"],
                    [redcapVars[2]]: df1["task_version"],
                    [redcapVars[3]]: df1["sBADE_evidence_integration"],
                    [redcapVars[4]]: df1["sBADE_evidence_integration_norm_rev"],
                    [redcapVars[5]]: df1["sBADE_conservatism"],
                    [redcapVars[6]]: df1["sBADE_trial_duration"]
          }];
          
          testdata = JSON.stringify(testdata);
          //console.log("testdata: ", testdata);
    
          const body = new FormData();
          body.append('token', redcapVars[0]);
          body.append('content', 'record');
          body.append('format', 'json');
          body.append('overwriteBehavior', 'normal');
          body.append('data', testdata);
          body.append('returnContent', 'ids');
    
          const params = {
            method: 'POST',
            body,
          }
    
        return fetch(url, params)
          .then(data => {
            console.log('fetch data: ', data);
          })
          .catch(error => console.log('Error: ', error))
     
        }
        catch(err) {
          console.log("Error while sending data to redcap: ", err.message);
          dumpError(err);
        }
    }
    
    function dumpError(err) {
      if (typeof err === 'object') {
        if (err.message) {
          console.log('\nMessage: ' + err.message);
        }
        if (err.stack) {
          console.log('\nStacktrace:');
          console.log('====================');
          console.log(err.stack);
        }
      } else {
        console.log('dumpError :: argument is not an object');
      }
    }
    
    SetTxtReady();
    var res = GetData();
    REDCapImportRecord(res);
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thx);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thx* updates
    if (t >= 0.0 && thx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thx.tStart = t;  // (not accounting for frame time here)
      thx.frameNStart = frameN;  // exact frame index
      
      thx.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thx.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thx.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
