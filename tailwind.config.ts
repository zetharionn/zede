import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	plugins: [nextui()]
} satisfies Config
