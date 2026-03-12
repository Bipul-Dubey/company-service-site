import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "Mobile Application Development - NexIO",
  description: "Native and cross-platform mobile apps built with React Native and modern mobile technologies.",
};

export default function MobileDevelopmentPage() {
  return (
    <ServiceDetail
      title="Mobile Application Development"
      subtitle="Engaging mobile experiences for iOS and Android."
      description="We create intuitive, high-performance mobile applications that users love. Whether native or cross-platform, we ensure your mobile presence is fast, reliable, and beautifully designed."
      capabilities={[
        "iOS & Android Native Development",
        "Cross-Platform Development (React Native)",
        "Mobile UI/UX Design",
        "Real-time Data Synchronization",
        "Offline Capabilities",
        "App Store & Play Store Deployment",
      ]}
      techs={["React Native", "Swift", "Kotlin", "Firebase", "Node.js", "SQLite", "Expo", "Redux"]}
      image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
