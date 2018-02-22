import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

class Content extends React.Component {

    render() {

        return (
            <div class="row">
                <Header/>
                <Sidebar/>
                <div class="col">tresc contentu</div>
            </div>
        )
    }
}

export default Content;