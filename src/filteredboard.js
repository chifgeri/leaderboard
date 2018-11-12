import React from 'react'
import { Responsive, Segment, Table, Grid } from 'semantic-ui-react'

const FilteredBoard = ({groups}) => {
  let colors = {}
  groups.map((group) => {
    if(colors[group.color])
      colors[group.color] += group.score;
    else {
      colors[group.color] = group.score;
    }
  })
  return(
    <Responsive as={Grid} minWidth={700}>
  <Table className="fixed" celled inverted style={{width: '300px'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Szín</Table.HeaderCell>
        <Table.HeaderCell>Pont</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
      Object.keys(colors).map((key, index) =>
                  (<Table.Row>
                    <Table.Cell>
                      {key}
                      </Table.Cell>
                      <Table.Cell>{colors[key]}</Table.Cell>
                  </Table.Row>)
                )
  }
    </Table.Body>
    </Table>
  </Responsive> );
  };



export default FilteredBoard;
