# **<div dir="rtl" align="center">CowinSlot</div>** 
### <div dir="rtl" align="center"><a href="https://github.com/fLanKer42/cowinSlot.git">Github Repository</a></div>
## <div dir="rtl" align="center">A project that notifies people of the availability of their preferred vaccination slot using the cowin API. The project includes a desktop program, a react native mobile app and a program to predict the timing of the availability of the slot based on previous data <br /></div>

<div dir="rtl" align="center">Author: Dhruv Rai (@fLanKer42)</div>
<br />

## Cowin API
Cowin API is offered by the government of India and offers 100 calls every 5 minutes from a single ip address.<br />
An example API call to cowin: https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=233&date=2-06-2021
<br />
Here, 233 in the url query string represents the district id that can be found in the json returned by the call https://cdn-api.co-vin.in/api/v2/admin/location/districts/16
<br />
Where, 16 represents the state id that can be found in the json returned by the call https://cdn-api.co-vin.in/api/v2/admin/location/states
<br />
Such hassles can be avoided by making the call once and storing the entire data in the program. Furthermore, the date in the url query string represents the date for which results will be returned.<br />

An example response from the API is:<br/>
<img src="https://user-images.githubusercontent.com/58771543/124338824-8ddd5680-dbc7-11eb-98bc-7b9e6a68cc50.png" width="500px"/>
<br />
This fetch can be called atmost once per four seconds by a single ip address that allows this project to function. Every 5 seconds, the program makes a fetch, check if the users' prference matches and decides whether to notify user or continue fetching.


## React Native Mobile Application

This is an app that uses the cowin api to notify users when their preferred vaccination slot is available. <br />
The app is built with react native.

## GUI of the app
<div>
<img src='https://user-images.githubusercontent.com/58771543/124337979-15749680-dbc3-11eb-8122-c6695085cfdd.png' width="22%"/>
<img src='https://user-images.githubusercontent.com/58771543/124337989-22918580-dbc3-11eb-81a1-85f45d7a4d88.png' width="22%"/>
<img src='https://user-images.githubusercontent.com/58771543/124337996-2e7d4780-dbc3-11eb-9e1e-efd5ce4d7c48.png' width="22%"/>
<img src='https://user-images.githubusercontent.com/58771543/124338006-3d63fa00-dbc3-11eb-9ff8-46e5ed0864f6.png' width="22%"/>
 </div>
 
 <hr />
 The user friendly gui allows users to bypass the challenges of understanding the API and use their own mobile device to fetch from the cowin api.
 <br />
 Instead of relying on third party servers to fetch from the API and inform them, the users have the control in their own hands making this method the fastest.
 <br />
 With an API call every 4 seconds, it notifies users instantly providing them the fastest and the easiest way to search for a vaccination slot.
 
 ## Python tkinter desktop program
 
 This is a python program that does the same task as the mobile app i.e fetching from the cowin API and checking for availability of the slots, it has the additional feature of emailing the user on availability.
 <br />
 The users are alerted by the following methods. <br />
 <img src="https://user-images.githubusercontent.com/58771543/124338993-8d918b00-dbc8-11eb-8b74-710bb773348b.png" width="25%" />
 <img src="https://user-images.githubusercontent.com/58771543/124339021-bf0a5680-dbc8-11eb-9cb0-063512dda803.png" width="65%" />




