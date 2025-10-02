import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, serviceDetails } from "../../../data/services";
import ServiceDetailContent from "./ServiceDetailContent";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | SUN7 Piscine`,
    description: service.metaDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const { icon: _icon, ...clientSafeService } = service;
  void _icon;

  return <ServiceDetailContent service={clientSafeService} />;
}
