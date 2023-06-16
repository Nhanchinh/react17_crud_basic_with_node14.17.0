import React from "react";
import { toast } from 'react-toastify';






class AddTodo extends React.Component {


    HandleChangeAdd = (evnet) => {
        this.setState({
            title: evnet.target.value
        })
    }
    state = {
        title: '',

    }

    HandleAddSt = () => {
        if (!this.state.title) {
            toast.error('Missing params')
            return
        }
        console.log(this.state)
        this.props.addNewTodo(
            {
                id: Math.floor(Math.random() * 100),
                title: this.state.title
            }
        )
        this.setState({
            title: ''
        })


    }








    render() {


        let { title } = this.state

        return (
            <div>

                <div className='List-todo-add'>
                    <input value={title} type="text" onChange={(event) => { this.HandleChangeAdd(event) }} ></input>
                    <button onClick={() => this.HandleAddSt()} type='button' className='add'>Add</button>

                </div>

            </div>
        )
    }
}



export default AddTodo