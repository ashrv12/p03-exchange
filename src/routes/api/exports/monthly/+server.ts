import {
	exportMonthlyExampleBody,
	exportMonthlyRequestMethod,
	exportMonthlyURL
} from '$lib/monthly_exports_request_sample';
import { json } from '@sveltejs/kit';
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { ConvexClient } from 'convex/browser';
import { api } from '../../../../convex/_generated/api';

export async function POST() {
	try {
		const response = await fetch(exportMonthlyURL, {
			method: exportMonthlyRequestMethod,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ...exportMonthlyExampleBody })
		});

		if (!response.ok) {
			return json({ error: `Request failed: ${response.status}` }, { status: response.status });
		}

		const data: any = await response.json();

		console.log('Beginning Monthly Export fetch script beginning from 2023/01');

		const dateLabels = {
			...data.dimension.Сар.category.label
		};

		const values = data.value;

		type monthlyExportSchema = {
			reportDate: string;
			total: number;
			animalBasedExports: number;
			plantBasedExports: number;
			animalPlantBasedOilExports: number;
			foodProduceExports: number;
			miningExports: number;
			chemicalExports: number;
			plasticBasedExports: number;
			textileExports: number;
			woodenExports: number;
			paperBasedExports: number;
			woolenExports: number;
			clothingExports: number;
			constructionMaterialExports: number;
			jewelryExports: number;
			metallicExports: number;
			heavyIndustryExports: number;
			vehicularPartsExports: number;
			entertainmentExports: number;
			factoryProductsExports: number;
			otherExports: number;
		};

		let transformedData: monthlyExportSchema[] = [];

		let mainIndex = 0;
		for (const mainKey in dateLabels) {
			let singleMonthlyExport: monthlyExportSchema = {
				reportDate: '',
				total: 0,
				animalBasedExports: 0,
				plantBasedExports: 0,
				animalPlantBasedOilExports: 0,
				foodProduceExports: 0,
				miningExports: 0,
				chemicalExports: 0,
				plasticBasedExports: 0,
				textileExports: 0,
				woodenExports: 0,
				paperBasedExports: 0,
				woolenExports: 0,
				clothingExports: 0,
				constructionMaterialExports: 0,
				jewelryExports: 0,
				metallicExports: 0,
				heavyIndustryExports: 0,
				vehicularPartsExports: 0,
				entertainmentExports: 0,
				factoryProductsExports: 0,
				otherExports: 0
			};

			let index = mainIndex;
			for (const key in singleMonthlyExport) {
				if (Object.prototype.hasOwnProperty.call(singleMonthlyExport, key)) {
					const value = singleMonthlyExport[key as keyof monthlyExportSchema];

					if (typeof value === 'number') {
						// Generate a random number between 1 and 1000 for demonstration
						(singleMonthlyExport[key as keyof monthlyExportSchema] as number) = values[index];
						index += 21;
					} else if (key === 'reportDate') {
						// You might want to set a sample date here
						singleMonthlyExport.reportDate = dateLabels[mainKey]; // YYYY-MM-DD
					}
				}
			}

			transformedData.push(singleMonthlyExport);
			mainIndex += 1;
		}

		const client = new ConvexClient(PUBLIC_CONVEX_URL);
		for (const item of transformedData) {
			client.mutation(api.exportsMutations.createMonthlyExport, {
				...item
			});
		}

		return json(transformedData);
	} catch (err) {
		console.log(err);
	}
}
