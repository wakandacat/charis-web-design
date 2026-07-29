//the Homepage/landing page
//homepage will have a banner section, an intro section, a services section, a portfolio section, and a contact section
//all sections will have a call to action button to take users to corresponding pages

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-(--charis-white)">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  bg-(--charis-light)">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-(--color-text)">
            hey guys its me
          </h1>
        </div>
      </main>
    </div>
  );
}
