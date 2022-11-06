/* eslint-disable @typescript-eslint/indent */
interface INotificationProps {
    createdAt: string,
    deletedAt: string | null,
    exchanged_id: number | null,
    id: number,
    'product.gallery': string[],
    'product.title': string,
    products: number[],
    receiver_approval: boolean | null,
    'sender.email': string,
    'sender.first_name': string,
    'sender.last_name': string,
    sender_id: number,
    status: string,
    'sender.image': string | null,
    'product.type': string,
}

export default INotificationProps;
