import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  readonly title: string;
  readonly showBackArrow?: boolean;
}

export function PageHeader({ title, showBackArrow = true }: PageHeaderProps) {
  const router = useRouter();

  return (
    <div className="mb-4 flex items-center gap-2">
      {showBackArrow && (
        <button
          type="button"
          onClick={() => router.history.back()}
          className="hover:bg-bg-nav-hover flex size-7 items-center justify-center rounded-[8px] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="text-text-primary size-5" />
        </button>
      )}
      <h1
        className="text-text-primary text-[18px] leading-[24px]"
        style={{ fontWeight: 600 }}
      >
        {title}
      </h1>
    </div>
  );
}
