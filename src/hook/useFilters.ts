import { useQuery } from '@tanstack/react-query'

import { getFilterItems } from '../api/api'

export const useFilters = () => {
	return useQuery({
		queryKey: ['filters'],
		queryFn: getFilterItems
	})
}
