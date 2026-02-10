import { useState } from "react";
import { AdminCard } from "../card";
import { AdminButton } from "../button";
import { CardSectionHeading } from "./card-section-heading";
import { ChannelPill } from "./channel-pill";

interface PublishingCardProps {
  readonly onFieldChange: () => void;
}

export function PublishingCard({ onFieldChange }: PublishingCardProps) {
  const [channels, setChannels] = useState(["Online Store", "Point of Sale"]);

  const removeChannel = (channel: string) => {
    setChannels((prev) => prev.filter((c) => c !== channel));
    onFieldChange();
  };

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading
          action={<AdminButton variant="ghost">Manage publishing</AdminButton>}
        >
          Publishing
        </CardSectionHeading>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {channels.map((channel) => (
            <ChannelPill
              key={channel}
              label={channel}
              onRemove={() => removeChannel(channel)}
            />
          ))}
        </div>
      </div>
    </AdminCard>
  );
}
