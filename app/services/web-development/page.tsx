import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "Web Application Development - NexIO",
  description: "Elite web development services using React, Next.js, and modern architectural patterns.",
};

export default function WebDevelopmentPage() {
  return (
    <ServiceDetail
      title="Web Application Development"
      subtitle="High-performance, scalable web experiences."
      description="We build blazing fast, SEO-optimized, and highly interactive web applications that drive engagement and business growth. From complex enterprise dashboards to sleek SaaS platforms."
      capabilities={[
        "Single Page Applications (SPA)",
        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
        "Progressive Web Apps (PWA)",
        "Enterprise E-commerce Solutions",
        "Custom API Development & Integration",
        "UI/UX Design & Prototyping",
      ]}
      techs={["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "Redis"]}
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
    />
  );
}
