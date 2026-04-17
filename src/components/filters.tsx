import { useTranslation } from 'react-i18next'

import { useFilters } from '@hook/useFilters'
import { FilterChooseOption } from '@shared/api/types/Filter'

import { UseFilterStore } from '@store/useFilterStore'

interface ItemsType {
	id: string
	name: string
	options: FilterChooseOption[]
}

const Filters = () => {
	const { checkedItems, onCheck, clear, openConfirm } = UseFilterStore()

	const { t } = useTranslation()

	const { data } = useFilters()

	const filterItems = data?.filterItems ?? []

	return (
		<div className=" py-3.5 px-5 h-[90vh] overflow-auto">
			<h2 className="text-center text-2xl">{t('Filter')}</h2>

			<ul>
				{filterItems.map(({ id, name, options }: ItemsType) => (
					<li key={id}>
						<div className="border border-gray-300 my-6"></div>
						<h3 className=" text-xl font-normal mb-3">{t(name)}</h3>

						<ul className="grid grid-cols-3  gap-8 ">
							{(options ?? []).map(({ id, name }) => (
								<li key={id}>
									<label className="flex gap-3 cursor-pointer">
										<input
											className="cursor-pointer active:scale-90 duration-75"
											type="checkbox"
											checked={checkedItems[id] ?? false}
											onChange={() => onCheck(id)}
										/>

										<span className="text-gray-800">{t(name)}</span>
									</label>
								</li>
							))}
						</ul>
					</li>
				))}

				<div className="border border-gray-300 my-6"></div>

				<div className="relative">
					<button
						className="absolute top-0 left-[50%] -translate-x-[50%] bg-orange-500 hover:bg-orange-600 text-amber-50 px-6 py-2.5 rounded-xl cursor-pointer active:scale-95 duration-75"
						onClick={openConfirm}
					>
						{t('Apply')}
					</button>
					<button
						className=" absolute right-0 top-0 text-green-500 hover:text-green-600  underline cursor-pointer active:scale-95 duration-75"
						onClick={clear}
					>
						{t('ClearAll')}
					</button>
				</div>
			</ul>
		</div>
	)
}

export default Filters
