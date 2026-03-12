import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "AI & Machine Learning Development - NexIO",
  description: "Integrating powerful artificial intelligence and machine learning into your business workflows with OpenAI and modern AI tools.",
};

export default function AIDevelopmentPage() {
  return (
    <ServiceDetail
      title="AI Application Development"
      subtitle="Intelligent solutions for the modern era."
      description="We integrate state-of-the-art AI and Machine Learning capabilities into your applications to automate workflows, personalize user experiences, and unlock hidden insights from your data."
      capabilities={[
        "Generative AI & LLM Integration",
        "Custom Machine Learning Models",
        "Natural Language Processing (NLP)",
        "Computer Vision Applications",
        "AI-Driven Analytics Dashboards",
        "Chatbots & Virtual Assistants",
      ]}
      techs={["OpenAI", "Python", "TensorFlow", "LangChain", "Pinecone", "PyTorch", "Hugging Face"]}
      image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
