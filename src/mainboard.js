import React from 'react'
import { Table } from 'semantic-ui-react'

const MainBoard = ({groups}) => (
  <Table celled inverted style={{width: '300px'}}>
    <Table.Header>
      <Table.Row>
      < Table.HeaderCell>Név</Table.HeaderCell>
        <Table.HeaderCell>Tankör</Table.HeaderCell>
        <Table.HeaderCell>Pont</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {groups.map((group, id)=>{
        return(
        <Table.Row>
        <Table.Cell>{group.name}</Table.Cell>
        <Table.Cell>{group.team_id}</Table.Cell>
        <Table.Cell>{group.score}</Table.Cell>
      </Table.Row>)})
    }
    </Table.Body>
    </Table>
);

export default MainBoard;
