import React from 'react'
import { Grid } from 'semantic-ui-react'
import MainBoard from './mainboard.js'
import FilteredBoard from './filteredboard.js'

const axios = require('axios');

export default class LeaderBoard extends React.Component{

  constructor(props){
    super(props);
    this.state =
      {
        groups: []
      };
  }

  componentDidMount(){
    axios.get('/api/v1/teams')
    .then((response) =>(
      this.setState({
            groups: response.data
            })
          )
         );
   }

  render(){
  return(
    <Grid divided='vertically' style={{padding: '50px'}}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <MainBoard groups = {this.state.groups}/>
      </Grid.Column>
      <Grid.Column floated='right'>
        <FilteredBoard groups = {this.state.groups}/>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  )}
}
