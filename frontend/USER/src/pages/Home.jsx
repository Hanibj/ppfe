import React, { useEffect, useState } from 'react';
import { Card, Grid, Tab,TabList, Title, BarChart, DonutChart } from '@tremor/react';
import { Link } from 'react-router-dom';
import game from './game.png'
import happiness from './happiness.png'
const valueFormatter = (number) => `${Intl.NumberFormat('us').format(number).toString()}` ;

const valueobjectif = (number) =>  `${Intl.NumberFormat('us').format(number).toString()}`;

const dataFormatter = (number) => {
  return Intl.NumberFormat('us').format(number).toString();
};




const Home = () => {

  const [emplo, setEmplo] = useState('');
  const [error, setError] = useState(null);
  const [reff, setReff] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
  const responseEmplo = await fetch('http://localhost:4002/api/employee/totalEmp');
  const emploData = await responseEmplo.json();
  setEmplo(emploData);
  setReff(false);
} catch (error) {
  setError(error.message);
}
};

fetchData();
}, [reff]);
  const nombreemp = [
    {
      name: 'employee',
      sales: emplo.count || 0,
    },
  ];
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard</Title>

      <TabList defaultValue="1" className="mt-6">
        <Tab value="1" text="Overview" />
      </TabList>

      <Grid numColsLg={3} className="mt-6 gap-6">
        <Card className="max-w-lg">
          <Title>nombre des employee</Title>
          <DonutChart
            className="mt-6"
            data={nombreemp}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={['violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </Card>
       
        <Card className="max-w-lg">
          <Title>Jeux</Title>
       <Link to='/Jeux'> <Card className="mt-6 ,  items-center, content-center ,justify-center, justify-items-center "> <img  src={game}/></Card></Link>
        </Card>

        <Card className="max-w-lg">
      
        </Card>
      </Grid>

      <div className="mt-6">
        <Card >
          <img className=" w-full justify-center h-min " src={happiness}/>
        </Card>
      </div>


    </main>
  )
}

export default Home