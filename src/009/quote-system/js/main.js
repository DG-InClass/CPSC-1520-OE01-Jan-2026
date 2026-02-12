
document.querySelector('form') // There's only one <form>, so...
    .addEventListener('submit', function(evt) {
        evt.preventDefault(); // 📌 Remember to do this for forms
        const form = evt.target; // evt.target is the <form>
        const formControls = form.elements; // every form has .elements

        console.log(formControls);

        // Output is being displayed as "plain text" in the browser
        const outputControl = formControls.breakdown; // <output name="breakdown" />
        let message = 'Contract Parameters Received...\n';
        outputControl.value = message;

        /* Validation Expectations:
         *  - job duration must be greater than zero
         *  - interval selection must be made (hours vs. weeks)
         *  - base rate must be $1000 or greater
         *  - digital assets must be greater than or equal to zero
         *  - if there are digital assets, then the per-asset price must be greater than $10
         *  - if content authoring is to be included, then the per-word-rate must be between 25¢ and $1.25 inclusive
         *  - Start date must be in the future (cannot be on the same day as the quote)
         *  - Start date must not be too far in the future (max is 3 months from today)
         * 
         * Stylistically, add/remove the attribute `aria-invalid="true"` appropriately
         */

        // Core website development work
        const inputJobDuration = formControls.duration; // <input name="duration" id="job-duration" />
        // const inputJobDuration = formControls['job-duration']; // <input name="duration" id="job-duration" />
        const inputRadioHours = formControls['interval-hours']; // <input type="radio" name="interval" id="interval-hours" />
        const inputRadioWeeks = formControls['interval-weeks']; // <input type="radio" name="interval" id="interval-weeks" />
        // const inputContractPeriod = formControls.interval; // RadioNodeList: <input name="interval" />
        const inputBaseRate = formControls['base-rate']; // <input name="base-rate" />

        let jobDuration = parseFloat(inputJobDuration.value);
        message = `Job duration: ${jobDuration}`;
        let inHours = inputRadioHours.checked;
        // <input type="radio" /> .checked will be either true/false
        let inWeeks = inputRadioWeeks.checked;
        message = `\tinHours:${inHours} | inWeeks:${inWeeks}\n` + message;
        outputControl.value += message;

        if(jobDuration <= 0) { // I am using a Relational Operator
            // \n is the new-line character
            // \t is the tab character
            message = '\n\tERROR: Job Duration must be greater than zero.'
            outputControl.value += message;
        }

        if(inHours || inWeeks) { // I am using a Logical Operator
            message = '\nDuration chosen is: ';
            if(inHours) {
                message += 'Hours';
            } else {
                message += 'Weeks';
            }
        } else {
            message = '\n\tERROR: Must choose either hours or weeks';
        }
        outputControl.value += message;

        // Digital Assets (extra charges)
        const inputImageCount = formControls.digitalAssetCount; // <input name="" />
        const inputPricePerImage = formControls.digitalAssetRate; // <input name="digitalAssetRate" />

        // Content Authoring (extra charges)
        const inputIncludeContent = formControls.includeContent; // <input type="checkbox" name="includeContent" />
        const inputPerWordRate = formControls['per-word-rate']; // <input name="per-word-rate" />
        const inputStartDate = formControls['start-date']; // <input type="date" name="start-date" />

    });
