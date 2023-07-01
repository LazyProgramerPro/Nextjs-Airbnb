'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar:React.FC<AvatarProps> = ({src}) => {

  const router = useRouter()

  return (
    <Image
      onClick={() => router.push('/')}
      className="rounded-full"
      alt="Avatar"
      width="30"
      height="30"
      src={src || "/images/placeholder.jpg"}
    ></Image>
  );
};

export default Avatar;
