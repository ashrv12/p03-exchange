import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const createMonthlyExport = mutation({
	args: {
		reportDate: v.string(),
		total: v.float64(),
		animalBasedExports: v.float64(),
		plantBasedExports: v.float64(),
		animalPlantBasedOilExports: v.float64(),
		foodProduceExports: v.float64(),
		miningExports: v.float64(),
		chemicalExports: v.float64(),
		plasticBasedExports: v.float64(),
		textileExports: v.float64(),
		woodenExports: v.float64(),
		paperBasedExports: v.float64(),
		woolenExports: v.float64(),
		clothingExports: v.float64(),
		constructionMaterialExports: v.float64(),
		jewelryExports: v.float64(),
		metallicExports: v.float64(),
		heavyIndustryExports: v.float64(),
		vehicularPartsExports: v.float64(),
		entertainmentExports: v.float64(),
		factoryProductsExports: v.float64(),
		otherExports: v.float64()
	},
	handler: async (ctx, args) => {
		await ctx.db.insert('monthlyExports', args);
	}
});

export const createYearlyExport = mutation({
	args: {
		reportDate: v.string(),
		total: v.float64(),
		animalBasedExports: v.float64(),
		plantBasedExports: v.float64(),
		animalPlantBasedOilExports: v.float64(),
		foodProduceExports: v.float64(),
		miningExports: v.float64(),
		chemicalExports: v.float64(),
		plasticBasedExports: v.float64(),
		textileExports: v.float64(),
		woodenExports: v.float64(),
		paperBasedExports: v.float64(),
		woolenExports: v.float64(),
		clothingExports: v.float64(),
		constructionMaterialExports: v.float64(),
		jewelryExports: v.float64(),
		metallicExports: v.float64(),
		heavyIndustryExports: v.float64(),
		vehicularPartsExports: v.float64(),
		entertainmentExports: v.float64(),
		factoryProductsExports: v.float64(),
		otherExports: v.float64()
	},
	handler: async (ctx, args) => {
		await ctx.db.insert('yearlyExports', args);
	}
});
