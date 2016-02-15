/**
 * Created by jerchoo on 14/2/16.
 */
import {Injectable, EventEmitter} from 'angular2/core';

declare var Firebase;

export class Message {
    public key: string;
    public name: string;
    public message: string;

    constructor(name: string, message: string, key: string) {
        this.name = name;
        this.message = message;
        this.key = key;
    }
}

@Injectable()
export class MessagesService {
    private ref: Firebase;
    private refMessages: Firebase;

    constructor() {

        console.log('constructor MessagesService');
        if (!this.ref) {
            this.ref = new Firebase('https://awesomemuch.firebaseio.com');
                this.refMessages = this.ref.child('messages');
        }

    }

    getMessages() {

        //delete old messages and the old listener
        promissedMessages = [];
        this.refMessages.off('child_added');

        //add Firebase listener on child added
        this.refMessages.on('child_added', function(snapshot, prevChildKey) {
            var name = snapshot.val().name;
            var message = snapshot.val().message;
            var key = snapshot.key();

            promissedMessages.push(new Message(name, message, key));
        });

        return promissedMessages;
    }

    sendMessage(m: Message) {
        this.refMessages.push({
            name: m.name,
            message: m.message
        });
    }

}

var promissedMessages: Message[] = [];