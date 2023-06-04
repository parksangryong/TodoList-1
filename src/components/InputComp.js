import '../css/InputComp.css'
import {Component} from 'react'

class InputComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo : ''
        }
    }

    inputTodo = (e) => {
        //console.log(e.target.value)
        this.setState({
            todo : e.target.value
        })
    }

    addTodo = () => {
        console.log('InputComp add');
        const todo = this.state.todo

        this.props.addTodo(todo);

        this.setState({
            todo: ''
        })
    }

    render(){
        return(
            <div className='input-comp'>
                <input type='text' placeholder=' memo' onChange={this.inputTodo} value={this.state.todo} />
                <button onClick={this.addTodo}>+</button>
                <hr/>
            </div>
        );
    }
}

export default InputComp;