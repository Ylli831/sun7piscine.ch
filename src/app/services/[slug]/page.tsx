import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, serviceDetails } from "../../../data/services";
import ServiceDetailContent from "./ServiceDetailContent";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | SUN7 Piscine`,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { icon: _icon, ...clientSafeService } = service;
  void _icon;

  return <ServiceDetailContent service={clientSafeService} />;
}
