import React from 'react'
import { Header, Table } from 'semantic-ui-react'

const MainBoard = ({groups}) => (
  <Table celled inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Tankör</Table.HeaderCell>
        <Table.HeaderCell>Pont</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {groups.map((group, id)=>{
        return(
        <Table.Row>
        <Table.Cell>
            {group.name}
        </Table.Cell>
        <Table.Cell>{group.point}</Table.Cell>
      </Table.Row>)})
    }
    </Table.Body>
    </Table>
);

export default MainBoard;
