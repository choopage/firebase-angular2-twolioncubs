/**
 * Created by jerchoo on 14/2/16.
 */
import {Component} from 'angular2/core';
import {Message, MessagesService} from './messages_service';
import {AddMessage} from './add_message';
import {ListMessages} from './list_messages';

@Component({
// Declare the tag name
    selector: 'messages-app_wrapper',
    template: `
<add-message></add-message>

<hr>

<list-messages></list-messages>
`,
    providers: [MessagesService],
    directives: [ListMessages, AddMessage]
})
export class MessagesAppWrapper {

    constructor(private _MessagesService: MessagesService) { }

}