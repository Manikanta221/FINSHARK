<<<<<<< HEAD
import React, { JSX } from 'react'
=======
import React from 'react'
>>>>>>> 98d14a0a (Initial commit)
import Card from '../Card/Card'

interface Props {}

<<<<<<< HEAD
const CardList : React.FC<Props> = (props: Props): JSX.Element=> {
=======
const CardList = (props: Props) => {
>>>>>>> 98d14a0a (Initial commit)
  return (
    <div>
        <Card companyName='Apple' ticker='APPL' price={100}/>
        <Card companyName='Microsoft' ticker='MSFT' price={200}/>
        <Card companyName='Tesla' ticker='TSLA' price={300}/>
    </div>
  )
}

export default CardList