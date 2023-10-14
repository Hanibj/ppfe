/*import { Card, Grid, Tab, TabList, Title ,
  BarChart, 
  DonutChart
  } from "@tremor/react";
  const nombreemp = [
    {
      name: "employee",
      sales: 1,
    },
  ];



  const tauxbon = [
    {
      name: "employee",
      sales: 75,
    },
  ];

  const valueFormatter = (number: number) =>
  ` ${Intl.NumberFormat("us").format(number).toString()}`;


  const objectif = [
    {
      name: "objectif",
      sales: 5,
    },
    {
      name: "objectif termine",
      sales: 2,
    },
    {
      name: "objectif non termine",
      sales: 3,
    },
  ];
  const valueobjectif = (number: number) =>
  ` ${Intl.NumberFormat("us").format(number).toString()}`;


  const chartdata = [
    {
      name: "avril",
      "taux de bonheur": 75,
    },
    {
      name: "mai",
      "taux de bonheur": 50,
    },
    {
      name: "juin",
      "taux de bonheur": 80,
    },
  ];
  const dataFormatter = (number:number) => {
    return   Intl.NumberFormat("us").format(number).toString();
  };







  
const Home = () => {
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard</Title>

      <TabList
        defaultValue="1"
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        
      </TabList>

      
        <>
          <Grid numColsLg={3} className="mt-6 gap-6">






          <Card className="max-w-lg">
    <Title>nombre des employee</Title>
    <DonutChart
      className="mt-6"
      data={nombreemp}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>



    <Card className="max-w-lg">
    <Title>taux de bonheur</Title>
    <DonutChart
      className="mt-6"
      data={tauxbon}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>






            <Card className="max-w-lg">
    <Title>objectifs</Title>
    <DonutChart
      className="mt-6"
      data={objectif}
      category="sales"
      index="name"
      valueFormatter={valueobjectif}
      colors={["violet", "indigo", "rose", ]}
      yAxisWidth={48}
    />
    
  </Card>

 



          </Grid>

          <div className="mt-6">
          <Card>
    <Title>Taux de bonheur par moins</Title>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["taux de bonheur"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>
          </div>
        </>
      
    </main>
  )}

export default Home*/ 
import React, { useEffect, useState } from 'react';
import { Card, Grid, Tab, TabList, Title, BarChart, DonutChart } from '@tremor/react';

const valueFormatter = (number) => ` ${Intl.NumberFormat('us').format(number).toString()}`;

const valueobjectif = (number) => ` ${Intl.NumberFormat('us').format(number).toString()}`;

const dataFormatter = (number) => {
  return Intl.NumberFormat('us').format(number).toString();
};

const Home = () => {
  const [perbon, setPerbon] = useState('');
  const [emplo, setEmplo] = useState('');
  const [object, setObject] = useState('');
  const [monthperjan,setMonthperjan]=useState('')
  const [fevmonthper,setMonthperfev]=useState('')
  const [monthpermars,setMonthpermar]=useState('')
  const [monthperavr,setMonthperavr]=useState('')
  const [monthpermai,setMonthpermai]=useState('')
  const [monthperjuin,setMonthperjuin]=useState('')
  const [monthperjuil,setMonthperjuil]=useState('')
  const [monthperaout,setMonthpeaout]=useState('')
  const [monthpersepte,setMonthpersepte]=useState('')
  const [monthperocto,setMonthpermarocto]=useState('')
  const [monthpernovem,setMonthpermarnovem]=useState('')
  const [monthperdecem,setMonthpermardecem]=useState('')
  const[month,setMonth]=useState("")

  const [error, setError] = useState(null);
  const [reff, setReff] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePerbon = await fetch('http://localhost:4002/api/employee/percbonh');
        const perbonData = await responsePerbon.json();
        setPerbon(perbonData);

        const responseEmplo = await fetch('http://localhost:4002/api/employee/totalEmp');
        const emploData = await responseEmplo.json();
        setEmplo(emploData);

        const responseObject = await fetch('http://localhost:4001/api/admin/percObjectif');
        const objectData = await responseObject.json();
        setObject(objectData);
        console.log(object)
        for (let month = 1; month < 13; month++) {
          if(month=== 1){
            const responsePerbonjan = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatajan = await responsePerbonjan.json();
            setMonthperjan(perbonDatajan);
          }else if(month===2){
            const responsePerbonfev = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatafev = await responsePerbonfev.json();
            setMonthperfev(perbonDatafev);
          } else if(month=== 3){
            const responsePerbonmar = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatamars = await responsePerbonmar.json();
            setMonthpermar(perbonDatamars);
          }else if(month===4){
            const responsePerbonavr = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDataavr = await responsePerbonavr.json();
            setMonthperavr(perbonDataavr);
          }else  if(month=== 5){
            const responsePerbonmai = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatamai = await responsePerbonmai.json();
            setMonthpermai(perbonDatamai);
          }else if(month===6){
            const responsePerbojuin = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatajun = await responsePerbojuin.json();
            setMonthperjuin(perbonDatajun);
          }else  if(month=== 7){
            const responsePerbonjuil = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatajuil = await responsePerbonjuil.json();
            setMonthperjuil(perbonDatajuil);
          }else if(month===8){
            const responsePerbonaout = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDataaout = await responsePerbonaout.json();
            setMonthpeaout(perbonDataaout);
          }else  if(month=== 9){
            const responsePerbonsept = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatasept = await responsePerbonsept.json();
            setMonthpersepte(perbonDatasept);
          }else if(month===10){
            const responsePerbonoct = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDataoct = await responsePerbonoct.json();
            setMonthpermarocto(perbonDataoct);
          } else  if(month=== 11){
            const responsePerbonnove = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
            const perbonDatanove = await responsePerbonnove.json();
            setMonthpermarnovem(perbonDatanove);
          }else{        
            const responsePerbondecm = await fetch(`http://localhost:4002/api/employee/percbonh/${month}`);
          const perbonDatadecm = await responsePerbondecm.json();
          setMonthpermardecem(perbonDatadecm);}
          
          
          
          
          
          }
       


      

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

  const tauxbonheur = [
    {
      name: 'taux de bonheur ',
      sales: perbon.percentage || 0, }

  ];
  

  const objectif = [
    {
      name: 'objectif',
      sales: object.totalCount || 0,
    },
    {
      name: 'objectif termine',
      sales: object.totalTerminer || 0,
    },
    {
      name: 'objectif non termine',
      sales: object.totalNonTerminer || 0,
    },
  ];

  const chartdata = [

    {
      name: 'JANVIER',
      'taux de bonheur par mois': monthperjan.percentageMouth,
    },
    {
      name: 'FÉVRIER',
      'taux de bonheur par mois': fevmonthper.percentageMouth,
    },
    {
      name: 'MARS',
      'taux de bonheur par mois': monthpermars.percentageMouth,
    },
    {
      name: 'AVRIL',
      'taux de bonheur par mois':monthperavr.percentageMouth,
    },
    {
      name: 'MAI',
      'taux de bonheur par mois': monthpermai.percentageMouth,
    },
    {
      name: 'JUIN',
      'taux de bonheur par mois': monthperjuin.percentageMouth,
    },
    {
      name: 'JUILLET',
      'taux de bonheur par mois': monthperjuil.percentageMouth,
    },
    {
      name: 'AOÛT',
      'taux de bonheur par mois': monthperaout.percentageMouth,
    },
    {
      name: 'SEPTEMBRE',
      'taux de bonheur par mois': monthpersepte.percentageMouth,
    },
    {
      name: 'OCTOBRE',
      'taux de bonheur par mois': monthperocto.percentageMouth,
    },
    {
      name: 'NOVEMBRE',
      'taux de bonheur par mois': monthpernovem.percentageMouth,
    },
    {
      name: 'DÉCEMBRE',
      'taux de bonheur par mois': monthperdecem.percentageMouth,
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
          <Title>taux de bonheur</Title>
          <DonutChart
            className="mt-6"
            data={tauxbonheur}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={['violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </Card>

        <Card className="max-w-lg">
          <Title>objectifs</Title>
          <DonutChart
            className="mt-6"
            data={objectif}
            category="sales"
            index="name"
            valueFormatter={valueobjectif}
            colors={['violet', 'indigo', 'rose']}
            yAxisWidth={48}
          />
        </Card>
      </Grid>

      <div className="mt-6">
        <Card>
          <Title>Taux de bonheur par moins</Title>
          <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={['taux de bonheur par mois']}
            colors={['blue']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </div>


    </main>
  );
};



export default Home;
