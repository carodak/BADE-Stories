#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on Fri Nov 18 12:29:01 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2022.2.4')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'BADE_stories'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/macbookpro/Documents/dossier_douglas/Katie/cognitive tasks/new/in progress/official/bade-stories/BADE_Stories.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1680, 1050], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color='Gainsboro', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "lang" ---
# Run 'Begin Experiment' code from code_lang
import re
import pandas as pd
import os, ssl
import json
import datetime

startingDate = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")

#Set french or english variable to true when the language is selected
french = False
english = False

practiceConditions = ""
trialConditions = ""

redcapVars = []

#Remove illegal characters in participants' name to avoid errors in filenames
expInfo['participant'] = re.sub('[^\w_.)( -]', '', expInfo['participant'])

#Load redcap variable
if not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
    try:
        ssl._create_default_https_context = ssl._create_unverified_context
        sheet_url = "https://docs.google.com/spreadsheets/d/1HKhUnueu7nKidtb37oh2HPwGXNgj5b4i6DsxrUrUOCM/edit#gid=0"
        url_1 = sheet_url.replace('/edit#gid=', '/export?format=csv&gid=')
        dfRed = pd.read_csv(url_1)
        nbCol = 9 #Change it if we change the google sheet
        for i in range(1, nbCol):
            redcapVars.append(dfRed.iloc[0,i])
    except:
        print("An exception occurred. The redcap variables could not be found.")
button1 = visual.ImageStim(
    win=win,
    name='button1', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, 0.02), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
button2 = visual.ImageStim(
    win=win,
    name='button2', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.07), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
txt_instr = visual.TextStim(win=win, name='txt_instr',
    text='Veuillez sélectionner votre langue.\n\nPlease select your language.',
    font='Arial',
    pos=(0, 0.18), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
txt_button1 = visual.TextStim(win=win, name='txt_button1',
    text='FRANÇAIS',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
txt_button2 = visual.TextStim(win=win, name='txt_button2',
    text='ENGLISH',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
mouse1 = event.Mouse(win=win)
x, y = [None, None]
mouse1.mouseClock = core.Clock()

# --- Initialize components for Routine "instr" ---
# Run 'Begin Experiment' code from code_i
#We'll set the picture depending on the language
img_instr = ""

end_instr_text1=""
expTitle = visual.TextStim(win=win, name='expTitle',
    text='Story task',
    font='Arial',
    pos=(0, 0.395), height=0.05, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
expEx = visual.TextStim(win=win, name='expEx',
    text='(Example)',
    font='Arial',
    pos=(0, 0.345), height=0.018, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
img_i = visual.ImageStim(
    win=win,
    name='img_i', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(0, 0.09), size=(0.737,0.47),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
instr_text_1 = visual.TextStim(win=win, name='instr_text_1',
    text=None,
    font='Arial',
    pos=(0, -0.245), height=0.021, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
instr_text_1_2 = visual.TextStim(win=win, name='instr_text_1_2',
    text=None,
    font='Arial',
    pos=(0, -0.27), height=0.021, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
instr_text_2 = visual.TextStim(win=win, name='instr_text_2',
    text='Any text\n\nincluding line breaks',
    font='Arial',
    pos=(0, -0.245), height=0.021, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=0, 
    languageStyle='LTR',
    depth=-6.0);
next_i = visual.ImageStim(
    win=win,
    name='next_i', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.463), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-7.0)
txt_next_i = visual.TextStim(win=win, name='txt_next_i',
    text='NEXT',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
mouse_i = event.Mouse(win=win)
x, y = [None, None]
mouse_i.mouseClock = core.Clock()

# --- Initialize components for Routine "prac" ---
# Run 'Begin Experiment' code from code_pr
mouse_clicked = False #boulean to check if the button was pressed
stateBox_pr = visual.Rect(
    win=win, name='stateBox_pr',
    width=(1.4, 0.3)[0], height=(1.4, 0.3)[1],
    ori=0, pos=(0, 0.285), anchor='center',
    lineWidth=1,     colorSpace='rgb',  lineColor='lightGrey', fillColor='lightGrey',
    opacity=1, depth=-1.0, interpolate=True)
statement1_pr = visual.TextStim(win=win, name='statement1_pr',
    text='',
    font='Arial',
    pos=(0, 0.35), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
statement2_pr = visual.TextStim(win=win, name='statement2_pr',
    text='',
    font='Arial',
    pos=(0, 0.28), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-3.0);
statement3_pr = visual.TextStim(win=win, name='statement3_pr',
    text='',
    font='Arial',
    pos=(0, 0.21), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-4.0);
slider1_pr = visual.Slider(win=win, name='slider1_pr',
    startValue=None, size=(1.4, 0.03), pos=(0,-0.1), units=None,
    labels=['0','100'], ticks=(0,100), granularity=0,
    style=['rating'], styleTweaks=(), opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-5, readOnly=False)
slider2_pr = visual.Slider(win=win, name='slider2_pr',
    startValue=None, size=(1.4, 0.03), pos=(0,-0.13), units=None,
    labels=["0%", "100%"], ticks=(0, 1), granularity=0,
    style=['rating'], styleTweaks=[], opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-6, readOnly=False)
slider3_pr = visual.Slider(win=win, name='slider3_pr',
    startValue=None, size=(1.4, 0.03), pos=(0,-0.26), units=None,
    labels=["0%", "100%"], ticks=(0, 1), granularity=0,
    style=['rating'], styleTweaks=[], opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-7, readOnly=False)
slider4_pr = visual.Slider(win=win, name='slider4_pr',
    startValue=None, size=(1.4, 0.03), pos=(0, -0.39), units=None,
    labels=["0%", "100%"], ticks=(0, 1), granularity=0,
    style=['rating'], styleTweaks=[], opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-8, readOnly=False)
sliderS1_pr = visual.TextStim(win=win, name='sliderS1_pr',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
sliderS2_pr = visual.TextStim(win=win, name='sliderS2_pr',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
sliderS3_pr = visual.TextStim(win=win, name='sliderS3_pr',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
sliderS4_pr = visual.TextStim(win=win, name='sliderS4_pr',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-12.0);
sliderV1_pr = visual.TextStim(win=win, name='sliderV1_pr',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-13.0);
sliderV2_pr = visual.TextStim(win=win, name='sliderV2_pr',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-14.0);
sliderV3_pr = visual.TextStim(win=win, name='sliderV3_pr',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-15.0);
sliderV4_pr = visual.TextStim(win=win, name='sliderV4_pr',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-16.0);
next_pr = visual.ImageStim(
    win=win,
    name='next_pr', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.463), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-17.0)
txt_next_pr = visual.TextStim(win=win, name='txt_next_pr',
    text='NEXT',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-18.0);
mouse_pr = event.Mouse(win=win)
x, y = [None, None]
mouse_pr.mouseClock = core.Clock()

# --- Initialize components for Routine "ready" ---
txt_rdy = visual.TextStim(win=win, name='txt_rdy',
    text='Ready to begin?',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
next_rdy = visual.ImageStim(
    win=win,
    name='next_rdy', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.15), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
txt_next_rdy = visual.TextStim(win=win, name='txt_next_rdy',
    text='NEXT',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
mouse_rdy = event.Mouse(win=win)
x, y = [None, None]
mouse_rdy.mouseClock = core.Clock()

# --- Initialize components for Routine "trial" ---
# Run 'Begin Experiment' code from code
mouse_clicked = False
# Save the current trial
currentTrial = 1
stateBox = visual.Rect(
    win=win, name='stateBox',
    width=(1.4, 0.3)[0], height=(1.4, 0.3)[1],
    ori=0, pos=(0, 0.285), anchor='center',
    lineWidth=1,     colorSpace='rgb',  lineColor='lightGrey', fillColor='lightGrey',
    opacity=1, depth=-1.0, interpolate=True)
statement1 = visual.TextStim(win=win, name='statement1',
    text='',
    font='Arial',
    pos=(0, 0.35), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
statement2 = visual.TextStim(win=win, name='statement2',
    text='',
    font='Arial',
    pos=(0, 0.28), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-3.0);
statement3 = visual.TextStim(win=win, name='statement3',
    text='',
    font='Arial',
    pos=(0, 0.21), height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-4.0);
slider1 = visual.Slider(win=win, name='slider1',
    startValue=None, size=(1.4, 0.03), pos=(0,-0.1), units=None,
    labels=['0','100'], ticks=(0,100), granularity=0,
    style=['rating'], styleTweaks=[], opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-5, readOnly=False)
slider2 = visual.Slider(win=win, name='slider2',
    startValue=None, size=(1.4, 0.03), pos=(0,-0.13), units=None,
    labels=["0%", "100%"], ticks=(0, 1), granularity=0,
    style=['rating'], styleTweaks=[], opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-6, readOnly=False)
slider3 = visual.Slider(win=win, name='slider3',
    startValue=None, size=(1.4, 0.03), pos=(0,-0.26), units=None,
    labels=["0%", "100%"], ticks=(0, 1), granularity=0,
    style=['rating'], styleTweaks=[], opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-7, readOnly=False)
slider4 = visual.Slider(win=win, name='slider4',
    startValue=None, size=(1.4, 0.03), pos=(0, -0.39), units=None,
    labels=["0%", "100%"], ticks=(0, 1), granularity=0,
    style=['rating'], styleTweaks=[], opacity=1,
    labelColor='Gray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='HelveticaBold', labelHeight=0.05,
    flip=False, ori=0, depth=-8, readOnly=False)
sliderS1 = visual.TextStim(win=win, name='sliderS1',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
sliderS2 = visual.TextStim(win=win, name='sliderS2',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
sliderS3 = visual.TextStim(win=win, name='sliderS3',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
sliderS4 = visual.TextStim(win=win, name='sliderS4',
    text='',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-12.0);
sliderV1 = visual.TextStim(win=win, name='sliderV1',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-13.0);
sliderV2 = visual.TextStim(win=win, name='sliderV2',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-14.0);
sliderV3 = visual.TextStim(win=win, name='sliderV3',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-15.0);
sliderV4 = visual.TextStim(win=win, name='sliderV4',
    text=None,
    font='Arial',
    pos=[0,0], height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-16.0);
next = visual.ImageStim(
    win=win,
    name='next', 
    image='button.png', mask=None, anchor='center',
    ori=0, pos=(0, -0.463), size=(0.25, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=0.73,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-17.0)
txt_next = visual.TextStim(win=win, name='txt_next',
    text='NEXT',
    font='Arial',
    pos=[0,0], height=0.023, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-18.0);
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# --- Initialize components for Routine "thanks" ---
thx = visual.TextStim(win=win, name='thx',
    text='Thank you for your participation!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color=[-1,-1,-1], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "lang" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
txt_button1.setPos([button1.pos])
txt_button2.setPos([button2.pos])
# setup some python lists for storing info about the mouse1
mouse1.clicked_name = []
gotValidClick = False  # until a click is received
mouse1.mouseClock.reset()
# keep track of which components have finished
langComponents = [button1, button2, txt_instr, txt_button1, txt_button2, mouse1]
for thisComponent in langComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "lang" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from code_lang
    #Change the color of highlighed rect
    if button1.contains(mouse1):
        button1.opacity=0.99
        txt_button1.opacity=2
    else:
        button1.opacity = 0.73
        txt_button1.opacity = 0.73
        
    if button2.contains(mouse1):
        button2.opacity=0.99
        txt_button2.opacity=2
    else:
        button2.opacity=0.73
        txt_button2.opacity=0.73
        
    #Function that is going to set the chosen language
    if button1.contains(mouse1) and mouse1.getPressed()[0] == 1:
            french = True
            practiceConditions = "BADE_stories_task_conditions_practice_fr.csv"
            trialConditions = "BADE_stories_task_conditions_fr.csv"
    
    
    elif button2.contains(mouse1) and mouse1.getPressed()[0] == 1:
            english = True
            practiceConditions = "BADE_stories_task_conditions_practice_en.csv"
            trialConditions = "BADE_stories_task_conditions_en.csv"
    
    # *button1* updates
    if button1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        button1.frameNStart = frameN  # exact frame index
        button1.tStart = t  # local t and not account for scr refresh
        button1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button1.started')
        button1.setAutoDraw(True)
    
    # *button2* updates
    if button2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        button2.frameNStart = frameN  # exact frame index
        button2.tStart = t  # local t and not account for scr refresh
        button2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button2.started')
        button2.setAutoDraw(True)
    
    # *txt_instr* updates
    if txt_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_instr.frameNStart = frameN  # exact frame index
        txt_instr.tStart = t  # local t and not account for scr refresh
        txt_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_instr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_instr.started')
        txt_instr.setAutoDraw(True)
    
    # *txt_button1* updates
    if txt_button1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_button1.frameNStart = frameN  # exact frame index
        txt_button1.tStart = t  # local t and not account for scr refresh
        txt_button1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_button1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_button1.started')
        txt_button1.setAutoDraw(True)
    
    # *txt_button2* updates
    if txt_button2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_button2.frameNStart = frameN  # exact frame index
        txt_button2.tStart = t  # local t and not account for scr refresh
        txt_button2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_button2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_button2.started')
        txt_button2.setAutoDraw(True)
    # *mouse1* updates
    if mouse1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse1.frameNStart = frameN  # exact frame index
        mouse1.tStart = t  # local t and not account for scr refresh
        mouse1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'mouse1.started')
        mouse1.status = STARTED
        prevButtonState = mouse1.getPressed()  # if button is down already this ISN'T a new click
    if mouse1.status == STARTED:  # only update if started and not finished!
        buttons = mouse1.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter([button1, button2])
                    clickableList = [button1, button2]
                except:
                    clickableList = [[button1, button2]]
                for obj in clickableList:
                    if obj.contains(mouse1):
                        gotValidClick = True
                        mouse1.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in langComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "lang" ---
for thisComponent in langComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_lang
if english==True:
    thisExp.addData("Language", "en")
else:
    thisExp.addData("Language", "fr")
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "lang" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_i
curInstr = 1 #value of the current displayed instr
instr_clicked = False #true if we clicked on instr1
#Change the text according to the selected language, function SetTxtInstr()
if english:
    expTitle.text = "Story task"
    expEx.text = "(Example)"
    img_instr = "BADE_en.png"
    instr_text_1.text = "You will be shown three statements, presented one at a time, describing an event or person. Each new statement will provide additional information about the event or person that is being described. Below the statements, you will also see four interpretations about the event or person being described in the statement(s). Each interpretation has its own scale (from 0 - 100%), where you will be asked to rate the likelihood of each interpretation given the information described in the statement(s). Rate how well you believe each interpretation relates to the event or person described in the statement(s)."
    instr_text_1_2 = visual.TextStim(win=win, color=(-1,-1,-1), colorSpace='rgb', font="Arial", height=0.022, pos=(0, -0.38), bold=True)
    instr_text_1_2.text = "It is important to rate each of the four interpretations independently from one another. Do not compare the interpretations to each other. The total of the interpretations should not necessarily equal 100%."
    instr_text_2.text = "\n\nAs each new statement is shown, reconsider the ratings you have assigned to each interpretation. Ratings for each interpretation can be changed as much or as little as you like, or can be kept the same if you feel that they have not changed with the addition of a new statement. It is possible that none or many of the interpretations will be a good fit for the statements.\n\nYou will be using the mouse or touchpad to make your ratings. Click on 'Next' to display the next statement. After you have seen all three statements, click 'Done' to move to the next trial. You will now complete 2 practice trials before beginning the experiment."
    txt_next_i.text = "NEXT"
else:
    expTitle.text = "Tâche d'histoires"
    expEx.text = "(Exemple)"
    img_instr = "BADE_fr.png"
    instr_text_1.text = "Trois énoncés vous seront montrés, un à la fois. Chacun décrit un événement ou une personne. Chaque nouvel énoncé apportera de l’information additionnelle à propos de l’événement ou de la personne décrit(e). Sous les énoncés, vous verrez aussi quatre interprétations de l’événement ou de la personne décrit(e) dans le(les) énoncé(s). Chaque interprétation a sa propre échelle (de 0 – 100%), vous aurez donc à évaluer la probabilité que chaque interprétation décrive l’énoncé, selon les informations données. Évaluez à quel point vous pensez que chaque interprétation se rapporte à l’évènement ou la personne décrite dans l’(les) énoncé(s)."
    instr_text_1_2 = visual.TextStim(win=win, color=(-1,-1,-1), colorSpace='rgb', font="Arial", height=0.022, pos=(0, -0.38), bold=True)
    instr_text_1_2.text = "Il est important d’évaluer chacune des quatre interprétations indépendamment les unes des autres. Ne comparez pas les interprétations entres elles. Le total des interprétations ne doit pas faire nécessairement 100%."
    instr_text_2.text = "\n\nÀ chaque nouvel énoncé présenté, reconsidérez les évaluations que vous avez assignées à chaque interprétation. Les évaluations des interprétations peuvent être changées autant que vous le voulez, vous pouvez aussi les laisser intactes, si vous avez l’impression qu’elles n'ont pas changé avec l’addition de nouveaux énoncés. Il est possible qu’aucune ou que plusieurs interprétations soi(en)t un bon pairage avec les énoncés.\n\nVous utiliserez la souris ou le pavé tactile pour faire vos évaluations. Appuyez sur ‘Suivant’ pour afficher le prochain énoncé. Après avoir vu tous les trois énoncés, appuyez sur ‘Complété’, pour accéder à l’essai suivant. Vous allez maintenant faire 2 essais de pratique, avant de commencer l’exercice."
    txt_next_i.text = "SUIVANT"
img_i.setImage(img_instr)
txt_next_i.setPos([next_i.pos])
# setup some python lists for storing info about the mouse_i
mouse_i.x = []
mouse_i.y = []
mouse_i.leftButton = []
mouse_i.midButton = []
mouse_i.rightButton = []
mouse_i.time = []
mouse_i.clicked_name = []
gotValidClick = False  # until a click is received
mouse_i.mouseClock.reset()
# keep track of which components have finished
instrComponents = [expTitle, expEx, img_i, instr_text_1, instr_text_1_2, instr_text_2, next_i, txt_next_i, mouse_i]
for thisComponent in instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from code_i
    #Function that will display next instruction or go to next routine
    #Display next instruction
    if next_i.contains(mouse_i) and mouse_i.getPressed()[0] == True:
        if instr_clicked == False:
            instr_clicked = True
            if curInstr == 1:
                instr_text_1.opacity=0
                instr_text_1_2.opacity=0
                instr_text_2.opacity=1
                curInstr = 2
            else:
                continueRoutine = False #go to next routine
    else:
        instr_clicked = False
    
    #Change the color of highlighed rect
    if next_i.contains(mouse_i):
        next_i.opacity=0.99
        txt_next_i.opacity=2
    else:
        next_i.opacity=0.73
        txt_next_i.opacity=0.73
    
    # *expTitle* updates
    if expTitle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        expTitle.frameNStart = frameN  # exact frame index
        expTitle.tStart = t  # local t and not account for scr refresh
        expTitle.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(expTitle, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'expTitle.started')
        expTitle.setAutoDraw(True)
    
    # *expEx* updates
    if expEx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        expEx.frameNStart = frameN  # exact frame index
        expEx.tStart = t  # local t and not account for scr refresh
        expEx.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(expEx, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'expEx.started')
        expEx.setAutoDraw(True)
    
    # *img_i* updates
    if img_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        img_i.frameNStart = frameN  # exact frame index
        img_i.tStart = t  # local t and not account for scr refresh
        img_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(img_i, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'img_i.started')
        img_i.setAutoDraw(True)
    
    # *instr_text_1* updates
    if instr_text_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text_1.frameNStart = frameN  # exact frame index
        instr_text_1.tStart = t  # local t and not account for scr refresh
        instr_text_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instr_text_1.started')
        instr_text_1.setAutoDraw(True)
    
    # *instr_text_1_2* updates
    if instr_text_1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text_1_2.frameNStart = frameN  # exact frame index
        instr_text_1_2.tStart = t  # local t and not account for scr refresh
        instr_text_1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text_1_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instr_text_1_2.started')
        instr_text_1_2.setAutoDraw(True)
    
    # *instr_text_2* updates
    if instr_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text_2.frameNStart = frameN  # exact frame index
        instr_text_2.tStart = t  # local t and not account for scr refresh
        instr_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instr_text_2.started')
        instr_text_2.setAutoDraw(True)
    
    # *next_i* updates
    if next_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_i.frameNStart = frameN  # exact frame index
        next_i.tStart = t  # local t and not account for scr refresh
        next_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_i, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'next_i.started')
        next_i.setAutoDraw(True)
    
    # *txt_next_i* updates
    if txt_next_i.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_next_i.frameNStart = frameN  # exact frame index
        txt_next_i.tStart = t  # local t and not account for scr refresh
        txt_next_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_next_i, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_next_i.started')
        txt_next_i.setAutoDraw(True)
    # *mouse_i* updates
    if mouse_i.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_i.frameNStart = frameN  # exact frame index
        mouse_i.tStart = t  # local t and not account for scr refresh
        mouse_i.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_i, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_i.started', t)
        mouse_i.status = STARTED
        prevButtonState = mouse_i.getPressed()  # if button is down already this ISN'T a new click
    if mouse_i.status == STARTED:  # only update if started and not finished!
        buttons = mouse_i.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(next_i)
                    clickableList = next_i
                except:
                    clickableList = [next_i]
                for obj in clickableList:
                    if obj.contains(mouse_i):
                        gotValidClick = True
                        mouse_i.clicked_name.append(obj.name)
                x, y = mouse_i.getPos()
                mouse_i.x.append(x)
                mouse_i.y.append(y)
                buttons = mouse_i.getPressed()
                mouse_i.leftButton.append(buttons[0])
                mouse_i.midButton.append(buttons[1])
                mouse_i.rightButton.append(buttons[2])
                mouse_i.time.append(mouse_i.mouseClock.getTime())
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instr" ---
for thisComponent in instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_i.x', mouse_i.x)
thisExp.addData('mouse_i.y', mouse_i.y)
thisExp.addData('mouse_i.leftButton', mouse_i.leftButton)
thisExp.addData('mouse_i.midButton', mouse_i.midButton)
thisExp.addData('mouse_i.rightButton', mouse_i.rightButton)
thisExp.addData('mouse_i.time', mouse_i.time)
thisExp.addData('mouse_i.clicked_name', mouse_i.clicked_name)
thisExp.nextEntry()
# the Routine "instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practices = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(practiceConditions),
    seed=None, name='practices')
thisExp.addLoop(practices)  # add the loop to the experiment
thisPractice = practices.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
if thisPractice != None:
    for paramName in thisPractice:
        exec('{} = thisPractice[paramName]'.format(paramName))

for thisPractice in practices:
    currentLoop = practices
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "prac" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_pr
    import pandas as pd
    
    curStatement = 1 #display first statement by default
    end_text = "" #text of ending button
    col = 'black'
    slider1_is_initialized = False #true when we set the color of slider1..
    slider2_is_initialized = False
    slider3_is_initialized = False
    slider4_is_initialized = False
    allRatings = False #true when the user rated on all 4 sliders
    
    #Save results
    statement1_NL_pr = -1
    statement1_EL_pr = -1
    statement1_A_pr = -1
    statement1_T_pr = -1
    
    statement2_NL_pr = -1
    statement2_EL_pr = -1
    statement2_A_pr = -1
    statement2_T_pr = -1
    
    statement3_NL_pr = -1
    statement3_EL_pr = -1
    statement3_A_pr = -1
    statement3_T_pr = -1
    
    trialDuration_pr = -1
    
    #define sliders (defining them here fix the labels position issue)
    slider1_pr = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, 0.01), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    slider2_pr = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, -0.122), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    slider3_pr = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, -0.25), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    slider4_pr = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, -0.38), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    
    #Change the text according to the selected language, function SetTxtInstr()
    if english:
        txt_next_pr.text = "NEXT"
        end_text = "DONE"
    else:
        txt_next_pr.text = "SUIVANT"
        end_text = "COMPLÉTÉ"
    statement1_pr.setText(state1)
    statement2_pr.setOpacity(0)
    statement2_pr.setText(state2)
    statement3_pr.setOpacity(0)
    statement3_pr.setText(state3)
    slider1_pr.reset()
    slider2_pr.reset()
    slider3_pr.reset()
    slider4_pr.reset()
    sliderS1_pr.setPos((slider1_pr.pos[0],slider1_pr.pos[1]+0.03))
    sliderS1_pr.setText(sliderSub1)
    sliderS2_pr.setPos((slider2_pr.pos[0],slider2_pr.pos[1]+0.03))
    sliderS2_pr.setText(sliderSub2)
    sliderS3_pr.setPos((slider3_pr.pos[0],slider3_pr.pos[1]+0.03))
    sliderS3_pr.setText(sliderSub3)
    sliderS4_pr.setPos((slider4_pr.pos[0],slider4_pr.pos[1]+0.03))
    sliderS4_pr.setText(sliderSub4)
    sliderV1_pr.setPos((slider1_pr.pos[0]+0.74, slider1_pr.pos[1]))
    sliderV2_pr.setPos((slider2_pr.pos[0]+0.74, slider2_pr.pos[1]))
    sliderV3_pr.setPos((slider3_pr.pos[0]+0.74, slider3_pr.pos[1]))
    sliderV4_pr.setPos((slider4_pr.pos[0]+0.74, slider4_pr.pos[1]))
    txt_next_pr.setPos([next_pr.pos])
    # setup some python lists for storing info about the mouse_pr
    mouse_pr.x = []
    mouse_pr.y = []
    mouse_pr.leftButton = []
    mouse_pr.midButton = []
    mouse_pr.rightButton = []
    mouse_pr.time = []
    mouse_pr.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse_pr.mouseClock.reset()
    # keep track of which components have finished
    pracComponents = [stateBox_pr, statement1_pr, statement2_pr, statement3_pr, slider1_pr, slider2_pr, slider3_pr, slider4_pr, sliderS1_pr, sliderS2_pr, sliderS3_pr, sliderS4_pr, sliderV1_pr, sliderV2_pr, sliderV3_pr, sliderV4_pr, next_pr, txt_next_pr, mouse_pr]
    for thisComponent in pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "prac" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from code_pr
        #console.log("mouse position: ", mouse_pr.getPos());
        
        #Prepare the initialisation of the sliders
        if slider1_is_initialized == False and statement1_pr.status == STARTED:
            slider1_is_initialized  = True
            slider2_is_initialized  = True
            slider3_is_initialized  = True
            slider4_is_initialized  = True
            
            sliders = (slider1_pr,slider2_pr,slider3_pr,slider4_pr)
            for slider in sliders:
                try:
                    slider.marker.color = col
                    slider.marker.size = (0.025, 0.025)
                    slider._barSize = (1, 0.01)
                    slider._onChange(True)()
                    slider._setupSlider()
                except:
                    print("An exception while initializing slider occurred")
            
        #Check if the user rated on all sliders
        if slider1_pr.getRating() != None and slider2_pr.getRating() != None and slider3_pr.getRating() != None and slider4_pr.getRating() != None:
            allRatings = True
        else:
            allRatings = False
        
        #Code that will display next instruction or go to next routine
        if next_pr.contains(mouse_pr) and mouse_pr.getPressed()[0] == True and allRatings:
            if mouse_clicked == False:
                mouse_clicked = True
                if curStatement == 1:
                    statement2_pr.setOpacity(1)
                    curStatement = 2
                    statement1_NL_pr = slider1_pr.getRating()
                    statement1_EL_pr = slider2_pr.getRating()
                    statement1_A_pr = slider3_pr.getRating()
                    statement1_T_pr = slider4_pr.getRating()
                elif curStatement == 2:
                    statement3_pr.setOpacity(1)
                    curStatement = 3
                    txt_next_pr.text = end_text
                    statement2_NL_pr = slider1_pr.getRating()
                    statement2_EL_pr = slider2_pr.getRating()
                    statement2_A_pr = slider3_pr.getRating()
                    statement2_T_pr = slider4_pr.getRating()
                else:
                    statement3_NL_pr = slider1_pr.getRating()
                    statement3_EL_pr = slider2_pr.getRating()
                    statement3_A_pr = slider3_pr.getRating()
                    statement3_T_pr = slider4_pr.getRating()
                    trialDuration_pr = t
                    continueRoutine = False #go to next routine
        else:
            mouse_clicked = False
        
        #Change the color of highlighed rect
        if next_pr.contains(mouse_pr):
            next_pr.opacity=0.99
            txt_next_pr.opacity=2
        else:
            next_pr.opacity=0.73
            txt_next_pr.opacity=0.73
        
        #Display rating of each slider
            ratings = ((slider1_pr, sliderV1_pr), (slider2_pr, sliderV2_pr), (slider3_pr, sliderV3_pr), (slider4_pr, sliderV4_pr))
            for slider_ in ratings:
                if slider_[0].getRating():
                    slider_[1].text = str(int(round(slider_[0].markerPos))) + "%"
        
        # *stateBox_pr* updates
        if stateBox_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stateBox_pr.frameNStart = frameN  # exact frame index
            stateBox_pr.tStart = t  # local t and not account for scr refresh
            stateBox_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stateBox_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'stateBox_pr.started')
            stateBox_pr.setAutoDraw(True)
        
        # *statement1_pr* updates
        if statement1_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            statement1_pr.frameNStart = frameN  # exact frame index
            statement1_pr.tStart = t  # local t and not account for scr refresh
            statement1_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(statement1_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'statement1_pr.started')
            statement1_pr.setAutoDraw(True)
        
        # *statement2_pr* updates
        if statement2_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            statement2_pr.frameNStart = frameN  # exact frame index
            statement2_pr.tStart = t  # local t and not account for scr refresh
            statement2_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(statement2_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'statement2_pr.started')
            statement2_pr.setAutoDraw(True)
        
        # *statement3_pr* updates
        if statement3_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            statement3_pr.frameNStart = frameN  # exact frame index
            statement3_pr.tStart = t  # local t and not account for scr refresh
            statement3_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(statement3_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'statement3_pr.started')
            statement3_pr.setAutoDraw(True)
        
        # *slider1_pr* updates
        if slider1_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider1_pr.frameNStart = frameN  # exact frame index
            slider1_pr.tStart = t  # local t and not account for scr refresh
            slider1_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider1_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider1_pr.started')
            slider1_pr.setAutoDraw(True)
        
        # *slider2_pr* updates
        if slider2_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider2_pr.frameNStart = frameN  # exact frame index
            slider2_pr.tStart = t  # local t and not account for scr refresh
            slider2_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider2_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider2_pr.started')
            slider2_pr.setAutoDraw(True)
        
        # *slider3_pr* updates
        if slider3_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider3_pr.frameNStart = frameN  # exact frame index
            slider3_pr.tStart = t  # local t and not account for scr refresh
            slider3_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider3_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider3_pr.started')
            slider3_pr.setAutoDraw(True)
        
        # *slider4_pr* updates
        if slider4_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider4_pr.frameNStart = frameN  # exact frame index
            slider4_pr.tStart = t  # local t and not account for scr refresh
            slider4_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider4_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider4_pr.started')
            slider4_pr.setAutoDraw(True)
        
        # *sliderS1_pr* updates
        if sliderS1_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS1_pr.frameNStart = frameN  # exact frame index
            sliderS1_pr.tStart = t  # local t and not account for scr refresh
            sliderS1_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS1_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS1_pr.started')
            sliderS1_pr.setAutoDraw(True)
        
        # *sliderS2_pr* updates
        if sliderS2_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS2_pr.frameNStart = frameN  # exact frame index
            sliderS2_pr.tStart = t  # local t and not account for scr refresh
            sliderS2_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS2_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS2_pr.started')
            sliderS2_pr.setAutoDraw(True)
        
        # *sliderS3_pr* updates
        if sliderS3_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS3_pr.frameNStart = frameN  # exact frame index
            sliderS3_pr.tStart = t  # local t and not account for scr refresh
            sliderS3_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS3_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS3_pr.started')
            sliderS3_pr.setAutoDraw(True)
        
        # *sliderS4_pr* updates
        if sliderS4_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS4_pr.frameNStart = frameN  # exact frame index
            sliderS4_pr.tStart = t  # local t and not account for scr refresh
            sliderS4_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS4_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS4_pr.started')
            sliderS4_pr.setAutoDraw(True)
        
        # *sliderV1_pr* updates
        if sliderV1_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderV1_pr.frameNStart = frameN  # exact frame index
            sliderV1_pr.tStart = t  # local t and not account for scr refresh
            sliderV1_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV1_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV1_pr.started')
            sliderV1_pr.setAutoDraw(True)
        
        # *sliderV2_pr* updates
        if sliderV2_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderV2_pr.frameNStart = frameN  # exact frame index
            sliderV2_pr.tStart = t  # local t and not account for scr refresh
            sliderV2_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV2_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV2_pr.started')
            sliderV2_pr.setAutoDraw(True)
        
        # *sliderV3_pr* updates
        if sliderV3_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderV3_pr.frameNStart = frameN  # exact frame index
            sliderV3_pr.tStart = t  # local t and not account for scr refresh
            sliderV3_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV3_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV3_pr.started')
            sliderV3_pr.setAutoDraw(True)
        
        # *sliderV4_pr* updates
        if sliderV4_pr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderV4_pr.frameNStart = frameN  # exact frame index
            sliderV4_pr.tStart = t  # local t and not account for scr refresh
            sliderV4_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV4_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV4_pr.started')
            sliderV4_pr.setAutoDraw(True)
        
        # *next_pr* updates
        if next_pr.status == NOT_STARTED and allRatings:
            # keep track of start time/frame for later
            next_pr.frameNStart = frameN  # exact frame index
            next_pr.tStart = t  # local t and not account for scr refresh
            next_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'next_pr.started')
            next_pr.setAutoDraw(True)
        
        # *txt_next_pr* updates
        if txt_next_pr.status == NOT_STARTED and allRatings:
            # keep track of start time/frame for later
            txt_next_pr.frameNStart = frameN  # exact frame index
            txt_next_pr.tStart = t  # local t and not account for scr refresh
            txt_next_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(txt_next_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'txt_next_pr.started')
            txt_next_pr.setAutoDraw(True)
        # *mouse_pr* updates
        if mouse_pr.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_pr.frameNStart = frameN  # exact frame index
            mouse_pr.tStart = t  # local t and not account for scr refresh
            mouse_pr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_pr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_pr.started', t)
            mouse_pr.status = STARTED
            prevButtonState = mouse_pr.getPressed()  # if button is down already this ISN'T a new click
        if mouse_pr.status == STARTED:  # only update if started and not finished!
            buttons = mouse_pr.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(next_pr)
                        clickableList = next_pr
                    except:
                        clickableList = [next_pr]
                    for obj in clickableList:
                        if obj.contains(mouse_pr):
                            gotValidClick = True
                            mouse_pr.clicked_name.append(obj.name)
                    x, y = mouse_pr.getPos()
                    mouse_pr.x.append(x)
                    mouse_pr.y.append(y)
                    buttons = mouse_pr.getPressed()
                    mouse_pr.leftButton.append(buttons[0])
                    mouse_pr.midButton.append(buttons[1])
                    mouse_pr.rightButton.append(buttons[2])
                    mouse_pr.time.append(mouse_pr.mouseClock.getTime())
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "prac" ---
    for thisComponent in pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_pr
    import codecs
    import sys
    import io
    
    #Save results
    thisExp.addData('statement1_NL', statement1_NL_pr)
    thisExp.addData('statement1_EL', statement1_EL_pr)
    thisExp.addData('statement1_A', statement1_A_pr)
    thisExp.addData('statement1_T', statement1_T_pr)
    
    thisExp.addData('statement2_NL', statement2_NL_pr)
    thisExp.addData('statement2_EL', statement2_EL_pr)
    thisExp.addData('statement2_A', statement2_A_pr)
    thisExp.addData('statement2_T', statement2_T_pr)
    
    thisExp.addData('statement3_NL', statement3_NL_pr)
    thisExp.addData('statement3_EL', statement3_EL_pr)
    thisExp.addData('statement3_A', statement3_A_pr)
    thisExp.addData('statement3_T', statement3_T_pr)
    
    thisExp.addData('trialDuration', trialDuration_pr)
    
    #Reset some elements for next trial
    statement2_pr.opacity=0
    statement3_pr.opacity=0
    array2 = (sliderV1_pr, sliderV2_pr, sliderV3_pr, sliderV4_pr)
    for arr in array2:
        arr.text=""
    
        thx.text = "Merci de votre participation!"
    practices.addData('slider1_pr.response', slider1_pr.getRating())
    practices.addData('slider1_pr.rt', slider1_pr.getRT())
    practices.addData('slider1_pr.history', slider1_pr.getHistory())
    practices.addData('slider2_pr.response', slider2_pr.getRating())
    practices.addData('slider2_pr.rt', slider2_pr.getRT())
    practices.addData('slider2_pr.history', slider2_pr.getHistory())
    practices.addData('slider3_pr.response', slider3_pr.getRating())
    practices.addData('slider3_pr.rt', slider3_pr.getRT())
    practices.addData('slider3_pr.history', slider3_pr.getHistory())
    practices.addData('slider4_pr.response', slider4_pr.getRating())
    practices.addData('slider4_pr.rt', slider4_pr.getRT())
    practices.addData('slider4_pr.history', slider4_pr.getHistory())
    # store data for practices (TrialHandler)
    practices.addData('mouse_pr.x', mouse_pr.x)
    practices.addData('mouse_pr.y', mouse_pr.y)
    practices.addData('mouse_pr.leftButton', mouse_pr.leftButton)
    practices.addData('mouse_pr.midButton', mouse_pr.midButton)
    practices.addData('mouse_pr.rightButton', mouse_pr.rightButton)
    practices.addData('mouse_pr.time', mouse_pr.time)
    practices.addData('mouse_pr.clicked_name', mouse_pr.clicked_name)
    # the Routine "prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'practices'


# --- Prepare to start Routine "ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_rdy
#Change the text according to the selected language, function SetTxtInstr2()
if english:
    txt_rdy.text = "Ready to begin?"
    txt_next_rdy.text = "BEGIN"
else:
    txt_rdy.text = "Prêt à commencer ?"
    txt_next_rdy.text = "COMMENCER"
txt_next_rdy.setPos([next_rdy.pos])
# setup some python lists for storing info about the mouse_rdy
mouse_rdy.clicked_name = []
gotValidClick = False  # until a click is received
mouse_rdy.mouseClock.reset()
# keep track of which components have finished
readyComponents = [txt_rdy, next_rdy, txt_next_rdy, mouse_rdy]
for thisComponent in readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from code_rdy
    #Change the color of highlighed rect
    if next_rdy.contains(mouse_rdy):
            next_rdy.opacity=0.99
            txt_next_rdy.opacity=2
    else:
            next_rdy.opacity=0.73
            txt_next_rdy.opacity=0.73
    
    # *txt_rdy* updates
    if txt_rdy.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_rdy.frameNStart = frameN  # exact frame index
        txt_rdy.tStart = t  # local t and not account for scr refresh
        txt_rdy.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_rdy, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_rdy.started')
        txt_rdy.setAutoDraw(True)
    
    # *next_rdy* updates
    if next_rdy.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_rdy.frameNStart = frameN  # exact frame index
        next_rdy.tStart = t  # local t and not account for scr refresh
        next_rdy.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_rdy, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'next_rdy.started')
        next_rdy.setAutoDraw(True)
    
    # *txt_next_rdy* updates
    if txt_next_rdy.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_next_rdy.frameNStart = frameN  # exact frame index
        txt_next_rdy.tStart = t  # local t and not account for scr refresh
        txt_next_rdy.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_next_rdy, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'txt_next_rdy.started')
        txt_next_rdy.setAutoDraw(True)
    # *mouse_rdy* updates
    if mouse_rdy.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_rdy.frameNStart = frameN  # exact frame index
        mouse_rdy.tStart = t  # local t and not account for scr refresh
        mouse_rdy.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_rdy, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_rdy.started', t)
        mouse_rdy.status = STARTED
        prevButtonState = mouse_rdy.getPressed()  # if button is down already this ISN'T a new click
    if mouse_rdy.status == STARTED:  # only update if started and not finished!
        buttons = mouse_rdy.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(next_rdy)
                    clickableList = next_rdy
                except:
                    clickableList = [next_rdy]
                for obj in clickableList:
                    if obj.contains(mouse_rdy):
                        gotValidClick = True
                        mouse_rdy.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ready" ---
for thisComponent in readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(trialConditions),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code
    curStatement = 1 #display first statement by default
    end_text = "" #text of ending button
    col = 'black'
    slider1_is_initialized = False #true when we set the color of slider1..
    slider2_is_initialized = False
    slider3_is_initialized = False
    slider4_is_initialized = False
    allRatings = False #true when the user rated on all 4 sliders
    
    #Save results
    statement1_NL = -1
    statement1_EL = -1
    statement1_A = -1
    statement1_T = -1
    
    statement2_NL = -1
    statement2_EL = -1
    statement2_A = -1
    statement2_T= -1
    
    statement3_NL = -1
    statement3_EL = -1
    statement3_A = -1
    statement3_T = -1
    
    trialDuration = -1
    
    #define sliders (defining them here fix the labels position issue)
    slider1 = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, 0.01), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    slider2 = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, -0.122), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    slider3 = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, -0.25), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    slider4 = visual.Slider(win=win, name='rating', size=(1.4, 0.03), pos=(0, -0.38), labels=("0%", "100%"), ticks=(0, 100), granularity=0, style=("rating"), color='Gray', font='Arial', flip = False, labelHeight= 0.03)
    
    #Change the text according to the selected language, function SetTxtInstr()
    if english:
        txt_next.text = "NEXT"
        end_text = "DONE"
    else:
        txt_next.text = "SUIVANT"
        end_text = "COMPLÉTÉ"
    statement1.setText(state1)
    statement2.setOpacity(0)
    statement2.setText(state2)
    statement3.setOpacity(0)
    statement3.setText(state3)
    slider1.reset()
    slider2.reset()
    slider3.reset()
    slider4.reset()
    sliderS1.setPos((slider1.pos[0],slider1.pos[1]+0.03))
    sliderS1.setText(sliderSub1)
    sliderS2.setPos((slider2.pos[0],slider2.pos[1]+0.03))
    sliderS2.setText(sliderSub2)
    sliderS3.setPos((slider3.pos[0],slider3.pos[1]+0.03))
    sliderS3.setText(sliderSub3)
    sliderS4.setPos((slider4.pos[0],slider4.pos[1]+0.03))
    sliderS4.setText(sliderSub4)
    sliderV1.setPos((slider1.pos[0]+0.74, slider1.pos[1]))
    sliderV2.setPos((slider2.pos[0]+0.74, slider2.pos[1]))
    sliderV3.setPos((slider3.pos[0]+0.74, slider3.pos[1]))
    sliderV4.setPos((slider4.pos[0]+0.74, slider4.pos[1]))
    txt_next.setPos([next.pos])
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    mouse.mouseClock.reset()
    # keep track of which components have finished
    trialComponents = [stateBox, statement1, statement2, statement3, slider1, slider2, slider3, slider4, sliderS1, sliderS2, sliderS3, sliderS4, sliderV1, sliderV2, sliderV3, sliderV4, next, txt_next, mouse]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from code
        #console.log("mouse position: ", mouse_pr.getPos());
        
        #Prepare the initialisation of the sliders
        if slider1_is_initialized == False and statement1.status == STARTED:
            slider1_is_initialized  = True
            slider2_is_initialized  = True
            slider3_is_initialized  = True
            slider4_is_initialized  = True
            
            sliders = (slider1,slider2,slider3,slider4)
            for slider in sliders:
                try:
                    slider.marker.color = col
                    slider.marker.size = (0.025, 0.025)
                    #slider._skin.STANDARD.MARKER_COLOR = col
                    #slider._skin.MARKER_SIZE = (0.025, 0.025)
                    slider._barSize = (1, 0.01)
                    #slider.markerPos = 0.5
                    slider._onChange(True)()
                    slider._setupSlider()
                except:
                    print("An exception while initializing slider occurred")
            
        #Check if the user rated on all sliders
        if slider1.getRating() != None and slider2.getRating() != None and slider3.getRating() != None and slider4.getRating() != None:
            allRatings = True
        else:
            allRatings = False
        
        #Function that will display next instruction or go to next routine
        if next.contains(mouse) and mouse.getPressed()[0] == True and allRatings:
            if mouse_clicked == False:
                mouse_clicked = True
                if curStatement == 1:
                    statement2.setOpacity(1)
                    curStatement = 2
                    statement1_NL = slider1.getRating()
                    statement1_EL = slider2.getRating()
                    statement1_A = slider3.getRating()
                    statement1_T = slider4.getRating()
                elif curStatement == 2:
                    statement3.setOpacity(1)
                    curStatement = 3
                    txt_next.text = end_text
                    statement2_NL = slider1.getRating()
                    statement2_EL = slider2.getRating()
                    statement2_A = slider3.getRating()
                    statement2_T = slider4.getRating()
                else:
                    statement3_NL = slider1.getRating()
                    statement3_EL = slider2_pr.getRating()
                    statement3_A = slider3.getRating()
                    statement3_T = slider4.getRating()
                    trialDuration = t
                    continueRoutine = False #go to next routine
        else:
            mouse_clicked = False
        
        #Change the color of highlighed rect
        if next.contains(mouse):
            next.opacity=0.99
            txt_next.opacity=2
        else:
            next.opacity=0.73
            txt_next.opacity=0.73
        
        #Display rating of each slider
            ratings = ((slider1, sliderV1), (slider2, sliderV2), (slider3, sliderV3), (slider4, sliderV4))
            for slider_ in ratings:
                if slider_[0].getRating():
                    slider_[1].text = str(int(round(slider_[0].markerPos))) + "%"
        
        # *stateBox* updates
        if stateBox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stateBox.frameNStart = frameN  # exact frame index
            stateBox.tStart = t  # local t and not account for scr refresh
            stateBox.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stateBox, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'stateBox.started')
            stateBox.setAutoDraw(True)
        
        # *statement1* updates
        if statement1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            statement1.frameNStart = frameN  # exact frame index
            statement1.tStart = t  # local t and not account for scr refresh
            statement1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(statement1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'statement1.started')
            statement1.setAutoDraw(True)
        
        # *statement2* updates
        if statement2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            statement2.frameNStart = frameN  # exact frame index
            statement2.tStart = t  # local t and not account for scr refresh
            statement2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(statement2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'statement2.started')
            statement2.setAutoDraw(True)
        
        # *statement3* updates
        if statement3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            statement3.frameNStart = frameN  # exact frame index
            statement3.tStart = t  # local t and not account for scr refresh
            statement3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(statement3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'statement3.started')
            statement3.setAutoDraw(True)
        
        # *slider1* updates
        if slider1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            slider1.frameNStart = frameN  # exact frame index
            slider1.tStart = t  # local t and not account for scr refresh
            slider1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider1.started')
            slider1.setAutoDraw(True)
        
        # *slider2* updates
        if slider2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider2.frameNStart = frameN  # exact frame index
            slider2.tStart = t  # local t and not account for scr refresh
            slider2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider2.started')
            slider2.setAutoDraw(True)
        
        # *slider3* updates
        if slider3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider3.frameNStart = frameN  # exact frame index
            slider3.tStart = t  # local t and not account for scr refresh
            slider3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider3.started')
            slider3.setAutoDraw(True)
        
        # *slider4* updates
        if slider4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider4.frameNStart = frameN  # exact frame index
            slider4.tStart = t  # local t and not account for scr refresh
            slider4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider4.started')
            slider4.setAutoDraw(True)
        
        # *sliderS1* updates
        if sliderS1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS1.frameNStart = frameN  # exact frame index
            sliderS1.tStart = t  # local t and not account for scr refresh
            sliderS1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS1.started')
            sliderS1.setAutoDraw(True)
        
        # *sliderS2* updates
        if sliderS2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS2.frameNStart = frameN  # exact frame index
            sliderS2.tStart = t  # local t and not account for scr refresh
            sliderS2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS2.started')
            sliderS2.setAutoDraw(True)
        
        # *sliderS3* updates
        if sliderS3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS3.frameNStart = frameN  # exact frame index
            sliderS3.tStart = t  # local t and not account for scr refresh
            sliderS3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS3.started')
            sliderS3.setAutoDraw(True)
        
        # *sliderS4* updates
        if sliderS4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderS4.frameNStart = frameN  # exact frame index
            sliderS4.tStart = t  # local t and not account for scr refresh
            sliderS4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderS4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderS4.started')
            sliderS4.setAutoDraw(True)
        
        # *sliderV1* updates
        if sliderV1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            sliderV1.frameNStart = frameN  # exact frame index
            sliderV1.tStart = t  # local t and not account for scr refresh
            sliderV1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV1.started')
            sliderV1.setAutoDraw(True)
        
        # *sliderV2* updates
        if sliderV2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderV2.frameNStart = frameN  # exact frame index
            sliderV2.tStart = t  # local t and not account for scr refresh
            sliderV2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV2.started')
            sliderV2.setAutoDraw(True)
        
        # *sliderV3* updates
        if sliderV3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderV3.frameNStart = frameN  # exact frame index
            sliderV3.tStart = t  # local t and not account for scr refresh
            sliderV3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV3.started')
            sliderV3.setAutoDraw(True)
        
        # *sliderV4* updates
        if sliderV4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderV4.frameNStart = frameN  # exact frame index
            sliderV4.tStart = t  # local t and not account for scr refresh
            sliderV4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderV4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sliderV4.started')
            sliderV4.setAutoDraw(True)
        
        # *next* updates
        if next.status == NOT_STARTED and allRatings:
            # keep track of start time/frame for later
            next.frameNStart = frameN  # exact frame index
            next.tStart = t  # local t and not account for scr refresh
            next.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'next.started')
            next.setAutoDraw(True)
        
        # *txt_next* updates
        if txt_next.status == NOT_STARTED and allRatings:
            # keep track of start time/frame for later
            txt_next.frameNStart = frameN  # exact frame index
            txt_next.tStart = t  # local t and not account for scr refresh
            txt_next.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(txt_next, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'txt_next.started')
            txt_next.setAutoDraw(True)
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse.started', t)
            mouse.status = STARTED
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(next)
                        clickableList = next
                    except:
                        clickableList = [next]
                    for obj in clickableList:
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(mouse.mouseClock.getTime())
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial" ---
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code
    #Save results
    thisExp.addData('statement1_NL', statement1_NL)
    thisExp.addData('statement1_EL', statement1_EL)
    thisExp.addData('statement1_A', statement1_A)
    thisExp.addData('statement1_T', statement1_T)
    
    thisExp.addData('statement2_NL', statement2_NL)
    thisExp.addData('statement2_EL', statement2_EL)
    thisExp.addData('statement2_A', statement2_A)
    thisExp.addData('statement2_T', statement2_T)
    
    thisExp.addData('statement3_NL', statement3_NL)
    thisExp.addData('statement3_EL', statement3_EL)
    thisExp.addData('statement3_A', statement3_A)
    thisExp.addData('statement3_T', statement3_T)
    
    thisExp.addData('trialDuration', trialDuration)
    thisExp.addData('currentTrial', currentTrial)
    currentTrial = currentTrial + 1
    
    # See https://discourse.psychopy.org/t/exp-adddata-is-saving-only-one-value/14344/6
    #thisExp.nextEntry()
    
    #Reset some elements for next trial
    statement2.opacity=0
    statement3.opacity=0
    array2 = (sliderV1, sliderV2, sliderV3, sliderV4)
    for arr in array2:
        arr.text=""
    trials.addData('slider1.response', slider1.getRating())
    trials.addData('slider1.rt', slider1.getRT())
    trials.addData('slider1.history', slider1.getHistory())
    trials.addData('slider2.response', slider2.getRating())
    trials.addData('slider2.rt', slider2.getRT())
    trials.addData('slider2.history', slider2.getHistory())
    trials.addData('slider3.response', slider3.getRating())
    trials.addData('slider3.rt', slider3.getRT())
    trials.addData('slider3.history', slider3.getHistory())
    trials.addData('slider4.response', slider4.getRating())
    trials.addData('slider4.rt', slider4.getRT())
    trials.addData('slider4.history', slider4.getHistory())
    # store data for trials (TrialHandler)
    trials.addData('mouse.x', mouse.x)
    trials.addData('mouse.y', mouse.y)
    trials.addData('mouse.leftButton', mouse.leftButton)
    trials.addData('mouse.midButton', mouse.midButton)
    trials.addData('mouse.rightButton', mouse.rightButton)
    trials.addData('mouse.time', mouse.time)
    trials.addData('mouse.clicked_name', mouse.clicked_name)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# --- Prepare to start Routine "thanks" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_thx
import traceback

#Change the text according to the selected language, function SetTxtInstr2()
if english:
    thx.text = "Thank you for your participation!"
else:
    thx.text = "Merci de votre participation!"

#Get Data
try:
    df1 = pd.DataFrame.from_dict(thisExp.getAllEntries())

    # Create all the variables we will need
    df1 = df1.assign(average_non_filler_statement1_NL="",average_non_filler_statement1_EL="",average_non_filler_statement1_A="",average_non_filler_statement1_T="",
    average_non_filler_statement2_NL="",average_non_filler_statement2_EL="",average_non_filler_statement2_A="",average_non_filler_statement2_T="",
    average_non_filler_statement3_NL="",average_non_filler_statement3_EL="",average_non_filler_statement3_A="",average_non_filler_statement3_T="",
    average_non_filler_trialDuration="",sBADE_evidence_integration="",sBADE_reverse_evidence_integration="",sBADE_conservatism="",sBADE_trial_duration="")
    
    #Select target trials
    df1 = df1.query('currentTrial > 0')
    df1.reset_index(drop=True, inplace=True)

    #We will now compute the scores
    df1["statement1_NL"] = df1['statement1_NL'].div(100)
    df1["statement1_EL"] = df1['statement1_EL'].div(100)
    df1["statement1_A"] = df1['statement1_A'].div(100)
    df1["statement1_T"] = df1['statement1_T'].div(100)

    df1["statement2_NL"] = df1['statement2_NL'].div(100)
    df1["statement2_EL"] = df1['statement2_EL'].div(100)
    df1["statement2_A"] = df1['statement2_A'].div(100)
    df1["statement2_T"] = df1['statement2_T'].div(100)

    df1["statement3_NL"] = df1['statement3_NL'].div(100)
    df1["statement3_EL"] = df1['statement3_EL'].div(100)
    df1["statement3_A"] = df1['statement3_A'].div(100)
    df1["statement3_T"] = df1['statement3_T'].div(100)
    
    sub_df = df1.query('Type == "non-filler"')
    sub_df.reset_index(drop=True, inplace=True)

    df1["average_non_filler_statement1_NL"] = sub_df['statement1_NL'].mean()
    df1["average_non_filler_statement1_EL"] = sub_df['statement1_EL'].mean()
    df1["average_non_filler_statement1_A"] = sub_df['statement1_A'].mean()
    df1["average_non_filler_statement1_T"] = sub_df['statement1_T'].mean()

    df1["average_non_filler_statement2_NL"] = sub_df['statement2_NL'].mean()
    df1["average_non_filler_statement2_EL"] = sub_df['statement2_EL'].mean()
    df1["average_non_filler_statement2_A"] = sub_df['statement2_A'].mean()
    df1["average_non_filler_statement2_T"] = sub_df['statement2_T'].mean()

    df1["average_non_filler_statement3_NL"] = sub_df['statement3_NL'].mean()
    df1["average_non_filler_statement3_EL"] = sub_df['statement3_EL'].mean()
    df1["average_non_filler_statement3_A"] = sub_df['statement3_A'].mean()
    df1["average_non_filler_statement3_T"] = sub_df['statement3_T'].mean()

    df1["average_non_filler_trialDuration"] = sub_df['trialDuration'].mean()
    df1["sBADE_trial_duration"] = df1['average_non_filler_trialDuration'];

    columns_sum1 = ['average_non_filler_statement1_A', 'average_non_filler_statement2_A', 'average_non_filler_statement3_A', 'average_non_filler_statement2_NL', 'average_non_filler_statement2_EL', 'average_non_filler_statement3_NL', 'average_non_filler_statement3_EL']
    df1["sBADE_evidence_integration"] = df1[columns_sum1].sum(axis=1).iloc[0] - df1['average_non_filler_statement3_T'].iloc[0]

    columns_sum2 = ['average_non_filler_statement1_NL', 'average_non_filler_statement1_EL', 'average_non_filler_statement1_T', 'average_non_filler_statement2_NL', 'average_non_filler_statement2_EL', 'average_non_filler_statement2_T', 'average_non_filler_statement3_T']
    df1["sBADE_conservatism"] = df1[columns_sum2].sum(axis=1).iloc[0]

    # Compute reverse sBADE evidence integration
    oldMax = -1
    oldMin = 7
    newMax = 1
    newMin = 0
    oldRange = oldMax-oldMin
    newRange = newMax-newMin
    oldValue = df1["sBADE_evidence_integration"].iloc[0]
    newValue = (((oldValue-oldMin)*newRange)/oldRange)+newMin
    df1["sBADE_reverse_evidence_integration"].iloc[0] = newValue

    #print("new df1", df1.to_string().encode('utf-8'))
    #print("df1 size: ", df1.size)

    # Save task version and date
    taskVersion = "Offline_v3.0.1"
    taskName = "BADE_stories"
    df1["date_exp"] = startingDate
    df1["task_version"] = taskVersion

    thisExp.addData('date_exp', df1["date_exp"].iloc[0])
    thisExp.addData('task_version', df1["task_version"].iloc[0])
    thisExp.addData('sBADE_evidence_integration', df1['sBADE_evidence_integration'].iloc[0])
    thisExp.addData('sBADE_reverse_evidence_integration', df1['sBADE_reverse_evidence_integration'].iloc[0])
    thisExp.addData('sBADE_conservatism', df1['sBADE_conservatism'].iloc[0])
    thisExp.addData('sBADE_trial_duration', df1['sBADE_trial_duration'].iloc[0])
except Exception:
    print("An exception occurred. Error while computing scores.")
    traceback.print_exc()

# Send data to redcap
try:
    import requests, hashlib
    # Transform data to JSON Format
    # If we add or remove columns in the Google file, we must also change the variables here
    myDict = {}
    myDict["record_id"] = df1['participant'].iloc[0]
    myDict[redcapVars[1]] = df1['session'].iloc[0]
    myDict[redcapVars[2]] = df1['date_exp'].iloc[0]
    myDict[redcapVars[3]] = df1['task_version'].iloc[0]
    myDict[redcapVars[4]] = df1['sBADE_evidence_integration'].iloc[0]
    myDict[redcapVars[5]] = df1['sBADE_reverse_evidence_integration'].iloc[0]
    myDict[redcapVars[6]] = df1['sBADE_conservatism'].iloc[0]
    myDict[redcapVars[7]] = df1['sBADE_trial_duration'].iloc[0]

    data_to_send = [myDict]

    #print("data to send: ", data_to_send)

    url = 'https://portal.rimuhc.ca/cim/redcap/api/'

    redcap_data = {
        'token': redcapVars[0],
        'content': 'record',
        'format': 'json',
        'type': 'flat',
        'overwriteBehavior': 'normal',
        'forceAutoNumber': 'false',
        'data': json.dumps(data_to_send),
        'returnContent': 'ids',
        'returnFormat': 'json',
        'record_id': hashlib.sha1().hexdigest()[:16]
    }

    x = requests.post(url, data = redcap_data)

    print(x.text)
    print("Data sent to redcap.")
    
except Exception:
    print("An exception occurred. Error while sending data to redcap.")
    traceback.print_exc()
# keep track of which components have finished
thanksComponents = [thx]
for thisComponent in thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "thanks" ---
while continueRoutine and routineTimer.getTime() < 2.0:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thx* updates
    if thx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thx.frameNStart = frameN  # exact frame index
        thx.tStart = t  # local t and not account for scr refresh
        thx.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thx, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'thx.started')
        thx.setAutoDraw(True)
    if thx.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > thx.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            thx.tStop = t  # not accounting for scr refresh
            thx.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'thx.stopped')
            thx.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "thanks" ---
for thisComponent in thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
if routineForceEnded:
    routineTimer.reset()
else:
    routineTimer.addTime(-2.000000)

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
