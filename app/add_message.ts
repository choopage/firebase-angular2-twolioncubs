/**
 * Created by jerchoo on 14/2/16.
 */
import {Component} from 'angular2/core';
import {Message, MessagesService} from './messages_service';

@Component({
// Declare the tag name
    selector: 'add-message',
    template: `
<label>Name:</label>
<input type="text" [(ngModel)]="m.name" placeholder="Enter a name here">

<label>Message:</label>
<input type="text" [(ngModel)]="m.message" placeholder="Enter a message here">

<button type="button" (click)="sendMessage()">Send message</button>
`,
    providers: [MessagesService]
})
export class AddMessage {
// Declaring the variable for binding with initial value
    public m: Message = new Message();


    constructor(private _MessagesService: MessagesService) { }

    sendMessage() {
        console.log("send message[" + this.m.name + "," + this.m.message + "]");
        this._MessagesService.sendMessage(this.m);
    }
}