export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col items-center gap-0 overflow-hidden p-[8px]">
      <a
        href="/"
        className="flex h-[80px] w-[400px] items-center justify-center px-[24px] py-[24px] font-libre text-[24px] leading-[1.1] text-accent"
      >
        Areesha Shamsi
      </a>
      <div className="flex items-center gap-[4px] text-[16px] leading-[1.3] text-slate">
        <span>©</span>
        <span>{year}</span>
      </div>
    </footer>
  );
}
