import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  TrialBanner,
  FloatingTrialBar,
  GreetingSection,
  SidekickInput,
  StoreNameHeader,
  ProductPreviewCard,
  DesignStoreCard,
  PaymentProviderCard,
  ShippingRatesCard,
  DomainCard,
  EducationalCard,
} from "../../components/home";

export const Route = createFileRoute("/_auth/")({
  component: HomePage,
});

function HomePage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <div className="flex flex-col gap-4">
        {showBanner && <TrialBanner onDismiss={() => setShowBanner(false)} />}
        <GreetingSection />
        <SidekickInput />
        <StoreNameHeader />
        <ProductPreviewCard />
        <DesignStoreCard />
        <PaymentProviderCard />
        <ShippingRatesCard />
        <DomainCard />
        <EducationalCard />
      </div>
      <FloatingTrialBar />
    </>
  );
}
