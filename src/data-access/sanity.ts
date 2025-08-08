import { client } from "src/sanity/lib/client";
import {
  type Project as SanityProject,
  type CvArticle as SanityCvArtikle,
  type Profile as SanityProfile,
} from "../../sanity.types";
import { urlFor } from "src/sanity/lib/image";
import { type Project } from "src/data/projects";
import { type CvArticle } from "src/data/cv";
import { Profile } from "src/data/profile";

export async function getProjects() {
  const projects = await client.fetch<SanityProject[]>("*[_type == 'project']");

  return projects.map((project) => ({
    ...project,
    image: project.image?.asset ? urlFor(project.image.asset).url() : undefined,
  })) as Project[];
}

export async function getCvArticles() {
  const articles = await client.fetch<SanityCvArtikle[]>(
    "*[_type == 'cvArticle']"
  );

  return articles as CvArticle[];
}

export async function getProfile() {
  const profile = await client.fetch<SanityProfile>("*[_type == 'profile']");

  return {
    ...profile,
    avatar: profile.avatar?.asset
      ? urlFor(profile.avatar.asset).url()
      : undefined,
  } as Profile;
}
