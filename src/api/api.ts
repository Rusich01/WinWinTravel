const API = 'src/shared/temp/filterData.json'

export const getFilterItems = async () => {
	try {
		const response = await fetch(API)
		if (!response.ok) {
			throw new Error('Error fetching filters')
		}
		return response.json()
	} catch {
		throw new Error('Failed to fetch filters')
	}
}
