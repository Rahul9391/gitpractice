import React from 'react'

function Mount() {
  const names=[10,20,30,40,50,60];
  const filtered=names.filter(name=>name>40);
  return (
    <>
    {
      filtered.map(value=><li>{value}</li>)
    }
    </>
  )
}
export default Mount;
