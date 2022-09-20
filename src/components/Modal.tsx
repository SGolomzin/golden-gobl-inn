import { useSelector } from 'react-redux';
import { RootStore } from '../store';

type ModalProps = {
	children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
	const { modalActive } = useSelector((store: RootStore) => store.market)

	if (!modalActive) return null;

	return (
		<aside className='modal-container'>
			<div className='modal'>
				{children}
			</div>
		</aside>
	)

}

export default Modal;