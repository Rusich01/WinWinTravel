import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { FilterChooseOption } from '@/shared/api/types/Filter'
import { FilterBase } from '@/shared/api/types/Filter/FilterBase.ts'

type UseType = FilterBase & { options: FilterChooseOption[] }

interface UseFilter {
	filterItems: UseType[]
	appliedItems: string[]
	checkedItems: Record<string, boolean>
	isOpen: boolean
	confirm: boolean

	// Function
	onCheck: (id: string) => void
	applyFilters: () => void
	closeConfirm: VoidFunction
	openConfirm: VoidFunction
	closeModal: VoidFunction
	openModal: VoidFunction
	clear: VoidFunction
}

export const UseFilterStore = create<UseFilter>()(
	persist(
		(set, get) => ({
			filterItems: [],
			appliedItems: [],
			checkedItems: {},
			loading: false,
			error: null,
			isOpen: false,
			confirm: false,

			onCheck: id =>
				set(state => ({
					checkedItems: {
						...state.checkedItems,
						[id]: !state.checkedItems[id]
					}
				})),

			applyFilters: () => {
				const checked = get().checkedItems

				const result = Object.keys(checked).filter(id => checked[id])
				set({ appliedItems: result })
			},

			//
			clear: () => set({ checkedItems: {} }),
			openModal: () => set({ isOpen: true }),
			closeModal: () => set({ isOpen: false }),

			openConfirm: () => set({ confirm: true }),
			closeConfirm: () => set({ confirm: false })
		}),

		{
			name: 'filter-storage',

			partialize: state => ({
				checkedItems: state.checkedItems,
				appliedItems: state.appliedItems
			})
		}
	)
)
