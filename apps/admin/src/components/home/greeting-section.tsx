function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function GreetingSection() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[18px] font-[600] leading-[20px] text-text-primary">
        {getGreeting()}, let&apos;s get started.
      </h2>
      <span className="text-[13px] text-text-secondary">
        Questions? 080 062 7837
      </span>
    </div>
  );
}
