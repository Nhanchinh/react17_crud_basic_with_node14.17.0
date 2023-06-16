import React from 'react'
import './ListTodo.scss'
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';





class ListTodo extends React.Component {


    state = {
        todoList: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'watch video' },
            { id: 'todo3', title: 'sleep  at home' },
        ],
        editTodo: {

        }
    };


    addNewTodo = (item) => {
        console.log(item)
        let subs = this.state.todoList;
        subs.push(item)
        this.setState({
            todoList: subs
        })
        toast.success('Add new to do success!')

    }
    handleDeleteSt = (i) => {
        console.log(i);
        let sub = this.state.todoList
        console.log(sub)
        sub = sub.filter(item => item.id !== i.id)
        console.log(sub)
        this.setState({
            todoList: sub
        })
        toast.success('Delete success!')
    }
    handleEditTodo = (value) => {
        let { editTodo } = this.state
        let { todoList } = this.state
        let isEmty = Object.keys(editTodo).length === 0;
        console.log('list to do:', todoList)

        // save
        if (isEmty === false && editTodo.id === value.id) {
            let ListTodoCopy = [...todoList]
            console.log('list copy', todoList)
            // Find index of specific object using findIndex method.    
            let objIndex = ListTodoCopy.findIndex((item => item.id === value.id));
            console.log('object index:>>', objIndex)


            // Update object's name property.
            ListTodoCopy[objIndex].title = editTodo.title
            this.setState({
                todoList: ListTodoCopy,
                editTodo: {}
            })
            toast.success('Save success!')
            return



        }
        // edit
        this.setState({
            editTodo: value
        })


    }
    handleEditChange = (e) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy

        })

    }




    render() {
        let { editTodo } = this.state
        console.log(editTodo)
        let isEmty = Object.keys(editTodo).length === 0;
        console.log(isEmty)
        let { todoList } = this.state
        return (
            <div>
                <div>
                    To do app made by Zin
                </div>
                <div className='List-todo-container'>

                    <AddTodo
                        addNewTodo={this.addNewTodo}

                    />
                    <div className='List-todo-content'>
                        {todoList && todoList.length > 0 &&
                            todoList.map((item, index) => {
                                return (
                                    <div className='child-content' key={item.id}>
                                        {isEmty ?
                                            <span>
                                                <span>{index + 1}-{item.title}</span>

                                            </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <>
                                                        {index + 1}-<input onChange={(e) => { this.handleEditChange(e) }} value={editTodo.title} />
                                                    </>
                                                    :
                                                    <>
                                                        <span>{index + 1}-{item.title}</span>
                                                    </>

                                                }
                                            </>

                                        }

                                        <button onClick={() => { this.handleDeleteSt(item) }}
                                            className='btn-delete'>delete</button>
                                        <button
                                            onClick={() => { this.handleEditTodo(item) }
                                            }
                                            className='btn-edit'>
                                            {isEmty === false && editTodo.id === item.id ?
                                                'save' : 'edit'
                                            }
                                        </button>

                                    </div>
                                )
                            })
                        }


                    </div>
                </div>

            </div>)
    }


}


export default ListTodo