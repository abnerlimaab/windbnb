import { AiOutlineClose } from 'react-icons/ai';
import { Backdrop, Container, Header, HeaderCloseButton } from './styles';

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

function Filter({ isOpen, onClose }: FilterProps) {
  if (!isOpen) return null;
  return (
    <Backdrop onClick={onClose}>
      <Container>
        <Header>
          Edit your search
          <HeaderCloseButton onClick={onClose}>
            <AiOutlineClose size='18px' />
          </HeaderCloseButton>
        </Header>
      </Container>
    </Backdrop>
  );
}

export default Filter;
