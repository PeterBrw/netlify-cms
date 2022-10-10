// import { GrowthBook, GrowthBookProvider, useFeature, IfFeatureEnabled } from '@growthbook/growthbook-react';
// import { nanoid } from 'nanoid';
//
// let visitor_id = localStorage.get('visitor_id');
// if (!visitor_id) {
//     visitor_id = nanoid();
//     localStorage.set('visitor_id', visitor_id);
// }
//
// const growthbook = new GrowthBook({
//     attributes: {
//         id: visitor_id
//     },
//     trackingCallback: (experiment, result) => {
//         console.log({
//             experimentId: experiment.key,
//             variationId: result.variationId
//         });
//     }
// });
