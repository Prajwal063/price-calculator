const {z} = require("zod")

exports.getPriceType = z.object({
    zone: z
        .string({
            required_error: 'Zone is required',
        })
        .min(3, 'Minimum 3 characters required in Zone.')
        .max(32, 'Maximum 32 characters required in Zone.'),
        organization_id: z
        .number({
            required_error: 'Organization ID is required.',
        }),
        total_distance: z
        .number({
            required_error: 'Distance is required.',
        }),
        item_type: z
        .string({
            required_error: 'Type of item is required.',
        })
});

