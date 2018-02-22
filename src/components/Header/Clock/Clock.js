import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            date: new Date().toLocaleString(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        });
    }
    render() {
        return (
            <div id="clock" class="time">
                <span class="time__hours">{this.state.hour}</span>
                <span class="time__min">{this.state.minute}</span>
                <span class="time__sec">{this.state.second}</span>
            </div>
        );
    }

}

export default Clock;