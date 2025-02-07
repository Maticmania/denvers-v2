import Link from 'next/link';
import { BsHouseGearFill } from "react-icons/bs";
import { PiRabbitFill } from "react-icons/pi";
import { GiKangaroo } from "react-icons/gi";

import { Button } from '../ui/button';

function Logo() {
  return (
      <Link href='/' className='flex items-end'>
        <GiKangaroo className='w-10 h-10 text-rose-500' />
        <span className='font-semibold font-k2d'>Denvers</span>
      </Link>
  );
}
export default Logo