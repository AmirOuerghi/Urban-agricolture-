import React from 'react'
import FormPropsTextFields from './P1'
import DataTable from './p2'
import SwipeableEdgeDrawer from './sideb'
import { styled } from '@mui/material/styles';

const AppContainer = styled('div')({
    display: 'flex',
  });



 const P4 = () => {
  return (
    <div>
        <SwipeableEdgeDrawer />
      <AppContainer>
        <FormPropsTextFields />
        <DataTable />
      </AppContainer>
    </div>
  )
}


export default P4
