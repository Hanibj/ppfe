import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { BsFillCalendarFill } from "react-icons/bs";
import { ImUser} from "react-icons/im";
import { BiBomb } from "react-icons/bi";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: 'Gestion de sondage',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Créer un sondage',
        path: '/Creationsond',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Affichier les sondages',
        path: '/Affichersond',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Supprimer un sondage',
        path: '/Suprrision',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Modifier un sondage',
        path: '/Modifierson',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Gestion de defi ',
    icon: <BiBomb />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Créer un defi',
        path: '/Creedefi',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Affichier les defi',
        path: '/Afichdefi',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Supprimer un defi',
        path: '/Supprimedefi',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Modifier un defi',
        path: '/Modifierdefi',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Liste devenementes',
    path: '/even',
    icon: <BsFillCalendarFill />
  },
  {
    title: 'Liste dempolyees',
    icon: <IoIcons.IoMdPeople  />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Afficher les employées',
        path: '/AfficheEmployee',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Ajouter un employée',
        path: '/Ajout',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Modifier un employée',
        path: '/Modifier',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Supprimer un employée',
        path: '/Supprime',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  { title: 'Liste des objectifs',
  path: '/objetif',
  icon: <IoIcons.IoIosPaper />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,},
  { title: 'Liste des feedback',
  path: '/Feedback',
  icon: <IoIcons.IoIosPaper />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,},

  { title: 'Liste des admins',
  path: '/pageadmins',
  icon: <IoIcons.IoMdPeople/>,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  icon: <ImUser/>,
},
{ title: 'Profil',
  path: '/profile',
  icon: <IoIcons.IoIosPaper />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  icon: <ImUser/>,
},
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
