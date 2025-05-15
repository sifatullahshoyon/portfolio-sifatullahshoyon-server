"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidationSchema = void 0;
const zod_1 = require("zod");
exports.projectValidationSchema = zod_1.z.object({
    _id: zod_1.z.string({
        required_error: '_id is required',
        invalid_type_error: '_id must be a string',
    }),
    images: zod_1.z
        .array(zod_1.z.string({
        invalid_type_error: 'Each image must be a string',
    }))
        .nonempty({ message: 'At least one image is required' }),
    title: zod_1.z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string',
    }),
    description: zod_1.z.string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
    }),
    coreFeature: zod_1.z
        .array(zod_1.z.string({
        invalid_type_error: 'Each core feature must be a string',
    }))
        .nonempty({ message: 'At least one core feature is required' }),
    technology: zod_1.z
        .array(zod_1.z.string({
        invalid_type_error: 'Each technology must be a string',
    }))
        .nonempty({ message: 'At least one technology is required' }),
    projectChallengeFace: zod_1.z.string({
        required_error: 'Project challenge faced is required',
        invalid_type_error: 'Project challenge must be a string',
    }),
    liveLink: zod_1.z
        .string({
        required_error: 'Live link is required',
        invalid_type_error: 'Live link must be a string',
    })
        .url('Live link must be a valid URL'),
    githubClient: zod_1.z
        .string({
        required_error: 'GitHub client link is required',
        invalid_type_error: 'GitHub client link must be a string',
    })
        .url('GitHub client must be a valid URL'),
    githubServer: zod_1.z
        .string({
        required_error: 'GitHub server link is required',
        invalid_type_error: 'GitHub server link must be a string',
    })
        .url('GitHub server must be a valid URL'),
    projectFeaturePlane: zod_1.z.string({
        required_error: 'Project future plan is required',
        invalid_type_error: 'Project future plan must be a string',
    }),
});
