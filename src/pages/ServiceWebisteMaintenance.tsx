import ServiceDetailPage from "@/components/sections/ServiceDetailsPage";
import { serviceDetails } from "@/data/serviceDetails";

const ServiceWebsiteMaintenance = () => {
  return <ServiceDetailPage service={serviceDetails["website-maintenance"]} />;
};

export default ServiceWebsiteMaintenance;