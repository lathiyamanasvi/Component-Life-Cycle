const { Component } = require("react");

class Demo extends Component{
    constructor(){
        super();
        this.state = {
            cnt :0
        }
    }
    increase = () => {
        this.setState((man)=> ({cnt: man.cnt+1}))
    }
    decrease = () => {
        this.setState((man)=> ({cnt: man.cnt-1}))
    }

    componentDidUpdate(nextprops,nextstate){
        console.log(nextstate);
        if(nextstate.cnt !== this.state.cnt){
            console.log(`Count is about to update from ${nextstate.cnt} to ${this.state.cnt}`);
        }
    }
    render(){
        return(
            <>
                <center>
                    <h1>{`COUNT :- ${this.state.cnt}`}</h1>
                    <button onClick={this.increase}>+</button>
                    <button onClick={this.decrease}>-</button>
                </center>
            </>
        )
    }
}
export default Demo;