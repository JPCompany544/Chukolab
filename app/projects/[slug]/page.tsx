import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectDetails, projectSlugs } from "../projectData";
import { ProjectDetailView } from "../ProjectDetailView";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) return { title: "Project Not Found — Chukolab" };

  return {
    title: `${project.title} — Chukolab`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
