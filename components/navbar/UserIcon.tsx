import { LuUser } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';
import Image from 'next/image';

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return <Image className='w-6 h-6 rounded-full object-cover' width={24} height={24} src={profileImage} alt='Profile' />;
  }
  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />;
}
export default UserIcon;