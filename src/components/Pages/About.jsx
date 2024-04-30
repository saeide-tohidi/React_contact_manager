import { Component } from "react";
import { ORANGE } from "../../helpers/colors";



class About extends Component {

    constructor() {
        super();
        console.log('About... constructor');
        this.state = { date: new Date(), showClock: true, color: false }
    }

    static getDerivedStateFormProps(props, state) {
        console.log('About... getDerivedStateFormProps');
        return state

    }

    componentDidMount() {
        console.log('About... componentDidMount');
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log('About... componentWillUnmount');
        clearInterval(this.timer);

    }

    tick() {

        this.setState({ date: new Date() })
    }

    render() {

        return (
            <div className="text-center py-5 ">
                <p className="h3" style={{ color: ORANGE }}>درباره‌ی ما</p>
                <br />
                <p className="h3" style={{ color: ORANGE }}>ساعت در حال حاضر برابر است با : {this.state.date.toLocaleTimeString()}</p>
            </div>
        )

    }
}


export default About;

