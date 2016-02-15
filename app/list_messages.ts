/**
 * Created by jerchoo on 14/2/16.
 */
import {Component} from 'angular2/core';
import {Message, MessagesService} from './messages_service';

@Component({
// Declare the tag name
    selector: 'list-messages',
    template: `
<h1>Messages:</h1>
<ul>
    <li *ngFor="#message of messages">
{{message.name}} - {{message.message}}</li>
</ul>
`,
    providers: [MessagesService]
})
export class ListMessages {

    public messages: Message[];

    constructor(private _MessagesService: MessagesService) { }

    ngOnInit() {
        this.messages = this._MessagesService.getMessages();
    }
}