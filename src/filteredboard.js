import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

const FilteredBoard = ({groups}) => (
  <Table celled inverted style={{width: '300px', position: 'fixed'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Szín</Table.HeaderCell>
        <Table.HeaderCell>Pont</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    </Table>

)

export default FilteredBoard;
