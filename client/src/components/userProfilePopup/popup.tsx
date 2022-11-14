import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import './popup.css';

interface IPopup {
  isOpen :boolean,
}
const Popup = ({ isOpen }:IPopup) => (
  <Dialog open={isOpen}>
    <DialogTitle>title here</DialogTitle>
    <DialogContent>content here</DialogContent>
  </Dialog>
);

export default Popup;
