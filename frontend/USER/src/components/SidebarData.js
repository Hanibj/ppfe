import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { ImUser} from "react-icons/im";
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: 'Les Sondage',
    path: '/sondage',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Les Defi ',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Participe un defi',
        path: '/Defi',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Les jeux',
        path: '/Jeux',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Feedback',
    icon: <IoIcons.IoMdPeople  />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Afficher les feedbacks',
        path: '/Affiche',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Ajouter un feedback',
        path: '/Ajout',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Modifier un feedback',
        path: '/Modifier',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Supprimer un feedback',
        path: '/Supprime',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <ImUser/>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/Logout',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
