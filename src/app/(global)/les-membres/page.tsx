import { Metadata } from 'next';
import Typography from '@/components/Typography/Typography';
import MembersList from '@/components/MembersList/MembersList';
import Image from 'next/image';
import {
  troupeMembers,
  orchestraMembers,
  staffMembers,
} from '@/assets/pages/laTroupe/troupeData';
import wattignies31 from '@/assets/pages/showcases/images/wattigniesCarousel/wattignies31.jpg';

export const metadata: Metadata = {
  title: 'Les membres de la troupe',
  openGraph: {
    title: 'Les membres de la troupe',
  },
};

export default function MembersPage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={wattignies31}
          alt="L'orchestre des Misérables"
          style={{ objectPosition: '50% 50%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:px-120px px-20px pt-60px">
        <Typography.Title level={1}>Les membres de la troupe</Typography.Title>
        <MembersList title="La troupe" members={troupeMembers} type="troupe" />
        <MembersList
          title="L'orchestre"
          members={orchestraMembers}
          type="orchestra"
        />
        <MembersList title="Le staff" members={staffMembers} type="staff" />
      </div>
    </>
  );
}
