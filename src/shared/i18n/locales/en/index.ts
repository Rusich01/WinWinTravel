import confirm from './confirm.json'
import filter from './filter.json'
import main from './main.json'
import notFound from './not-found.json'

export const en = {
	...main,
	...filter,
	...confirm,
	'not-found': notFound
} as const
