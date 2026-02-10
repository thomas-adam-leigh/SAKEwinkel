export function FloatingTrialBar() {
  return (
    <div
      className="fixed bottom-4 right-4 z-30 flex items-center h-[44px] rounded-[8px] px-3 text-[13px] text-text-on-dark"
      style={{
        background: "#1a1a1a",
        boxShadow: "0 0 3px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.15)",
        fontWeight: 450,
      }}
    >
      3 days left in your trial
    </div>
  );
}
