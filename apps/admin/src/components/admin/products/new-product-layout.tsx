interface NewProductLayoutProps {
  readonly left: React.ReactNode;
  readonly right: React.ReactNode;
}

export function NewProductLayout({ left, right }: NewProductLayoutProps) {
  return (
    <div
      className="flex flex-wrap max-w-[998px]"
      style={{ margin: "-16px 0 0 -16px" }}
    >
      <div
        className="flex flex-col gap-4 min-w-[51%]"
        style={{ flex: "2 2 480px", marginTop: 16, marginLeft: 16, maxWidth: "calc(100% - 16px)" }}
      >
        {left}
      </div>
      <div
        className="flex flex-col gap-4 min-w-0"
        style={{ flex: "1 1 240px", marginTop: 16, marginLeft: 16, maxWidth: "calc(100% - 16px)" }}
      >
        {right}
      </div>
    </div>
  );
}
