import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            <div style={{background: "rgb(102, 22, 108)", width: "100%", height: "100%", padding: "0px", margin: "0px", display: "flex", "justify-content": "center", "align-items": "center"}}>
                <div style={{background: "rgb(116, 190, 179)", padding: "20px", "border-radius": "10px"}}>
                    <img src="http://www.equalmeasures2030.org/wp-content/uploads/2017/10/em2030.jpg" style={{margin: "0 auto", "margin-bottom": "20px", display: "block", "max-width": "210px", height: "auto"}} />
                    <p>Upload your dataset here.</p>
                    <form action="https://jp-17-harjot1singh.c9users.io:8081/api/upload" method="post" enctype="multipart/form-data">
                        <input type="file" name="data" />
                        <input type="submit" value="Update website" name="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Admin
