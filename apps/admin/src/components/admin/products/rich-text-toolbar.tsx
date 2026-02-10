import {
  Bold,
  Italic,
  Underline,
  Paintbrush,
  AlignLeft,
  Link,
  Image,
  Video,
  MoreHorizontal,
  Code,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const toolbarButtons: { icon: typeof Bold; label: string; isDropdown?: boolean }[] = [
  { icon: ChevronDown, label: "Paragraph", isDropdown: true },
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: Paintbrush, label: "Color" },
  { icon: AlignLeft, label: "Alignment" },
  { icon: Link, label: "Link" },
  { icon: Image, label: "Image" },
  { icon: Video, label: "Video" },
  { icon: MoreHorizontal, label: "More" },
  { icon: Code, label: "HTML" },
];

export function RichTextToolbar() {
  return (
    <div className="flex items-center gap-0.5 px-2 py-1.5 border-b" style={{ borderColor: "#8a8a8a", borderWidth: "0.5px" }}>
      {toolbarButtons.map((btn) => (
        <button
          key={btn.label}
          type="button"
          className="flex items-center justify-center size-[24px] rounded-[4px] p-0.5 text-[#4a4a4a] hover:bg-bg-nav-hover transition-colors"
          aria-label={btn.label}
        >
          {btn.isDropdown ? (
            <span className="flex items-center text-[11px]" style={{ fontWeight: 450 }}>
              <ChevronDown className="size-3.5" />
            </span>
          ) : (
            <btn.icon className="size-3.5" />
          )}
        </button>
      ))}
      <div className="flex-1" />
      <button
        type="button"
        className="flex items-center gap-1 h-[24px] px-1.5 rounded-[4px] text-[11px] text-[#4a4a4a] hover:bg-bg-nav-hover transition-colors"
        style={{ fontWeight: 450 }}
      >
        <Sparkles className="size-3.5" />
        Generate text
      </button>
    </div>
  );
}
