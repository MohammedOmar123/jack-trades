/* eslint-disable @typescript-eslint/indent */
interface IProductPopup {
    open: boolean,
    id?: number,
    receiverId?: number,
    handleClose: () => void
    fetchData?: () => void
}

export default IProductPopup;
