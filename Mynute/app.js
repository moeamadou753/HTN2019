const express = require('express');
const assert = require('assert');
const app = express();
const https = require('https');
var feed;

https.get('https://mynute-cc031.firebaseio.com/Voice.json', (resp) => {
    let data = '';

    resp.on('data',(chunk) => {
        data += chunk;
        console.log('Im printing a chunk');
    });

    resp.on('end', ()=>{
        feed = JSON.parse(data);

        const spawn = require('child_process').spawn;
        const scriptExecution = spawn("python.exe", ["MeetingMinuteProcessor.py"]);
      
        scriptExecution.stdout.on('data', (data) => {
          
      });
      /*
        // Write data (remember to send only strings or numbers, otherwhise python wont understand)
        scriptExecution.stdin.write(feed.fields.meetingContent);
        // End data write
        scriptExecution.stdin.end();
        */

    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
  });

 


