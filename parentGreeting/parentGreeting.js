import { LightningElement, track } from 'lwc';


export default class ParentGreeting extends LightningElement {
    @track languageOptions = [
        { label: 'English', value: 'English' },
        { label: 'Spanish', value: 'Spanish' },
        { label: 'French', value: 'French' },
    ];
    @track selectedLanguage = '';

    handleLanguageChange(event) {
        this.selectedLanguage = event.target.value;
        console.log(this.selectedLanguage);
    }
}

 // To store the key-value JSON data

    
    //     // Fetch the JSON static resource
    //     fetch(simpleGreetings)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.greetings = data;

    //             // Prepare language options for the combobox
    //             this.languageOptions = Object.keys(data).map((key) => ({
    //                 label: key,
    //                 value: key
    //             }));
    //         })
    //         .catch((err) => {
    //             this.error = 'Failed to load greetings: ' + err.message;
    //         });
     

   
