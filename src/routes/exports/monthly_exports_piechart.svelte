<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	const sampleData = [
		{ label: 'Category A', value: 20 },
		{ label: 'Category D', value: 10 },
		{ label: 'Category B', value: 20 },
		{ label: 'Category C', value: 45 },
		{ label: 'Category E', value: 5 }
	];

	let pieChart: HTMLDivElement;

	onMount(() => {
		if (!pieChart) return;

		const width = pieChart.clientWidth;
		const height = pieChart.clientHeight;
		const radius = Math.min(width, height) / 2;

		const svg = d3
			.select(pieChart)
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', `translate(${width / 3},${height / 2})`);

		const defs = d3.select(pieChart).select('svg').append('defs');

		defs
			.append('pattern')
			.attr('id', 'pattern-stripes-1')
			.attr('width', 10) // Width of the pattern tile
			.attr('height', 10) // Height of the pattern tile
			.attr('patternUnits', 'userSpaceOnUse') // Coordinate system for pattern
			.attr('patternTransform', 'rotate(90)') // Rotate the stripes
			.append('rect') // Background rect for the pattern tile
			.attr('width', 10)
			.attr('height', 10);
		defs
			.select('#pattern-stripes-1')
			.append('line') // The stripe itself
			.attr('x1', 0)
			.attr('y1', 0)
			.attr('x2', 0)
			.attr('y2', 10)
			.attr('stroke', '#7b2cbf') // Darker stripe line
			.attr('stroke-width', 2.5);

		// Pattern 2: Diagonal Stripes (Medium Gray)
		defs
			.append('pattern')
			.attr('id', 'pattern-stripes-2')
			.attr('width', 10)
			.attr('height', 10)
			.attr('patternUnits', 'userSpaceOnUse')
			.attr('patternTransform', 'rotate(90)')
			.append('rect')
			.attr('width', 10)
			.attr('height', 10);
		defs
			.select('#pattern-stripes-2')
			.append('line')
			.attr('x1', 0)
			.attr('y1', 0)
			.attr('x2', 0)
			.attr('y2', 10)
			.attr('stroke', '#52b788')
			.attr('stroke-width', 2.5);

		// red tone
		defs
			.append('pattern')
			.attr('id', 'pattern-red-stripes-1')
			.attr('width', 10)
			.attr('height', 10)
			.attr('patternUnits', 'userSpaceOnUse')
			.append('rect')
			.attr('width', 10)
			.attr('height', 10);
		defs
			.select('#pattern-red-stripes-1')
			.append('line')
			.attr('x1', 0)
			.attr('y1', 5)
			.attr('x2', 10)
			.attr('y2', 5)
			.attr('stroke', '#e63946')
			.attr('stroke-width', 2.5);

		// yellow tone
		defs
			.append('pattern')
			.attr('id', 'pattern-yellow-stripes-1')
			.attr('width', 10)
			.attr('height', 10)
			.attr('patternUnits', 'userSpaceOnUse')
			.append('rect')
			.attr('width', 10)
			.attr('height', 10);
		defs
			.select('#pattern-yellow-stripes-1')
			.append('line')
			.attr('x1', 0)
			.attr('y1', 5)
			.attr('x2', 10)
			.attr('y2', 5)
			.attr('stroke', '#f8961e')
			.attr('stroke-width', 2.5);

		// blue tone
		defs
			.append('pattern')
			.attr('id', 'pattern-blue-stripes-1')
			.attr('width', 10)
			.attr('height', 10)
			.attr('patternUnits', 'userSpaceOnUse')
			.append('rect')
			.attr('width', 10)
			.attr('height', 10);
		defs
			.select('#pattern-blue-stripes-1')
			.append('line')
			.attr('x1', 0)
			.attr('y1', 5)
			.attr('x2', 10)
			.attr('y2', 5)
			.attr('stroke', '#00bbf9')
			.attr('stroke-width', 2.5);

		// Array of pattern IDs to cycle through
		const patternIds = [
			'url(#pattern-stripes-1)',
			'url(#pattern-stripes-2)',
			'url(#pattern-red-stripes-1)',
			'url(#pattern-yellow-stripes-1)',
			'url(#pattern-blue-stripes-1)'
		];

		const patternScale = d3.scaleOrdinal(patternIds);

		// this is very important
		const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value);

		const arcs = pie(sampleData);

		// Create the arc generator
		const arc = d3
			.arc<d3.PieArcDatum<{ label: string; value: number }>>()
			.innerRadius(0) // Inner radius for a solid pie chart (0 for no hole)
			.outerRadius(radius); // Outer radius of the pie chart

		const g = svg.selectAll('.arc').data(arcs).enter().append('g').attr('class', 'arc');

		g.append('path')
			.attr('d', arc)
			.attr('fill', (d) => patternScale(d.data.label) as string)
			.attr('stroke', '#ffe5ec') // A very dark gray, almost black, for subtle separation
			.style('stroke-width', '1px') // Thinner stroke for a sleek look
			.style('opacity', 1); // Slightly less opacity for a softer look

		// Add labels to each slice
		// Initially, show only the percentage
		const textLabels = g
			.append('text')
			.attr('transform', (d) => `translate(${arc.centroid(d)})`)
			.attr('dy', '0.35em')
			.text((d) => `${d.data.value}%`) // Display only percentage
			.style('text-anchor', 'middle')
			.style('font-size', '10px')
			.style('fill', 'white')
			.style('pointer-events', 'none'); // Prevent text from interfering with mouse events on the arc

		g.on('mouseover', function (event, d) {
			// Highlight the hovered slice
			d3.select(this).select('path').style('opacity', 1).attr('stroke-width', '3px'); // Make border thicker

			// Change text to show category
			d3.select(this)
				.select('text')
				.text((datum) => `${datum.data.label} (${datum.data.value}%)`)
				.style('font-weight', 'thin');
		}).on('mouseout', function (event, d) {
			// Revert slice highlight
			d3.select(this).select('path').style('opacity', 0.8).attr('stroke-width', '2px'); // Revert border thickness

			// Revert text to show only percentage
			d3.select(this)
				.select('text')
				.text((datum) => `${datum.data.value}%`)
				.style('font-weight', 'thin');
		});
	});
</script>

<div bind:this={pieChart} class="flex h-full w-full rounded-lg">
	<div class="flex h-full w-[60%] flex-col justify-center">
		<h1 class="font-bold">Monthly Exports</h1>
		<h1>as a <i>percentage</i></h1>
		<h1>of the total</h1>
		<h1 class="font-semibold">total: 10,000,000</h1>
	</div>
</div>
