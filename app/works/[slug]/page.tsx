import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getWorkBySlug } from '@/lib/works';

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-4 py-10 md:px-[20px]">
        <Navbar />

        <section className="w-full max-w-[1048px] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-slate">{work.category}</p>
            <h1 className="font-libre text-4xl text-navy">{work.title}</h1>
            <p className="text-ink">{work.summary}</p>
          </div>

          {work.image?.src && (
            <div className="relative mt-6 w-full overflow-hidden rounded-[12px]">
              <Image
                src={work.image.src}
                alt={work.title}
                width={work.image.pixelWidth ?? 1500}
                height={work.image.pixelHeight ?? 1125}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        </section>

        <Footer />
      </div>
    </main>
  );
}