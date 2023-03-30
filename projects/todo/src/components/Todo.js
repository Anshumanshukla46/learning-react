import React, { useEffect, useState } from 'react'
import "./style.css"
import List from "./List"


import Button from '@mui/material/Button';
// Tooltip when we hover on the button it should show "Add"
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

import logo from "./todo-logo.jpeg"





const Todo = () => {

    const [todo, setTodo] = useState(""); // for input form
    const [add, setAdd] = useState(getLocalStorageItems()); // all lists
    const [validation, setValidation] = useState(""); // if adding empty list


    // add data if page is refreshed 
    function getLocalStorageItems() {
        let list = localStorage.getItem("lists")

        if (list) {
            return JSON.parse(list)

            // to get back in array form as 
            // localStorage stores data only in string, string form i.e., (key, value)

        } else {
            return []
        }
    }

    function setData(event) { // input form
        setTodo(event.target.value)
    }

    function addItem() { // adding when clicked on plus

        if (todo == "") {
            setValidation("Empty Item Can't be added")
            return
        }

        setAdd(old => {
            return [...old, todo]
            // old and new
        })
        setTodo("")
    }


    // IMPORTANT
    function dltItems(id) {

        // delete those data whose id matched

        const newData = add.filter((ele, ind) => {
            return ind != id
        })

        setAdd(newData)
    }


    // Save todos to local storage whenever todos change
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(add))
    }, [add])



    return (
        <div className='main-container'>
            <div className="todo-box">

                <img src={logo} alt="todoimg" className='todoimg' />

                <h2 className="heading">Make Your TODO List</h2>

                <h3 className='validation'>{validation}</h3>

                <div className="input-container">

                    <input
                        type="text"
                        name='todo' placeholder='✍️'
                        onChange={setData}
                        value={todo}
                    />

                    <Tooltip title="Add">

                        <Button className='addbtn'
                            onClick={addItem}>
                            <AddIcon />
                        </Button>

                    </Tooltip>

                </div>

                {/* show the list */}
                <div className="store-container">
                    <ul>
                        {
                            add.map((ele, ind) => {
                                return (
                                    <>
                                        <List
                                            id={ind}
                                            text={ele}
                                            dltItems={dltItems}
                                        />
                                    </>
                                )
                            })
                        }


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo
