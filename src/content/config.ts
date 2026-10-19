import { defineCollection, z } from 'astro:content';

const resumeSchema = z.object({
  basics: z.object({
    name: z.string(),
    label: z.string(),
    image: z.string(),
    email: z.string(),
    phone: z.string(),
    url: z.string(),
    summary: z.array(
      z.object({
        paragraph: z.string(),
      })
    ),
    location: z.object({
      city: z.string(),
      region: z.string(),
    }),
    profiles: z.array(
      z.object({
        network: z.string(),
        username: z.string(),
        url: z.string(),
      })
    ),
  }),
  work: z.array(
    z.object({
      name: z.string(),
      position: z.string(),
      startDate: z.string().date(),
      endDate: z.string().date().nullable(),
      summary: z.string(),
      highlights: z.array(z.string()),
      isRemote: z.boolean().optional().default(false),
    })
  ),
  education: z.array(
    z.object({
      institution: z.string(),
      area: z.string(),
      startDate: z.string().date(),
      endDate: z.string().date().nullable(),
    })
  ),
  certificates: z.array(
    z.object({
      name: z.string(),
      organization: z.string(),
      date: z.string().date(),
      url: z.string().url(),
    })
  ),
  skills: z.array(
    z.object({
      name: z.string(),
    })
  ),
  softskills: z.array(
    z.object({
      name: z.string(),
    })
  ),
  projects: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
      highlights: z.array(z.string()),
      github: z.string().url().optional(),
      isActive: z.boolean().optional().default(false),
    })
  ),
});

const resumeCollection = defineCollection({
  type: 'data',
  schema: resumeSchema,
});

export type Resume = z.infer<typeof resumeSchema>;

export const collections = { cv: resumeCollection };
