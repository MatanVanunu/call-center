import { Modal } from '@mui/material';

type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string | number;
};

const defaultStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  overflow: 'auto',
};

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  children,
  width = 400,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ ...defaultStyle, width }}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
