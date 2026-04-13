import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ isOpen, onClose, children }: any) => {
	if (!isOpen) return

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}
		if (isOpen) document.addEventListener('keydown', handleKey)

		return () => document.removeEventListener('keydown', handleKey)
	}, [isOpen, onClose])

	return createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center overflow-auto backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className="absolute bg-gray-100 bg-opacity-40 transition-opacity rounded-2xl shadow-2xs"
				onClick={e => e.stopPropagation()}
			>
				{children}
				<button
					className="absolute text-black px-4 py-2 rounded mt-4 top-0 right-0 cursor-pointer active:scale-85 hover:scale-105  duration-75"
					onClick={onClose}
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 20 20"
					>
						<line
							x1="0"
							y1="0"
							x2="20"
							y2="20"
							stroke="black"
							stroke-width="2"
						/>
						<line
							x1="20"
							y1="0"
							x2="0"
							y2="20"
							stroke="black"
							stroke-width="2"
						/>
					</svg>
				</button>
			</div>
		</div>,
		document.body
	)
}

export default Modal
