import { z } from 'zod';

export const projectValidationSchema = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be a string',
  }),

  images: z
    .array(
      z.string({
        invalid_type_error: 'Each image must be a string',
      }),
    )
    .nonempty({ message: 'At least one image is required' }),

  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),

  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),

  coreFeature: z
    .array(
      z.string({
        invalid_type_error: 'Each core feature must be a string',
      }),
    )
    .nonempty({ message: 'At least one core feature is required' }),

  technology: z
    .array(
      z.string({
        invalid_type_error: 'Each technology must be a string',
      }),
    )
    .nonempty({ message: 'At least one technology is required' }),

  projectChallengeFace: z.string({
    required_error: 'Project challenge faced is required',
    invalid_type_error: 'Project challenge must be a string',
  }),

  liveLink: z
    .string({
      required_error: 'Live link is required',
      invalid_type_error: 'Live link must be a string',
    })
    .url('Live link must be a valid URL'),

  githubClient: z
    .string({
      required_error: 'GitHub client link is required',
      invalid_type_error: 'GitHub client link must be a string',
    })
    .url('GitHub client must be a valid URL'),

  githubServer: z
    .string({
      required_error: 'GitHub server link is required',
      invalid_type_error: 'GitHub server link must be a string',
    })
    .url('GitHub server must be a valid URL'),

  projectFeaturePlane: z.string({
    required_error: 'Project future plan is required',
    invalid_type_error: 'Project future plan must be a string',
  }),
});
