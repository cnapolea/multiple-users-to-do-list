import React from 'react';
import {Grid} from '@material-ui/core'

import NewListHeader from './NewListHeader.jsx';
import NewListForm from '../../../Forms/NewListForm/NewListForm.jsx'


function ListFormDisplay(){
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <NewListHeader/>
            </Grid>
            <Grid item xs={12}>
                <NewListForm/>
            </Grid>
        </Grid>
    )
}

export default ListFormDisplay;