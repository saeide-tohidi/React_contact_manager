import { Component } from "react";
import { ORANGE } from "../../helpers/colors";
import Clock from "./Clock";



class About extends Component {

    constructor() {
        super();
        console.log('About... constructor');
        this.state = { date: new Date(), showClock: true, color: false };
        this.clockChange = this.clockChange.bind(this);
        this.colorChange = this.colorChange.bind(this)

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

    clockChange() {
        this.setState({ showClock: !this.state.showClock })
    }

    colorChange() {
        this.setState({ color: !this.state.color })
    }


    render() {
        const { date, showClock, color } = this.state

        return (
            <div className="text-center py-5 ">
                <p className="h3" style={{ color: ORANGE }}>درباره‌ی ما</p>
                <br />
                {
                    showClock ? <Clock date={date} color={color} /> : null
                }

                <hr />
                <button onClick={this.clockChange}>تغییر ساعت</button>
                <button onClick={this.colorChange}>تغییر رنگ</button>
            </div>
        )

    }
}


export default About;

