import React, {useState, useEffect} from 'react';
import {Grid, Slide} from '@material-ui/core';

import Heading from './Header.jsx';
import ActionList from './ActionListItem/ActionListItem';


import ListsAPI from '../../../../api/listsAPI.js';

function ListDisplay(props){
        
    const [actionLists, setActionLists] = useState(); 

    useEffect(() => {
        async function fetchLists() {
            await ListsAPI.getLists(setActionLists);
        }; 
        fetchLists();
    }, []);

    return (
        <Slide in direction='right' timeout={{enter:1500, exit:1500}}>
            <Grid item xs={12}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Heading/>
                    </Grid>
                    {actionLists!==undefined&&actionLists.map(list => 
                        <Grid key={list._id} item xs={12}>
                            <ActionList
                            key={list._id}
                            name={list.name}
                            description={list.description}
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Slide>
    )
    
}

export default ListDisplay;