'use client'

import { useRef } from 'react'
import AccountNavIcon from '../Icons/AccountNavIcon'
import BubbleNavIcon from '../Icons/BubbleNavIcon'
import HomeNavbarIcon from '../Icons/HomeNavbarIcon'
import LookNavIcon from '../Icons/LookNavIcon'
import MailboxNavIcon from '../Icons/MailboxNavIcon'
import { useBubbleStyle } from './hooks/useBubbleStyle'
import NavIcons from './NavIcons'

const iconsNav = [
  {
    name: 'home',
    svg: HomeNavbarIcon
  },
  {
    name: 'look',
    svg: LookNavIcon
  },
  {
    name: 'mailbox',
    svg: MailboxNavIcon
  },
  {
    name: 'account',
    svg: AccountNavIcon
  }
]

function Navbar() {
  const navEl = useRef<HTMLElement>(null)
  const { widthOfbubble, styles, selectedIcons, handleIcons } = useBubbleStyle({ navEl })

  return (
    <nav ref={navEl} className="h-full w-full">
      <ul className="h-2/3 flex justify-evenly items-center relative z-20">
        {iconsNav.map(({ name, svg }, index) => (
          <NavIcons index={index} key={'navIcons-' + name} name={name} active={name === selectedIcons} SvgComponent={svg} handleIcons={handleIcons} />
        ))}
      </ul>
      <div className="transition-all duration-500 absolute left-0 -bottom-[100px]" style={styles}>
        <BubbleNavIcon width={widthOfbubble} height={widthOfbubble} color={{ firstColor: '#DE8011' }} />
      </div>
    </nav>
  )
}
export default Navbar
