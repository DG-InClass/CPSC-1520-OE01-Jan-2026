import { feedbackOnImagePricing } from "./quoteSystem";

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

        // Digital Assets (extra charges)
/* 
         *  - digital assets must be greater than or equal to zero
         *  - if there are digital assets, then the per-asset price must be greater than $10
*/        
        const inputImageCount = formControls.digitalAssetCount; // <input name="digitalAssetCount" />
        let imageCount = parseFloat(inputImageCount.value.trim());
        //    Overkill to trim numeric input               \_____/
        if(isNaN(imageCount)) {
            // Since this is from a <input type="number" />,
            // treat the value as being equivalent to zero
            imageCount = 0;
        } else {
            if(imageCount !== parseInt(imageCount)) {
                // that's an indication of not being a whole number
                message += `\n\tERROR! Your image count must be a whole number. You supplied: (${imageCount})`;
            }
            if(imageCount < 0) {
                message += `\n\tERROR! Image count must be zero (or blank) or a positive number. You supplied a negative image count.`;
            }
        }

        const inputPricePerImage = formControls.digitalAssetRate; // <input name="digitalAssetRate" />
        const pricePerImage = parseFloat(inputPricePerImage.value.trim());

        message += feedbackOnImagePricing(imageCount, pricePerImage);

        // Content Authoring (extra charges)
        const inputIncludeContent = formControls.includeContent; // <input type="checkbox" name="includeContent" />
        const includeContentCreation = inputIncludeContent.checked;
        // Radio Buttons and Checkboxes have a .checked property

        const inputPerWordRate = formControls['per-word-rate']; // <input name="per-word-rate" />
        const perWordRate = parseFloat(inputPerWordRate.value.trim());
        // TODO: Validate the perWordRate

        const inputStartDate = formControls['start-date']; // <input type="date" name="start-date" />
        // console.clear();
        // console.log(inputStartDate.value, 'is a', typeof inputStartDate.value); // just to see what format
        debugger;
        const startDateText = inputStartDate.value;
        let startDate;
        if(!startDateText) {
            // A start date was not supplied (I have an empty string)
            message += '\n\tERROR! A proposed start date must be supplied.';
        } else {
            startDate = new Date(startDateText.replace('-', '/'));
            message += `\nThe proposed start date is ${startDate}`;
            let dateParts = startDateText.split('-').map(x => parseInt(x));
            let temp = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
            message += `\nThe proposed start date is ${temp}`;
            message += `\nThe proposed start date is ${startDateText}`;
            const today = new Date(); // Current date/time
            if(startDate <= today) {
                message += '\n\tERROR! The proposed start date must be in the future.';
            }
        }

        // TODO: Determine quote amounts

        // Output the messages
        outputControl.value += message;

    });
