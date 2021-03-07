import * as React from 'react';
import { StyledCentered } from 'pages/styled';
import { Button } from 'components/Button';
import { StyledLoginModal, StyledOverlay } from './styled';

type ModalProps = {
  btnText: string;
};

const ButtonModal: React.FC<ModalProps> = ({ children, btnText }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{btnText}</Button>
      {isOpen && (
        <StyledOverlay onClick={() => setIsOpen(false)}>
          <StyledCentered>
            <StyledLoginModal onClick={(e) => e.stopPropagation()}>
              {children}
            </StyledLoginModal>
          </StyledCentered>
        </StyledOverlay>
      )}
    </>
  );
};

export default ButtonModal;
