import {
  type Project as SanityProject,
  type CvArticle as SanityCvArtikle,
  type Profile as SanityProfile,
} from "../../sanity.types";
import type { Profile, CvArticle, Project } from "src/data";

const checkSanityIntegration = () => {
  return (
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  );
};

async function getSanityClient() {
  if (!checkSanityIntegration()) return {};

  const { client } = await import("src/sanity/lib/client");
  const { urlFor } = await import("src/sanity/lib/image");

  return { client, urlFor };
}

const { client, urlFor } = await getSanityClient();

export async function getProjects() {
  if (!client) {
    return [];
  }

  const projects = await client.fetch<SanityProject[]>("*[_type == 'project']");

  return projects.map((project) => ({
    ...project,
    image: project.image?.asset ? urlFor(project.image.asset).url() : undefined,
  })) as Project[];
}

export async function getCvArticles() {
  if (!client) {
    return [];
  }

  const articles = await client.fetch<SanityCvArtikle[]>(
    "*[_type == 'cvArticle']"
  );

  return articles as CvArticle[];
}

export async function getProfile() {
  if (!client) {
    return {} as Profile;
  }

  const profile = await client.fetch<SanityProfile>("*[_type == 'profile'][0]");

  return {
    ...profile,
    avatar: profile.avatar?.asset
      ? urlFor(profile.avatar.asset).url()
      : undefined,
  } as Profile;
}
