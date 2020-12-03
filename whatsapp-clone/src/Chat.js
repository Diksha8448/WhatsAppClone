import React from "react";
import "./Chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile,Message,MoreVert,SearchOutlined, SettingsInputAntenna} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last Seen at......</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
            </div>  
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Diksha</span>
                        This is a message
                        <span className="chat_timestamp">
                            {new Date().toUTCString()}
                        </span>
                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_name">Diksha</span>
                        This is a message
                        <span className="chat_timestamp">
                            {new Date().toUTCString()}
                        </span>
                </p>
                
            </div> 
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input
                     /*   value={input}
                        onChange={(e)=>SetInput(e.target.value)}
                        */
                        placeholder="Type a message"
                        type="text"
                    />
                    <button /*onClick={sendMessage}*/ type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
}

export default Chat;
