import ServiceDetailPage from "@/components/sections/ServiceDetailsPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceSeoContentWriting = () => {
  return <ServiceDetailPage service={serviceDetails["seo-content-writing"]} />;
};

export default ServiceSeoContentWriting;