import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "Cloud Deployment & DevOps - NexIO",
  description: "Scalable cloud-native infrastructure and automated deployment pipelines using AWS, Azure, and Google Cloud.",
};

export default function CloudDeploymentPage() {
  return (
    <ServiceDetail
      title="Cloud Deployment & DevOps"
      subtitle="Robust, scalable cloud-native infrastructure."
      description="We empower organizations to scale with confidence by building automated, resilient, and secure cloud infrastructure. Our DevOps practices ensure fast, reliable delivery cycles."
      capabilities={[
        "Multi-Cloud Architecture (AWS, Azure, GCP)",
        "Infrastructure as Code (Terraform, Pulumi)",
        "Containerization & Orchestration (Docker, K8s)",
        "CI/CD Pipeline Automation",
        "Serverless Computing Solutions",
        "Cloud Security & Compliance",
      ]}
      techs={["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Azure", "GCP", "Jenkins"]}
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    />
  );
}
