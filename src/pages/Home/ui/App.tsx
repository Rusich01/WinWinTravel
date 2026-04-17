import { useTranslation } from 'react-i18next'

import { useFilters } from '@hook/useFilters'
import Modal from '@modal/modal'
import i18next from 'i18next'

import england from '@assets/img/england.png'
import ukraine from '@assets/img/ukraine.png'
import ConfirmModal from '@components/confirmModal'
import Filter from '@components/filters'
import Loader from '@components/loader'
import { UseFilterStore } from '@store/useFilterStore'

export const App = () => {
	const { t } = useTranslation()
	const { isLoading } = useFilters()

	const { isOpen, closeModal, openModal, confirm, closeConfirm, appliedItems } =
		UseFilterStore()

	return (
		<section className="w-full min-h-dvh flex flex-col items-center justify-center p-4">
			<div className="flex gap-1.5 absolute top-3 right-3">
				<button
					className="cursor-pointer hover:scale-105 active:scale-95 duration-75"
					onClick={() => i18next.changeLanguage('en')}
				>
					<img
						className="w-12 h-6 rounded-sm"
						src={england}
						alt="england-flag"
					/>
				</button>

				<button
					className="cursor-pointer hover:scale-105 active:scale-95 duration-75"
					onClick={() => i18next.changeLanguage('ua')}
				>
					<img
						className="w-12 h-6 rounded-sm"
						src={ukraine}
						alt="ukraine-flag"
					/>
				</button>
			</div>

			<h1 className="text-6xl text-gray-600 mb-12">{t('MainTitle')}</h1>

			<button
				onClick={openModal}
				className=" text-center bg-orange-500 hover:bg-orange-600 text-amber-50 px-6 py-2.5 rounded-xl cursor-pointer active:scale-95 duration-75"
			>
				{t('Open')}
			</button>

			{isLoading && <Loader />}

			<Modal
				isOpen={isOpen}
				onClose={closeModal}
			>
				{isLoading ? <Loader /> : <Filter />}
			</Modal>

			<Modal
				isOpen={confirm}
				onClose={closeConfirm}
			>
				<ConfirmModal />
			</Modal>

			<section>
				{appliedItems.length > 0 && (
					<ul className="border rounded-2xl p-4 absolute bottom-4">
						{appliedItems.map(item => (
							<li key={item}>{t(item)}</li>
						))}
					</ul>
				)}
			</section>
		</section>
	)
}
