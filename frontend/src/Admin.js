import React, { Component } from 'react';

class MiniModal extends Component {
    constructor(props) {
        super(props)
        
        let params = new URLSearchParams(window.location.search.slice(1));

        const state = {};
        const style = {
            background: "orangered",
            padding: '5px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '20px'
        }
        
        state.message = params.get("error");
        if (params.get("success") === "true") {
            state.message = "The website has been updated successfully."
            style.background = "lime"
        }
        
        state.style = style;
        
        this.state = state;
    }
    
    render() {
        const { style, message } = this.state;
        
        if (message === null) {
            return null
        }
        
        return <div style={style}>{message}</div>
    }
}

class Admin extends Component {
    render() {
        return (
            <div style={{flexDirection: "column", background: "rgb(102, 22, 108)", width: "100%", height: "100%", padding: "0px", margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{background: "rgb(116, 190, 179)", padding: "20px", borderRadius: "10px"}}>
                    <MiniModal />
                    <img src="http://www.equalmeasures2030.org/wp-content/uploads/2017/10/em2030.jpg" alt="logo" style={{margin: "0 auto", marginBottom: "20px", display: "block", maxWidth: "210px", height: "auto"}} />
                    <p>Upload your dataset here.</p>
                    <form action="https://jp-17-harjot1singh.c9users.io:8081/api/upload" method="post" encType="multipart/form-data">
                        <input type="file" name="data" />
                        <input type="submit" value="Update website" name="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Admin
