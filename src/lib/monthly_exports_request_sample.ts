export const exportMonthlyRequestMethod = 'POST';

export const exportMonthlyURL =
	'https://data.1212.mn:443/api/v1/mn/NSO/Economy, environment/Foreign Trade/DT_NSO_1400_005V1_month.px';

// this query starts from 2023.01
export const exportMonthlyExampleBody = {
	query: [
		{
			code: 'Сар',
			selection: {
				filter: 'item',
				values: [
					'31',
					'0',
					'1',
					'2',
					'3',
					'4',
					'5',
					'6',
					'7',
					'8',
					'9',
					'10',
					'11',
					'12',
					'13',
					'14',
					'15',
					'16',
					'17',
					'18',
					'19'
				]
			}
		},
		{
			code: 'Барааны бүлэг',
			selection: {
				filter: 'item',
				values: [
					'0',
					'1',
					'2',
					'3',
					'4',
					'5',
					'6',
					'7',
					'8',
					'9',
					'10',
					'11',
					'12',
					'13',
					'14',
					'15',
					'16',
					'17',
					'18',
					'19',
					'20'
				]
			}
		}
	],
	response: {
		format: 'json-stat2'
	}
};

// there are 20 types of exports
