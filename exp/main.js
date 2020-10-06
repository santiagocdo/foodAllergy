
/* create timeline */
let timeline = [];

/* define welcome message trial */
let welcome = {
    type: "html-keyboard-response",
    stimulus: '<h1 style="color:black;">Welcome to the experiment!</h1>'+
    '<p>Press any key to begin.</p>'
};
timeline.push(welcome);

/* define instructions trial */
let instructions_1 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">In the first part of the experiment, you are asked to imagine that you are an allergist (someone who tries to discover the cause of allergic reactions in people).</h2>' +
            '<h3 style="color:black;">You have been presented with a new patient who suffers from allergic reactions following some meals, but not others.</h3> '+
            '<h3 style="color:black;">You arrange for them to eat a number of different meals, containing one or two foods, and observe whether or not they have an allergic reaction.</h3>'+
            '<p style="color:black;">Press the spacebar to continue.</p>',
    choices: [32], //ascii spacebar
};
timeline.push(instructions_1);

let instructions_2 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">During the first part of the experiment, you will be shown pictures of the foods given to your patient for each meal.</h2>'+
            '<h3 style="color:black;">You will then be shown whether or not they suffered an allergic reaction after eating the meal.</h3>' + 
            '<h3 style="color:black;">When you see each meal, you will have three seconds to predict whether or not you believe they will suffer an allergic reaction after eating the meal.</h3>'+
            '<p style="color:black;">Press the spacebar to continue.</p>',
            choices: [32], //ascii spacebar
};
timeline.push(instructions_2);

let instructions_3 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">To predict that a particular meal <strong><u>will not</strong></u> cause an allergy please press the <q><strong>0</strong></q> key on the keyboard.</h2>'+
            '<h2 style="color:black;">To predict that a meal <b><u>will cause</b></u> an allergic reaction please press the <q><strong>1</strong></q> key on the keyboard.</h2>'+
            '<p style="color:black;">Press either of the response keys to continue.</p>',
    choices: [48, 49], //ascii spacebar
};
timeline.push(instructions_3);

let instructions_4 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:black;">Obviously you will have to guess at first.</h2>'+
            '<h3 style="color:black;">But hopefully, as you see more meals, you will learn which foods tend to make your patient have an allergic reaction.</h3>'+
            '<br>'+
            '<h2 style="color:black;">Please hold the reponse key AND the spacebar if you are more confident you are making the right choice.</h2>'+
            '<h3 style="color:black;">If you think you are guessing please hold both keys briefly.</h3>'+
            '<h3 style="color:black;">If you are very confident you should press and hold both keys until the meal disappears from the screen.</h3>'+
            // '<h2 style="color:black;">Please hold the key down longer if you are more confident you are making the right choice.</h2>'+
            // '<h3 style="color:black;">If you think you are guessing please hold the key briefly.</h3>'+
            // '<h3 style="color:black;">If you are very confident you should press and hold until the meal disappears from the screen.</h3>'+
            '<p style="color:black;">Press the spacebar to continue.</p>',
    choices: [32],
};
timeline.push(instructions_4);

let instructions_5 = {
type: "html-keyboard-response",
stimulus: '<h2 style="color:black;">Try to make your prediction <b><u>before</b></u> the meal leaves the screen.</h2>'+
        '<br>'+
        '<h2 style="color:black;">Food <strong><u>does not</strong></u> cause an allergy &#8594 <q><strong>0</strong></q> key </h2>'+
        '<h2 style="color:black;">Food <strong><u>causes</strong></u> an allergy &#8594 <q><strong>1</strong></q> key</h2>'+
        '<p style="color:black;">Press the spacebar to begin the practice trials.</p>',
choices: [32],
};
timeline.push(instructions_5);

// create fixation point
let fixation = {
    // data: {test_part: 'fixation'},
    type: 'html-keyboard-response',
    stimulus: '<div style="color:black; font-size:60px;"></div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
}

// create  trials
let stimuli = {
    type: "html-keyboard-response",
    stimulus: function(){
            var html="<img src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
            "<img src='"+jsPsych.timelineVariable('stimulus2', true)+"'>";
            return html;
    }, 
    
    // jsPsych.timelineVariable('stimulus'),
    choices: [48, 49], // [0 key , 1 key]
    trial_duration: 3000,
    // stimulus_duration: 3000,
    response_ends_trial: false,
    prompt: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
    data: jsPsych.timelineVariable('data'),
    on_load: function buttonPress(data){
        barFill = document.getElementById("fillUp");
        barFill.innerHTML = 'Hold either response key and the spacebar to indicate confidence.';
        document.getElementById("tapTap").focus(); //gives focus to the text box
        document.getElementById("counter").setAttribute("onkeypress", "return (event.charCode === 32) && moveConfidence()"); // event.charCode allows us to set specific keys to use 
        // if (data.key_press==48){
        //     // pressing_time = 7000;
        //     // buttonPressing.trial_duration = pressing_time;
        //     document.getElementById("counter").setAttribute("onkeypress", "return (event.charCode == 48) && moveConfidence()"); // event.charCode allows us to set specific keys to use
        //     participantResponse = 48;
        //   } else if (data.key_press==49){ 
        //     // pressing_time= 21000; // for right handed only
        //     // buttonPressing.trial_duration = pressing_time;
        //     document.getElementById("counter").setAttribute("onkeypress", "return (event.charCode == 49) && moveConfidence()"); // event.charCode allows us to set specific keys to use
        //     participantResponse = 49;
        //   }
    },
    // on_load: function(data){
    //     eventTarget.addEventListener("keydown", event => {
    //         if (event.isComposing || event.keyCode === 229) {
    //           return;
    //         }
    //         console.log("yes");
    //       });
    // },
    on_finish: function(data){
    // data.practice = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    // data.practice = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    // document.getElementById("demo").addEventListener("keypress", confidenceIndicator);
    // function confidenceIndicator() {
    //     var last;
    //     var output = $('#demo');
    //     $('#txt').on('input', function() {
    //         var n = new Date()
    //         output.text((last - n) + ' ms');
    //         last = n;
    //     });
    //     data.confidence = output.text(last - n);
    // }
    data.subject_key = 'GUID';
    data.src_subject_id = workerId;
    data.interview_date = today;
    data.interview_age = ageAtAssessment;
    data.sex = sexAtBirth;
    if (data.key_press == data.correct_response) {
        data.accuracy = true;
        data.percent_confidence = totalConfidence;
    } else if (data.key_press == data.incorrect_response) {
        data.accuracy = false;
        data.percent_confidence = totalConfidence;
    } else {
        data.accuracy = '';
        data.percent_confidence = 0;
    }
    }
};


// create feedback trials
let feedback = {
    // data: {test_part: 'feedback'},
    type: 'html-keyboard-response',
    // stimulus: function() {
    //     let last_trial_accuracy = jsPsych.data.get().last(1).values()[0].accuracy;
    //     if (last_trial_accuracy == 1) {
    //         return '<div style="color:red; font-size:60px;">ALLERGIC REACTION!</div>'
    //     } else {
    //         return '<div style="color:green; font-size:60px;">NO REACTION</div>'
    //     }
    //   },
    stimulus: function() {
    let last_trial_feedback = jsPsych.data.get().last(1).values()[0].correct_response;
    if (last_trial_feedback == 49) { // if last correct_response == 49 (1 key)
        // return '<div style="color:red; font-size:60px;">ALLERGIC REACTION!</div>'
        return '<img src=stimuli/+.jpg ></img>'
    } else if (last_trial_feedback == 48) { // if last correct_response == 48 (0 key)
        // return '<div style="color:green; font-size:60px;">NO REACTION</div>'
        return '<img src=stimuli/-.jpg ></img>'
    }
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    response_ends_trial: false,
    // post_trial_gap: jsPsych.randomization.sampleWithReplacement(isi, 5, [5,1]),
    post_trial_gap: 1000, //ISI
    on_finish: function(data){
    // data.practice = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    // data.c1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    
    }
};

let practice_procedure = {
    timeline: [fixation, stimuli, feedback],
    timeline_variables: practice_stimuli,
    randomize_order: false,
}

timeline.push(practice_procedure);

/* END TRAINING TRIAL FOR PARTICIPANTS */



/* BEGIN EXPERIMENT */

let instructions_6 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:black;">Let us begin! Press the spacebar when you are ready to start the experiment.</p>'+
            '<p style="color:black;">The first part of the experiment should last about 20 minutes with breaks in-between. After you finish, you will be directed to the 2nd part of the experiment which is a survey (about 20-30 minutes).</p>'+
            '<br>'+
            '<p style="color:black;">Good Luck!</p>',
    choices: [32],

};
timeline.push(instructions_6);


let learning_procedure = {
    timeline: [fixation, stimuli, feedback],
    timeline_variables: learning_stimuli,
    randomize_order: true,
    type: 'fixed-repititions',
    repetitions: 1
}

timeline.push(learning_procedure);

// let blocking_procedure = {
//     timeline: [fixation, stimuli, feedback],
//     timeline_variables: blocking_stimuli,
//     randomize_order: true,
//     type: 'fixed-repititions',
//     repetitions: 6
// }

// timeline.push(blocking_procedure);

// let testing_procedure = {
//     timeline: [fixation, stimuli, feedback],
//     timeline_variables: testing_stimuli,
//     randomize_order: true,
//     type: 'fixed-repititions',
//     repetitions: 6
// }

// timeline.push(testing_procedure);

//COMPLETION MESSAGE: Completed Classification Phase

let qualtricsSurvey = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:black;">You have now completed the task! Saving data...PLEASE DO NOT CLOSE THIS BROWSER until you complete the second part.</p> ' +
        '<p style="color:black;">BEFORE THE LINK DISAPPEARS please move on to the second part of the task at this link to obtain your completion code:</p> ' +
        "<a href=" + qualtrics + ' target="_blank">' + qualtrics + "</a>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 10000,
};
timeline.push(qualtricsSurvey);


