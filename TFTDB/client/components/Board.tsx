import * as React from 'react';

const BoardComponent = () => {
  const [hexes, setHexes] = React.useState([]);

  React.useEffect(() => {
    const singleRow = [];
    for (let i = 0; i < 9; i++) {
      singleRow.push(<div key={i} className='hexes'><p>test</p></div>)
    }

    const allRows: Array<any> = [];
    for (let i = 0; i < 4; i++) {
      allRows.push(singleRow);
    }

    setHexes(allRows)
  })

  return (
    <React.Fragment>
      {hexes}
      {hexes}
      {hexes}
    </React.Fragment>
  )
}

export default BoardComponent;

