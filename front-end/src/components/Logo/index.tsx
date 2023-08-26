import LogoSVG from '../../assets/logo.svg';
import { Image } from './styles';

function Logo() {
  return <Image src={LogoSVG} alt="Logo" className="self-start w-24 h-5" />;
}

export default Logo;
