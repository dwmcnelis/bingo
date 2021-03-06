export default {
	selected: 'Regular',
	ways: 12,
	way: 0,
	current: {
		B: [true, true, true, true, true],
		I: [false, false, false, false, false],
		N: [false, false, false, false, false],
		G: [false, false, false, false, false],
		O: [false, false, false, false, false]
	},
	presets: {
		// Twelve ways
		'Regular': [
			{
				B: [true, true, true, true, true],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, true, true, true],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, true, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [true, true, true, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [true, true, true, true, true]
			},
			{
				B: [true, false, false, false, false],
				I: [true, false, false, false, false],
				N: [true, false, false, false, false],
				G: [true, false, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [false, true, false, false, false],
				I: [false, true, false, false, false],
				N: [false, true, false, false, false],
				G: [false, true, false, false, false],
				O: [false, true, false, false, false]
			},
			{
				B: [false, false, true, false, false],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [false, false, true, false, false]
			},
			{
				B: [false, false, false, true, false],
				I: [false, false, false, true, false],
				N: [false, false, false, true, false],
				G: [false, false, false, true, false],
				O: [false, false, false, true, false]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [false, false, false, false, true]
			},
			{
				B: [true, false, false, false, false],
				I: [false, true, false, false, false],
				N: [false, false, true, false, false],
				G: [false, false, false, true, false],
				O: [false, false, false, false, true]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, false],
				N: [false, false, true, false, false],
				G: [false, true, false, false, false],
				O: [true, false, false, false, false]
			}
		],

		// 24 ways
		'23 & Free': [
			{
				B: [false, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [false, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [false, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [false, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [false, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, false, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, false, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, false, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, false]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, false],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, false],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, false],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, false],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, false, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, false, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, false, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, false, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, false, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, false, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, false, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, false, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, false, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, true, true, false, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			}, {
				B: [true, true, true, true, true],
				I: [true, true, false, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			}
		],
		'6 Pack': [
			{
				B: [true, true, true, false, false],
				I: [true, true, true, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, true, false, false],
				N: [true, true, true, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, true, false, false],
				G: [true, true, true, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [true, true, true, false, false],
				O: [true, true, true, false, false]
			},
			{
				B: [false, true, true, true, false],
				I: [false, true, true, true, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, true, true, true, false],
				N: [false, true, true, true, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, true, true, true, false],
				G: [false, true, true, true, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, true, true, true, false],
				O: [false, true, true, true, false]
			}, {
				B: [false, false, true, true, true],
				I: [false, false, true, true, true],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, true, true, true],
				N: [false, false, true, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, true, true, true],
				G: [false, false, true, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, true, true, true],
				O: [false, false, true, true, true]
			},
			{
				B: [true, true, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, false, false, false],
				G: [true, true, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, false, false, false],
				G: [true, true, false, false, false],
				O: [true, true, false, false, false]
			},
			{
				B: [false, true, true, false, false],
				I: [false, true, true, false, false],
				N: [false, true, true, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, true, true, false, false],
				N: [false, true, true, false, false],
				G: [false, true, true, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, true, true, false, false],
				G: [false, true, true, false, false],
				O: [false, true, true, false, false]
			},
			{
				B: [false, false, true, true, false],
				I: [false, false, true, true, false],
				N: [false, false, true, true, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, true, true, false],
				N: [false, false, true, true, false],
				G: [false, false, true, true, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, true, true, false],
				G: [false, false, true, true, false],
				O: [false, false, true, true, false]
			},
			{
				B: [false, false, false, true, true],
				I: [false, false, false, true, true],
				N: [false, false, false, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, true, true],
				N: [false, false, false, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, true, true]
			}
		],

		// 16 Ways

		'4 Pack': [
			{
				B: [true, true, false, false, false],
				I: [true, true, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, false, false, false],
				G: [true, true, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [true, true, false, false, false],
				O: [true, true, false, false, false]
			}, {
				B: [false, true, true, false, false],
				I: [false, true, true, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, true, true, false, false],
				N: [false, true, true, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, true, true, false, false],
				G: [false, true, true, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, true, true, false, false],
				O: [false, true, true, false, false]
			}, {
				B: [false, false, true, true, false],
				I: [false, false, true, true, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, true, true, false],
				N: [false, false, true, true, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, true, true, false],
				G: [false, false, true, true, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, true, true, false],
				O: [false, false, true, true, false]
			}, {
				B: [false, false, false, true, true],
				I: [false, false, false, true, true],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, true, true],
				N: [false, false, false, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, false, false]
			}, {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, true, true],
				O: [false, false, false, true, true]
			}
		],
		'8 Pack': [
			{
				B: [true, true, true, true, false],
				I: [true, true, true, true, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, true, true, false],
				N: [true, true, true, true, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, true, true, false],
				G: [true, true, true, true, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [true, true, true, true, false],
				O: [true, true, true, true, false]
			},
			{
				B: [false, true, true, true, true],
				I: [false, true, true, true, true],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, true, true, true, true],
				N: [false, true, true, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, true, true, true, true],
				G: [false, true, true, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, true, true, true, true],
				O: [false, true, true, true, true]
			},
			{
				B: [true, true, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, false, false, false],
				G: [true, true, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, false, false, false],
				G: [true, true, false, false, false],
				O: [true, true, false, false, false]
			},
			{
				B: [false, true, true, false, false],
				I: [false, true, true, false, false],
				N: [false, true, true, false, false],
				G: [false, true, true, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, true, true, false, false],
				N: [false, true, true, false, false],
				G: [false, true, true, false, false],
				O: [false, true, true, false, false]
			},
			{
				B: [false, false, true, true, false],
				I: [false, false, true, true, false],
				N: [false, false, true, true, false],
				G: [false, false, true, true, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, true, true, false],
				N: [false, false, true, true, false],
				G: [false, false, true, true, false],
				O: [false, false, true, true, false]
			},
			{
				B: [false, false, false, true, true],
				I: [false, false, false, true, true],
				N: [false, false, false, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, true, true],
				N: [false, false, false, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, true, true]
			}
		],
		// Thirteen ways
		'Regular or 4 Corners': [
			{
				B: [true, true, true, true, true],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, true, true, true],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, true, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [true, true, true, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [true, true, true, true, true]
			},
			{
				B: [true, false, false, false, false],
				I: [true, false, false, false, false],
				N: [true, false, false, false, false],
				G: [true, false, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [false, true, false, false, false],
				I: [false, true, false, false, false],
				N: [false, true, false, false, false],
				G: [false, true, false, false, false],
				O: [false, true, false, false, false]
			},
			{
				B: [false, false, true, false, false],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [false, false, true, false, false]
			},
			{
				B: [false, false, false, true, false],
				I: [false, false, false, true, false],
				N: [false, false, false, true, false],
				G: [false, false, false, true, false],
				O: [false, false, false, true, false]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [false, false, false, false, true]
			},
			{
				B: [true, false, false, false, false],
				I: [false, true, false, false, false],
				N: [false, false, true, false, false],
				G: [false, false, false, true, false],
				O: [false, false, false, false, true]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, false],
				N: [false, false, true, false, false],
				G: [false, true, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, false, false, false, true],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [true, false, false, false, true]
			}
		],
		// 9 ways
		'9 Pack': [
			{
				B: [true, true, true, false, false],
				I: [true, true, true, false, false],
				N: [true, true, true, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, true, false, false],
				N: [true, true, true, false, false],
				G: [true, true, true, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, true, false, false],
				G: [true, true, true, false, false],
				O: [true, true, true, false, false]
			}, {
				B: [false, true, true, true, false],
				I: [false, true, true, true, false],
				N: [false, true, true, true, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, true, true, true, false],
				N: [false, true, true, true, false],
				G: [false, true, true, true, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, true, true, true, false],
				G: [false, true, true, true, false],
				O: [false, true, true, true, false]
			}, {
				B: [false, false, true, true, true],
				I: [false, false, true, true, true],
				N: [false, false, true, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, true, true, true],
				N: [false, false, true, true, true],
				G: [false, false, true, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, true, true, true],
				G: [false, false, true, true, true],
				O: [false, false, true, true, true]
			},
		],

		// 9 ways
		'Railroad Tracks': [
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, false, false, false],
				G: [true, true, false, false, false],
				O: [true, true, false, false, false]
			},
			{
				B: [false, true, true, false, false],
				I: [false, true, true, false, false],
				N: [false, true, true, false, false],
				G: [false, true, true, false, false],
				O: [false, true, true, false, false]
			},
			{
				B: [false, false, true, true, false],
				I: [false, false, true, true, false],
				N: [false, false, true, true, false],
				G: [false, false, true, true, false],
				O: [false, false, true, true, false]
			},
			{
				B: [false, false, false, true, true],
				I: [false, false, false, true, true],
				N: [false, false, false, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, true, true]
			}
		],

		// Five ways
		Horizontal: [
			{
				B: [true, false, false, false, false],
				I: [true, false, false, false, false],
				N: [true, false, false, false, false],
				G: [true, false, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [false, true, false, false, false],
				I: [false, true, false, false, false],
				N: [false, true, false, false, false],
				G: [false, true, false, false, false],
				O: [false, true, false, false, false]
			},
			{
				B: [false, false, true, false, false],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [false, false, true, false, false]
			},
			{
				B: [false, false, false, true, false],
				I: [false, false, false, true, false],
				N: [false, false, false, true, false],
				G: [false, false, false, true, false],
				O: [false, false, false, true, false]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [false, false, false, false, true]
			}
		],
		Vertical: [
			{
				B: [true, true, true, true, true],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [true, true, true, true, true],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, true, true, true, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [true, true, true, true, true],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [true, true, true, true, true]
			}
		],
		// 4 ways
		'Crazy L': [
			{
				B: [false, false, false, false, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, false, false, false, false],
				I: [true, false, false, false, false],
				N: [true, false, false, false, false],
				G: [true, false, false, false, false],
				O: [true, true, true, true, true]
			},
			{
				B: [true, true, true, true, true],
				I: [true, false, false, false, false],
				N: [true, false, false, false, false],
				G: [true, false, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, true, true, true, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [false, false, false, false, true]
			}
		],
		'Crazy T': [
			{
				B: [true, true, true, true, true],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [false, false, true, false, false]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, false, true],
				N: [true, true, true, true, true],
				G: [false, false, false, false, true],
				O: [false, false, false, false, true]
			},
			{
				B: [false, false, true, false, false],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [true, true, true, true, true]
			},
			{
				B: [true, false, false, false, false],
				I: [true, false, false, false, false],
				N: [true, true, true, true, true],
				G: [true, false, false, false, false],
				O: [true, false, false, false, false]
			}
		],
		'Crazy Arrow': [
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, false],
				N: [true, false, true, false, false],
				G: [true, true, false, false, false],
				O: [true, true, true, false, false]
			},
			{
				B: [true, true, true, false, false],
				I: [true, true, false, false, false],
				N: [true, false, true, false, false],
				G: [false, false, false, true, false],
				O: [false, false, false, false, true]
			},
			{
				B: [false, false, true, true, true],
				I: [false, false, false, true, true],
				N: [false, false, true, false, true],
				G: [false, true, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, false, false, false, false],
				I: [false, true, false, false, false],
				N: [false, false, true, false, true],
				G: [false, false, false, true, true],
				O: [false, false, true, true, true]
			}
		],
		'Crazy Kite': [
			{
				B: [false, false, false, true, true],
				I: [false, false, false, true, true],
				N: [false, false, true, false, false],
				G: [false, true, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, false, false, false, false],
				I: [false, true, false, false, false],
				N: [false, false, true, false, false],
				G: [false, false, false, true, true],
				O: [false, false, false, true, true]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, false],
				N: [false, false, true, false, false],
				G: [true, true, false, false, false],
				O: [true, true, false, false, false]
			},
			{
				B: [true, true, false, false, false],
				I: [true, true, false, false, false],
				N: [false, false, true, false, false],
				G: [false, false, false, true, false],
				O: [false, false, false, false, true]
			}
		],
		'Crazy Giant Kite': [
			{
				B: [false, false, true, true, true],
				I: [false, false, true, true, true],
				N: [false, false, true, true, true],
				G: [false, true, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, false, false, false, false],
				I: [false, true, false, false, false],
				N: [false, false, true, true, true],
				G: [false, false, true, true, true],
				O: [false, false, true, true, true]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, false],
				N: [true, true, true, false, false],
				G: [true, true, true, false, false],
				O: [true, true, true, false, false]
			},
			{
				B: [true, true, true, false, false],
				I: [true, true, true, false, false],
				N: [true, true, true, false, false],
				G: [false, false, false, true, false],
				O: [false, false, false, false, true]
			}
		],
		'Crazy Triangle': [
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, false],
				N: [true, true, true, false, false],
				G: [true, true, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, true, true, true, true],
				I: [false, true, true, true, true],
				N: [false, false, true, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, false, true]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, true],
				N: [false, false, true, true, true],
				G: [false, true, true, true, true],
				O: [true, true, true, true, true]
			},
			{
				B: [true, false, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, true, false, false],
				G: [true, true, true, true, false],
				O: [true, true, true, true, true]
			}
		],
		'Crazy Pyramid': [
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, true],
				N: [false, false, true, true, true],
				G: [false, false, false, true, true],
				O: [false, false, false, false, true]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, true, false, false],
				G: [false, true, true, true, false],
				O: [true, true, true, true, true]
			},
			{
				B: [true, false, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, true, false, false],
				G: [true, true, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, true, true, true, true],
				I: [false, true, true, true, false],
				N: [false, false, true, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}
		],
		'Chevron': [
			{
				B: [false, false, false, false, true],
				I: [false, false, false, true, false],
				N: [false, false, true, false, false],
				G: [false, false, false, true, false],
				O: [false, false, false, false, true]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, true, false, false],
				G: [false, true, false, true, false],
				O: [true, false, false, false, true]
			},
			{
				B: [true, false, false, false, false],
				I: [false, true, false, false, false],
				N: [false, false, true, false, false],
				G: [false, true, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [true, false, false, false, true],
				I: [false, true, false, true, false],
				N: [false, false, true, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}
		],
		'Around the Corner': [
			{
				B: [true, true, true, false, false],
				I: [true, false, false, false, false],
				N: [true, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [true, false, false, false, false],
				G: [true, false, false, false, false],
				O: [true, true, true, false, false]
			},
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [false, false, true, true, true]
			},
			{
				B: [false, false, true, true, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}
		],
		// Two ways
		'Top or Bottom': [
			{
				B: [true, false, false, false, false],
				I: [true, false, false, false, false],
				N: [true, false, false, false, false],
				G: [true, false, false, false, false],
				O: [true, false, false, false, false]
			},
			{
				B: [false, false, false, false, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [false, false, false, false, true]
			}
		],
		'Top or Bottom Half': [
			{
				B: [true, true, true, false, false],
				I: [true, true, true, false, false],
				N: [true, true, true, false, false],
				G: [true, true, true, false, false],
				O: [true, true, true, false, false]
			},
			{
				B: [false, false, true, true, true],
				I: [false, false, true, true, true],
				N: [false, false, true, true, true],
				G: [false, false, true, true, true],
				O: [false, false, true, true, true]
			}
		],
		'Crazy H': [
			{
				B: [true, false, false, false, true],
				I: [true, false, false, false, true],
				N: [true, true, true, true, true],
				G: [true, false, false, false, true],
				O: [true, false, false, false, true]
			},
			{
				B: [true, true, true, true, true],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [true, true, true, true, true]
			}
		],
		'Postage Stamps': [
			{
				B: [true, true, false, false, false],
				I: [true, true, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, true, true],
				O: [false, false, false, true, true]
			},
			{
				B: [false, false, false, true, true],
				I: [false, false, false, true, true],
				N: [false, false, false, false, false],
				G: [true, true, false, false, false],
				O: [true, true, false, false, false]
			}
		],

		// One way

		// Letters
		'Letter A': [
			{
				B: [false, false, true, true, true],
				I: [false, true, true, false, false],
				N: [true, false, true, false, false],
				G: [false, true, true, false, false],
				O: [false, false, true, true, true]
			}
		],
		'Letter E': [
			{
				B: [true, true, true, true, true],
				I: [true, false, true, false, true],
				N: [true, false, true, false, true],
				G: [true, false, true, false, true],
				O: [true, false, true, false, true]
			}
		],
		'Letter H': [
			{
				B: [true, true, true, true, true],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [true, true, true, true, true]
			}
		],
		'Letter I': [
			{
				B: [true, false, false, false, true],
				I: [true, false, false, false, true],
				N: [true, true, true, true, true],
				G: [true, false, false, false, true],
				O: [true, false, false, false, true]
			}
		],
		'Letter L': [
			{
				B: [true, true, true, true, true],
				I: [false, false, false, false, true],
				N: [false, false, false, false, true],
				G: [false, false, false, false, true],
				O: [false, false, false, false, true]
			}
		],
		'Letter N': [
			{
				B: [true, true, true, true, true],
				I: [false, true, false, false, false],
				N: [false, false, true, false, false],
				G: [false, false, false, true, false],
				O: [true, true, true, true, true]
			}
		],
		'Letter S': [
			{
				B: [true, true, true, false, true],
				I: [true, false, true, false, true],
				N: [true, false, true, false, true],
				G: [true, false, true, false, true],
				O: [true, false, true, true, true]
			}
		],
		'Letter T': [
			{
				B: [true, false, false, false, false],
				I: [true, false, false, false, false],
				N: [true, true, true, true, true],
				G: [true, false, false, false, false],
				O: [true, false, false, false, false]
			}
		],
		'Letter V': [
			{
				B: [true, true, true, false, false],
				I: [false, false, false, true, false],
				N: [false, false, false, false, true],
				G: [false, false, false, true, false],
				O: [true, true, true, false, false]
			}
		],
		'Letter X': [
			{
				B: [true, false, false, false, true],
				I: [false, true, false, true, false],
				N: [false, false, true, false, false],
				G: [false, true, false, true, false],
				O: [true, false, false, false, true]
			}
		],
		'Letter Z': [
			{
				B: [true, false, false, false, true],
				I: [true, false, false, true, true],
				N: [true, false, true, false, true],
				G: [true, true, false, false, true],
				O: [true, false, false, false, true]
			}
		],

		// Numbers
		'Number 0': [
			{
				B: [false, true, true, true, false],
				I: [true, false, false, false, true],
				N: [true, false, false, false, true],
				G: [true, false, false, false, true],
				O: [false, true, true, true, false]
			}
		],
		'Number 7': [
			{
				B: [true, false, false, false, true],
				I: [true, false, false, true, false],
				N: [true, false, true, false, false],
				G: [true, true, false, false, false],
				O: [true, false, false, false, false]
			}
		],
		'Number 13': [
			{
				B: [true, true, true, true, true],
				I: [false, false, false, false, false],
				N: [true, false, true, false, true],
				G: [true, false, true, false, true],
				O: [true, true, true, true, true]
			}
		],

		'Bow Tie': [
			{
				B: [true, true, true, true, true],
				I: [false, true, true, true, false],
				N: [false, false, true, false, false],
				G: [false, true, true, true, false],
				O: [true, true, true, true, true]
			}
		],
		'Layer Cake': [
			{
				B: [true, false, true, false, true],
				I: [true, false, true, false, true],
				N: [true, false, true, false, true],
				G: [true, false, true, false, true],
				O: [true, false, true, false, true]
			}
		],
		'Champagne Glass': [
			{
				B: [true, false, false, false, true],
				I: [false, true, false, false, true],
				N: [false, false, true, true, true],
				G: [false, true, false, false, true],
				O: [true, false, false, false, true]
			}
		],
		'Christmas Tree': [
			{
				B: [false, false, true, false, false],
				I: [false, true, true, false, false],
				N: [true, true, true, true, true],
				G: [false, true, true, false, false],
				O: [false, false, true, false, false]
			}
		],
		'Indian Star': [
			{
				B: [true, false, true, false, true],
				I: [false, true, true, true, false],
				N: [true, true, true, true, true],
				G: [false, true, true, true, false],
				O: [true, false, true, false, true]
			}
		],
		'Maple Leaf': [
			{
				B: [false, true, false, false, false],
				I: [false, false, true, true, false],
				N: [true, true, true, true, true],
				G: [false, false, true, true, false],
				O: [false, true, false, false, false]
			}
		],
		'Sputnik': [
			{
				B: [true, false, false, false, true],
				I: [false, true, true, true, false],
				N: [false, true, true, true, false],
				G: [false, true, true, true, false],
				O: [true, false, false, false, true]
			}
		],
		'Satelite': [
			{
				B: [false, false, true, false, false],
				I: [false, true, true, true, false],
				N: [true, true, false, true, true],
				G: [false, true, true, true, false],
				O: [false, false, true, false, false]
			}
		],
		'Hammer Head T': [
			{
				B: [true, true, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, true, true, true],
				G: [true, true, false, false, false],
				O: [true, true, false, false, false]
			}
		],
		'Swatter & Fly': [
			{
				B: [true, true, true, false, false],
				I: [true, true, true, true, true],
				N: [true, true, true, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, true]
			}
		],
		'Cactus': [
			{
				B: [true, true, true, false, false],
				I: [false, false, true, false, false],
				N: [true, true, true, true, true],
				G: [false, false, true, false, false],
				O: [true, true, true, false, false]
			}
		],
		'Corners & Cross': [
			{
				B: [true, false, true, false, true],
				I: [false, false, true, false, false],
				N: [true, true, true, true, true],
				G: [false, false, true, false, false],
				O: [true, false, true, false, true]
			}
		],
		'Dog Bone': [
			{
				B: [false, true, true, true, false],
				I: [false, false, true, false, false],
				N: [false, false, true, false, false],
				G: [false, false, true, false, false],
				O: [false, true, true, true, false]
			}
		],
		'Hollow Diamond': [
			{
				B: [false, false, true, false, false],
				I: [false, true, false, true, false],
				N: [true, false, false, false, true],
				G: [false, true, false, true, false],
				O: [false, false, true, false, false]
			}
		],
		'Full Diamond': [
			{
				B: [false, false, true, false, false],
				I: [false, true, true, true, false],
				N: [true, true, true, true, true],
				G: [false, true, true, true, false],
				O: [false, false, true, false, false]
			}
		],
		'Tic Tac Toe': [
			{
				B: [false, true, false, true, false],
				I: [true, true, true, true, true],
				N: [false, true, false, true, false],
				G: [true, true, true, true, true],
				O: [false, true, false, true, false]
			}
		],
		'Ladder': [
			{
				B: [true, true, true, true, true],
				I: [false, true, false, true, false],
				N: [false, true, false, true, false],
				G: [false, true, false, true, false],
				O: [true, true, true, true, true]
			}
		],
		'Brackets': [
			{
				B: [true, true, false, true, true],
				I: [true, false, false, false, true],
				N: [false, false, false, false, false],
				G: [true, false, false, false, true],
				O: [true, true, false, true, true]
			}
		],
		'Small Frame': [
			{
				B: [false, false, false, false, false],
				I: [false, true, true, true, false],
				N: [false, true, false, true, false],
				G: [false, true, true, true, false],
				O: [false, false, false, false, false]
			}
		],
		'Large Frame': [
			{
				B: [true, true, true, true, true],
				I: [true, false, false, false, true],
				N: [true, false, false, false, true],
				G: [true, false, false, false, true],
				O: [true, true, true, true, true]
			}
		],
		'Cross': [
			{
				B: [false, false, true, false, false],
				I: [false, false, true, false, false],
				N: [true, true, true, true, true],
				G: [false, false, true, false, false],
				O: [false, false, true, false, false]
			}
		],
		'Cross & Frame': [
			{
				B: [true, true, true, true, true],
				I: [true, false, true, false, true],
				N: [true, true, true, true, true],
				G: [true, false, true, false, true],
				O: [true, true, true, true, true]
			}
		],
		'4 Corner Stamps': [
			{
				B: [true, true, false, true, true],
				I: [true, true, false, true, true],
				N: [false, false, false, false, false],
				G: [true, true, false, true, true],
				O: [true, true, false, true, true]
			}
		],
		'Highway': [
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [false, false, false, false, false],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			}
		],
		'Checkers': [
			{
				B: [true, false, true, false, true],
				I: [false, true, false, true, false],
				N: [true, false, true, false, true],
				G: [false, true, false, true, false],
				O: [true, false, true, false, true]
			}
		],
		'Blackout': [
			{
				B: [true, true, true, true, true],
				I: [true, true, true, true, true],
				N: [true, true, true, true, true],
				G: [true, true, true, true, true],
				O: [true, true, true, true, true]
			}
		],

		'Custom': [
			{
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			}
		]
		// 'Template': [
		// 	{
		// 		B: [false, false, false, false, false],
		// 		I: [false, false, false, false, false],
		// 		N: [false, false, false, false, false],
		// 		G: [false, false, false, false, false],
		// 		O: [false, false, false, false, false]
		// 	}
		// ],
	}
}