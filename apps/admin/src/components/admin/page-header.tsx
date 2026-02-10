import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  readonly title: string;
  readonly showBackArrow?: boolean;
}

export function PageHeader({ title, showBackArrow = true }: PageHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 mb-4">
      {showBackArrow && (
        <button
          type="button"
          onClick={() => router.history.back()}
          className="flex items-center justify-center size-7 rounded-[8px] hover:bg-bg-nav-hover transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="size-5 text-text-primary" />
        </button>
      )}
      <h1
        className="text-[18px] text-text-primary leading-[24px]"
        style={{ fontWeight: 600 }}
      >
        {title}
      </h1>
    </div>
  );
}
