import { useTranslation } from 'react-i18next'

import { UseFilterStore } from '@store/useFilterStore'

const ConfirmModal = () => {
	const { closeConfirm, closeModal, applyFilters } = UseFilterStore()

	const { t } = useTranslation()

	const handleApplyFilters = () => {
		applyFilters()
		closeConfirm()
		closeModal()
	}

	return (
		<div className="w-[65vw] rounded-2xl py-3.5 px-5 shadow-2xl ">
			<h2 className="text-center text-3xl my-8 ">
				{t('Do you want apply new filter')}
			</h2>

			<div className="flex justify-between px-8 mb-8">
				<button
					className=" border hover:bg-orange-500 hover:text-amber-50 px-6 py-2.5 rounded-xl cursor-pointer active:scale-95 duration-75"
					onClick={closeConfirm}
				>
					{t('Use old filter')}
				</button>

				<button
					onClick={handleApplyFilters}
					className=" border hover:bg-orange-500 hover:text-amber-50 px-6 py-2.5 rounded-xl cursor-pointer active:scale-95 duration-75"
				>
					{t('Apply new filter')}
				</button>
			</div>
		</div>
	)
}

export default ConfirmModal
