import Image from 'next/image';
import { H2, P } from '@/app/components/global/text';

export default function VisiMisi() {
  return (
    <section
      id="tujuan"
      className="flex w-screen items-center justify-center p-4 sm:p-20"
    >
      <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-x-10 lg:space-y-0">
        <div className="w-full space-y-6 lg:w-1/2">
          <div>
            <H2 className="mb-6">
              <span className="text-highlight">Visi</span>
            </H2>
            <P>
              Menjadi platform terdepan dalam mengurangi pemborosan makanan dan
              memastikan setiap orang mendapatkan akses pangan yang layak,
              melalui donasi makanan yang efisien dan transparan.
            </P>
          </div>

          <div className="flex gap-4">
            <div className="h-40 w-24 rounded-full bg-secondary bg-opacity-75 lg:h-80 lg:w-44"></div>
            <div className="h-32 w-24 rounded-full bg-tertiary bg-opacity-75 lg:h-60 lg:w-40"></div>
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-center">
          <Image
            alt="Gambar 1"
            width={320}
            height={320}
            src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-60 w-full rounded-full object-cover grayscale lg:mt-12 lg:h-96 lg:w-72"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-end gap-4">
            <div className="h-32 w-24 rounded-full bg-tertiary bg-opacity-75 lg:h-60 lg:w-40"></div>
            <div className="h-40 w-24 rounded-full bg-secondary bg-opacity-75 lg:h-80 lg:w-44"></div>
          </div>

          <H2 className="mb-4">
            <span className="text-highlight-sec">Misi</span>
          </H2>
          <P>
            Menghubungkan komunitas dengan membangun jaringan antara penyumbang
            dan penerima makanan. Mengurangi pemborosan melalui donasi yang
            tepat sasaran. Meningkatkan kesadaran masyarakat tentang manajemen
            sisa makanan untuk mengubah pola pikir dan perilaku.
          </P>
        </div>
      </div>
    </section>
  );
}
