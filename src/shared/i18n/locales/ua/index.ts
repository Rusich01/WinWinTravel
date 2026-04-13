import confirm from './confirm.json'
import filter from './filter.json'
import main from './main.json'
import notFound from './not-found-uk.json'

export const ua = {
	...main,
	...filter,
	...confirm,
	'not-found': notFound
}
