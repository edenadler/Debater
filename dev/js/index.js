import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

var DebatePage = React.createClass({
    render: function(){
        return(
            <div className="debate-wrapper container">
                <DebateTopic className="debate-title" topic="Arab-Israeli Conflict"/>
                <DebateInfo className="debate-info" />
                <DebateView className="debate row"/>
            </div>
        )
    }
});

var DebateTopic = React.createClass({

    render: function(){
        return(
            <div>
                <h1>{this.props.topic}</h1>
            </div>
        )
    }

});

var DebateInfo = React.createClass({

    render: function(){
        return(
            <div>
                <Rounds className="round-status" roundInfo="ROUND 1: introduction"/>
                <Timer className="timer" timer="40"/>
                <Viewers className="viewers" viewers="4000 viewers"/>
            </div>
        )
    }

});

var Rounds = React.createClass({

    render: function(){
        return(
            <div>{this.props.roundInfo}</div>
        )
    }

});

var Timer = React.createClass({

    render: function(){
        return(
            <div>{this.props.timer}</div>
        )
    }

});

var Viewers = React.createClass({

    render: function(){
        return(
            <div>{this.props.viewers}</div>
        )
    }

});

var DebateView = React.createClass({
    render: function(){
        return(
            <div>
                <DebateTopic className="debate-title" topic="Arab-Israeli Conflict"/>
                <DebateInfo className="debate-info" />
            </div>
        )
    }
});


var CommentFeed = React.createClass({
   sendHandler(message){
       const messageObject = {
           username: this.props.username,
           message
       };

       // this.socket.emit('client:message',messageObject);

       messageObject.fromMe = true;
       this.addMessage(messageObject);
   },
    addMessage(message){
      //append the message to the component state
        const messages = this.state.messages;
        messages.push(message);
        this.setState({messages});
    },
    render: function(){
        return(
            <div>
                <h3>Chat Feed</h3>
                <Messages messages={this.state.messages}/>
                <AddMessage onSend={this.sendHandler}/>
            </div>
        )
   },
});

var Messages = React.createClass({
    // get the messagelist container and set the scrollTop to the height of the container
    componentDidUpdate(){
      const objDiv = document.getElementById("messageList");
      objDiv.scrollTop = objDiv.scrollHeight;
    },
    // Loop through all the messages in the state and create a Message component
    render: function() {
        const messages = this.props.messages.map((message, i) => {
            return (
                <Message key={i} username={message.username} fromMe={message.fromMe}/>
            )
        });
        return(
            <div className="messages" id="messageList">{messages}</div>
        )
    }
});

var Message = React.createClass({
   render: function(){
       // Was the message sent by the current user. If so, add a css class
       const fromMe = this.props.fromMe ? 'from-me' : '';
       return (
           <div className={`message ${fromMe}`}>
               <div>{this.props.username}</div>
               <div>{this.props.message}</div>
           </div>
       )
   }
});

var AddMessage = React.createClass({
    textChangeHandler(event) {
        this.setState({chatInput: event.target.value})
    },
    submitHandler(event){
        //stop form from refreshing page on submit
      event.preventDefault();

      //call the onSend callback with the chatInput message
        this.props.onSend(this.state.chatInput);

        //clear the input box
        this.setState({chatInput: ''});

    },


    render: function(){
        return(
            <form onSubmit={this.submitHandler}>
                <textarea onChange={this.textChangeHandler} value={this.state.chatInput} placeholder="Add your comment"></textarea>
            </form>
        )
    }
});




ReactDOM.render(
    <CommentFeed/>,
    document.getElementById('root')
);
