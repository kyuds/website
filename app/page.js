import Link from "@/components/link";

export default function Home() {
  return (
    <div className="group relative w-full md:min-w-[22%] md:w-auto mb-30 md:mb-0">
      <div className="w-full py-20 px-10 bg-foreground flex items-center justify-center
                      transition-transform duration-300 md:group-hover:-translate-y-5 md:mb-0 mb-5">
        <div className="pr-20">
          <p className="text-background text-xl tracking-[12px] font-bold font-[family-name:var(--font-geist-mono)]">Daniel</p>
          <p className="text-background text-xl tracking-[12px] font-bold font-[family-name:var(--font-geist-mono)]">Shin</p>
        </div>
      </div>
      <div className="w-full bg-background opacity-100 md:opacity-0 px-15 md:px-2 pb-5 visible md:invisible flex justify-between 
                      transition-all duration-300 md:group-hover:opacity-100 md:group-hover:visible">
        <Link url="/about" contents="1"/>
        <Link url="https://linkedin.com/in/kyuds" contents="2"/>
        <Link url="https://github.com/kyuds" contents="3"/>
        <Link url="https://instagram.com/kyu.ds" contents="4"/>
        <Link url="/resume.pdf" contents="5"/>
      </div>
    </div>
  );
}
