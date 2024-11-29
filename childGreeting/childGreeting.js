import { LightningElement, api, track } from 'lwc';
import simpleGreetings from '@salesforce/resourceUrl/SimpleGreetings';

export default class ChildGreeting extends LightningElement {
    @api greeting; 
    @track abc;
    renderedCallback(){
        fetch(simpleGreetings)
            .then((response) => response.json())
            .then((data) => {
                this.abc=data[this.greeting].home;   
            console.log('Initialized abc:', this.abc);
            })
            .catch((err) => {
                this.error = 'Failed to load greetings: ' + err.message;
            });

    }

}
