import logo from '@images/MoovieTime-Logo-Grey.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-000000/30">
      <div className="container mx-auto px-4 py-14 flex items-center justify-between text-929292">
        <p className="text-xs basis-80">
          &copy; 2022 MoovieTime. All rights reserved.
        </p>

        <Image alt="MoovieTime" src={logo} priority={false} />

        <p className="text-xs basis-80 text-end">Made with Next.JS</p>
      </div>
    </div>
  );
};

export default Footer;
