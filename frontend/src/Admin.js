import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            <form action="https://jp-17-harjot1singh.c9users.io:8081/api/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="data" />
                <input type="submit" value="Upload Image" name="submit" />
            </form>
        );
    }
}

export default Admin
