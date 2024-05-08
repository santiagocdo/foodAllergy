let practice_procedure = {
    timeline: [fixation, stimuli, feedback],
    timeline_variables: practice_stimuli,
    randomize_order: false,
};

let learning_procedure;
switch (version) {
    case "kamin":
        learning_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: learning_stimuli_standard,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: learningRepetition,
        };
        break;
    case "social_kamin":
        learning_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: learning_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: learningRepetition,
        };
        break;
    case "kamin_gain":
        learning_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: learning_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: learningRepetition,
        };
        break;
    case "kamin_loss":
        learning_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: learning_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: learningRepetition,
        };
        break;
}

let blocking_procedure;
switch (version) {
    case "kamin":
        blocking_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: blocking_stimuli_standard,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: blockingRepetition,
        };
        break;
    case "social_kamin":
        blocking_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: blocking_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: blockingRepetition,
        };
        break;
    case "kamin_gain":
        blocking_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: blocking_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: blockingRepetition,
        };
        break;
    case "kamin_loss":
        blocking_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: blocking_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: blockingRepetition,
        };
        break;
}

let testing_procedure;
switch (version) {
    case "kamin":
        testing_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: testing_stimuli_standard,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: testingRepetition,
        };
        break;
    case "social_kamin":
        testing_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: testing_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: testingRepetition,
        };
        break;
    case "kamin_gain":
        testing_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: testing_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: testingRepetition,
        };
        break;
    case "kamin_loss":
        testing_procedure = {
            timeline: [fixation, stimuli, feedback],
            timeline_variables: testing_stimuli_short,
            randomize_order: true,
            type: "fixed-repetitions",
            repetitions: testingRepetition, 
        };
        break;
}
timeline.push(welcome);

timeline.push(instructions_1);
timeline.push(instructions_2);
timeline.push(instructions_3);
timeline.push(instructions_4);
timeline.push(instructions_5);

timeline.push(practice_procedure);

timeline.push(instructions_6);

// to test uncomment the learning, blocking, and testing procedures
timeline.push(learning_procedure);
timeline.push(blocking_procedure);
timeline.push(testing_procedure);

if (lastQuestion) {
    timeline.push(screenRating1);
    timeline.push(screenRating2);
}

timeline.push(dataSave);

// Old jsPsych 6.3 syntax
startExperiment();
