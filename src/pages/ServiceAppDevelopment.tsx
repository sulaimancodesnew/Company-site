import ServiceDetailPage from "@/components/sections/ServiceDetailsPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceAppDevelopment = () => {
  return <ServiceDetailPage service={serviceDetails["app-development"]} />;
};

export default ServiceAppDevelopment;