import React from 'react'
import "./style.css"

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

const List = (props) => {
    return (
        <div className='items'>
            <li>{props.text}</li>
            <Tooltip title="Delete">

                <Button
                    className='dltbtn'
                    onClick={() => { props.dltItems(props.id) }}
                >
                    <DeleteIcon />
                </Button>

            </Tooltip>
        </div>
    )
}

export default List
