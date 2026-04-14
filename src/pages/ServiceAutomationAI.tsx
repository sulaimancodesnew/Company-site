import ServiceDetailPage from "@/components/sections/ServiceDetailsPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceAutomationAi = () => {
  return <ServiceDetailPage service={serviceDetails["automation-ai"]} />;
};

export default ServiceAutomationAi;