import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const Container = styled.div`

width: 100%;
background-color: teal;
`
const Wapper = styled.div`
   padding: 10px 20px;
   display:flex;
   align-items:center;:
   justify-content:space-between;
   
`
const Left = styled.div`
   flex:1;
   display:flex;
   align-items:center;
`

const Center = styled.div`
   flex:1;
   text-align:center;
`

const Logo = styled.h1`
   font-weight:bold;
   
`


const Right = styled.div`
   flex:1;
   display:flex;
   align-items:center;
   justify-content:flex-end;
   
`
const MenuItem =styled.div`
   font-size:14px;
   cursor:pointer;
   margin-left:25px;
   
`

const Navbar = () => {
  return (
    <Container>
        <Wapper>
           <Left>
           </Left>
           <Center>
            <Logo>
                <Link to={'/'}>
                Dopee
                </Link>
            </Logo>
           </Center>
           <Right>
           
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Signin
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <EditActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <EditInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                  <Link to='http://localhost:3001/' target='_blank'>Signin employé</Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <EditActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <EditInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                 <Link to='http://localhost:3002/' target='_blank'>Signin admin</Link>  
                </button>
              )}
            </Menu.Item>
          </div>
          </Menu.Items>
      </Transition>
    </Menu>
 
            <MenuItem >
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Signup
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <EditActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <EditInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                  
                 <Link to='http://localhost:3002/Signup' target='_blank' >Signup admin</Link> 
                </button>
              )}
            </Menu.Item>
          </div>
          </Menu.Items>
      </Transition>
    </Menu>
            
            </MenuItem>
           
           </Right>
        </Wapper>
    </Container>
  )
}

export default Navbar



function EditInactiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M4 13V16H7L16 7L13 4L4 13Z"
         fill="#EDE9FE"
         stroke="#A78BFA"
         strokeWidth="2"
       />
     </svg>
   )
 }
 
 function EditActiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M4 13V16H7L16 7L13 4L4 13Z"
         fill="#8B5CF6"
         stroke="#C4B5FD"
         strokeWidth="2"
       />
     </svg>
   )
 }
 
 
