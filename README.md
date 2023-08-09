#### *Table of contents*
- [BADE Stories](#bade-stories)
    * [Development](#development)
        + [Built with](#built-with)
        + [Prerequisites](#prerequisites)
        + [How to use?](#how-to-use)
    * [Features](#features)
    * [Code Reference](#code-reference)
    * [Code Example](#code-example)
    * [Outputs](#outputs)
    * [Contribute](#contribute)
    * [Authors and acknowledgment](#authors-and-acknowledgment)
    * [License](#license)
    * [References](#references)

# BADE Stories

###### tags: `cognitive bias, bias against disconfirmatory evidence, decision making, psychosis, bade, psychopy, pavlovia`

> Cognitive task to detect bias against disconfirmatory evidence (BADE)

BADE Stories is a cognitive task designed to detect the bias against disconfirmatory evidence (BADE) [[1](#1),[2](#2)], that is, unwillingness to revise a belief in light of evidence that contradicts it. Respondents must rate each of four interpretations of a scenario that unfolds over three statements as shown below.

This version can be completed in English or French and consists of 2 practice trials and 16 main trials (12 experimental, 4 interspersed filler). 

<p align="center">
  <img src="https://gitlab.pavlovia.org/crispstudies/bade-stories/raw/master/documentation/BADE_stories.gif" width="85%" height="85%"/>
</p>

## Development
### Built with
Psychopy software using [Psychopy builder](https://www.psychopy.org/builder) with Javascript custom code. The task was tested under Google Chrome.
### Prerequisites
- Psychopy (v2020.2.8)
- Python (3.7.4)
- Google Chrome (90.0.4430.212) with Javascript (1.7)
### How to use?
This task can be administered entirely online through Pavlovia and/or offline with PsychoPy.
#### Online
- Create a [Pavlovia](https://gitlab.pavlovia.org/users/sign_in) account
- [Fork](https://pavlovia.org/docs/experiments/create-fork) the [BADE Stories](https://gitlab.pavlovia.org/katielavigne/bade-stories) task to your account
- In your [Pavlovia dashboard](https://pavlovia.org/dashboard?tab=0), the task should soon be listed under Experiments, which you can click on to View Code, Pilot, or Run. 
#### Offline
- Install [Psychopy](https://www.psychopy.org/download.html)
- Install [Python](https://www.python.org/downloads/)
- Download [BADE Stories](https://gitlab.pavlovia.org/katielavigne/bade-stories)
- Extract the archive
- Run Psychopy
- Go to File>Open... locate the folder of the BADE Stories task and open BADE_stories.psyexp

#### Offline/Online Capabilities
- After following all steps above, login with your Pavlovia credentials on PsychoPy
- Open the downloaded BADE_stories.psyexp
- Sync this task with the web project by clicking the left-most globe icon
- Start the experiment with the play button 
- This should launch the experiment in your browser on the pavlovia website
- If you have a warning on the pavlovia website, click on the link and put the experiment in Piloting mode
## Features
- Prevent special characters in the participant's name
- Language selection (English or French) at the beginning of the experiment
- Selection buttons that make it possible to use the task on a tablet or smartphone (drag and drop not available for rating - click only)
- A practice session before beginning the task
- Preview of the score when drag & drop is performed on web browser
- Automatically computing scores once the participant has finished the trials
- The computed scores are sent directly to the database of the Redcap online survey manager
## Code Reference
N/A
## Code Example
The code interacts with the Builder components.


For example, if we create a Text component called "myText" with the builder and write "MAGIC DOES NOT EXIST" in its Text field. 
Then we can create a Code component that will contain the following Javascript code:

myText.text = "ABRACADABRA";

If we run the experiment online, myText will display ABRACADABRA.

## Outputs

At the end of the task a logfile is created. This file contains the data collected during the task.

We computed scores once the participant finished the trials (scores are computed when they reach the thx screen). These scores are sent directly to the database of the Redcap online survey manager. Below are the different variables that we compute:

| Variables | Description  |
|---|---|
| subject | Participant's identifier  |
| language | Language selected |
| session | Number of the session (session 1 = pre, session 2 = post)|
| date | Date the task was completed |
| task_version | The release version of the task used |
| sBADE_evidence_integration | Tendency to take new evidence into consideration (i.e., highest scores indicate lower evidence integration. -1 would represent the best integration of the evidence and 7 the poorest |
| sBADE_evidence_integration_norm_rev | Normalized and reversed score of the evidence integration item, so that higher scores indicate more evidence integration. 1 would represent the best integration of the evidence and 0 the poorest |
| sBADE_conservatism| Willingness to provide high ratings when justified. A low score indicates a reduced willingness|
| sBADE_trial_duration | Average response time of non-filler trials|

The exact calculations can be found in the code and are based on the following macros: https://drive.google.com/drive/folders/1UyBh4STZDGWsQuD7OjtX1u7Uq4cQE8qI?usp=sharing

## Contribute
E-mail: <katie.lavigne@mcgill.ca>
## Authors and acknowledgment
BADE Stories was designed by Todd Woodward and Steffen Moritz. This version was developed by Caroline Dakoure and Katie Lavigne.
## License
Credit this work by copying the following to your credits section:

BADE Stories Lavigne et al. (https://gitlab.pavlovia.org/katielavigne/bade-stories)
Licensed under GNU General Public License v3.0.
https://www.gnu.org/licenses/gpl-3.0.txt
## References
<a id="1">[1]</a> Speechley, W. J.; Ngan, E. T-C.; Moritz, S.; and Woodward, T. S. 2012. Impaired evidence integration and delusions in schizophrenia. *Journal of Experimental Psychopathology* 3 (4): 688-701. doi.org/10.5127/jep.018411.
<a id="2">[2]</a> Woodward TS, Buchy L, Moritz S, Liotti M. A bias against disconfirmatory evidence is associated with delusion proneness in a nonclinical sample. Schizophr Bull. 2007;33(4):1023–1028. doi.org/10.1093/schbul/sbm013.
