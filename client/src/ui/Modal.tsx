import { Children, type ReactElement, type ReactNode } from 'react';
import { assoc } from 'ramda';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
  border: var(--border);
  border-radius: 0.5rem;
  background-color: white;
  min-width: 25rem;
  max-width: 60%;
  max-height: 70%;
  overflow: hidden;
`;

const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0;
  border-bottom: var(--border);
`;

const Body = styled.div`
  height: 100%;
  padding: 1rem;
  overflow: auto;
`;

const Footer = styled.footer`
  display: flex;
  padding: 1rem;
  margin: 0;
  border-top: var(--border);
`;

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

type ModalSections = {
  header: ReactElement | null;
  body: ReactElement[];
  footer: ReactElement | null;
};

const Modal = ({ visible, onClose, children }: ModalProps) => {
  const childrenArray = Children.toArray(children) as ReactElement[];
  const { header, body, footer } = childrenArray.reduce<ModalSections>(
    (prev, elem) => {
      const type = elem && elem.type ? elem.type : 'body';

      if (type === Modal.Header) return assoc('header', elem, prev);
      if (type === Modal.Footer) return assoc('footer', elem, prev);
      return assoc('body', [...prev.body, elem], prev);
    },
    { header: null, body: [], footer: null }
  );

  if (!visible) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        {header}
        <Body>{body}</Body>
        {footer}
      </StyledModal>
    </Overlay>,
    document.getElementById('modal-div') as HTMLElement
  );
};

Modal.Header = Header;
Modal.Footer = Footer;

export default Modal;
