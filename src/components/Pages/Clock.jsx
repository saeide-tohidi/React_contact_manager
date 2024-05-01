import { Component } from "react";
import { ORANGE } from "../../helpers/colors";

// NOTE updating lifecycle

class Clock extends Component {

    constructor(props) {
        super(props);
        console.log('Clock... constructor');
        this.state = {}
    }

    static getDerivedStateFormProps(props, state) {
        console.log('Clock... getDerivedStateFormProps');
        return state

    }
    shouldComponentUpdate(nextProp, nextState) {
        console.log('Clock... shouldComponentUpdate');
        if (this.props.date !== nextProp.date) {
            return true;
        }
        return false;
    }

    componentDidMount() {
        console.log('Clock... componentDidMount');
    }

    componentWillUnmount() {
        console.log('Clock... componentWillUnmount');
    }
    getSnapshotBeforeUpdate(prevProp, PrevState, snapshot) {
        console.log('Clock... getSnapshotBeforeUpdate');
        console.log(prevProp, PrevState);

    }
    componentDidUpdate(prevProp, PrevState, snapshot) {
        console.log('Clock... componentDidUpdate');
    }

    render() {
        console.log('Clock... render');

        const { date, color } = this.props;
        const style = { color: color ? "tomato" : "black" }




        return (
            <div className="text-center py-5 ">
                <p className="h3" style={style}>ساعت در حال حاضر برابر است با : {date.toLocaleTimeString()}</p>
            </div>
        )

    }
}


export default Clock;