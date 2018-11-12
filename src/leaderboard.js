import React from 'react'
import { Grid } from 'semantic-ui-react'
import MainBoard from './mainboard.js'
import FilteredBoard from './filteredboard.js'


export default class LeaderBoard extends React.Component{

  constructor(props){
    super(props);
    this.state =
      {
        groups: [{ name: 'I34', point : 33 },   { name: 'V14', point : 53 }]
      };
  }

  componentDidMount(){

   }

  render(){
  return(
    <Grid divided='vertically' style={{padding: '50px'}}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <MainBoard groups = {this.state.groups}/>
      </Grid.Column>
      <Grid.Column style={{textAlign: 'right'}}>
        <FilteredBoard groups = {this.state.groups}/>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  )}
}
