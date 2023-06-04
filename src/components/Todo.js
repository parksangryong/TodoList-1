import '../css/Todo.css'
import {Component} from 'react'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            edit : false,
            todo : this.props.todo
        }
    }

    modifyInput = (e) => {
        this.setState({
            todo : e.target.value
        })
    }

    modifyTodo = () => {
        console.log("modify todo");
        if(this.state.edit === true){
            const {id} = this.props
            const {todo} = this.state
            this.props.modifyTodo(id, todo)
        }
        
        this.setState({
            edit: !this.state.edit
        });
    }

    deleteTodo = () => {
        console.log("delete todo")
        const {id} = this.props

        this.props.deleteTodo(id);
    }

    render(){
        const {edit} = this.state;

        if(edit === false){
            return(
                <div className='todo'>
                    <div className='check'>
                        {this.props.id}
                    </div>
                    <div>
                        {this.props.todo}
                    </div>
                    <div>
                        <button onClick={this.modifyTodo}>수정</button>
                        <button onClick={this.deleteTodo}>삭제</button>
                    </div>
                </div>
            )
        }
        else if(edit === true){
            return(
                <div className='todo'>
                    <div className='check'>
                        {this.props.id}
                    </div>
                    <div className='td'>
                        <input type='text' defaultValue={this.state.todo} onChange={this.modifyInput} />
                    </div>
                    <div>
                        <button onClick={this.modifyTodo}>저장</button>
                        <button onClick={this.deleteTodo}>삭제</button>
                    </div>
                </div>
            )
        }

        
    }
}

export default Todo;