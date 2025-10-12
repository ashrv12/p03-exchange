<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	const sampleData = [
		{ label: 'Category A', value: 20 },
		{ label: 'Category D', value: 10 },
		{ label: 'Category B', value: 20 },
		{ label: 'Category C', value: 50 }
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
			.attr('transform', `translate(${width / 2},${height / 2})`);

		const color = d3.scaleOrdinal(d3.schemeCategory10);

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
			.attr('fill', (d) => color(d.data.label) as string)
			.attr('stroke', 'rgba(0,0,0,0)') // remove the borders in between
			.style('stroke-width', '2px')
			.style('opacity', 0.8);

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
				.style('font-weight', 'bold');
		}).on('mouseout', function (event, d) {
			// Revert slice highlight
			d3.select(this).select('path').style('opacity', 0.8).attr('stroke-width', '2px'); // Revert border thickness

			// Revert text to show only percentage
			d3.select(this)
				.select('text')
				.text((datum) => `${datum.data.value}%`)
				.style('font-weight', 'normal');
		});
	});
</script>

<div class="grid h-full w-[85%] grid-cols-3 grid-rows-3 gap-3 p-3">
	<div bind:this={pieChart} class="h-full w-full rounded-lg border"></div>
</div>
