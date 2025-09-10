import {db} from "@/../prisma/db";

export default async function Home() {
  const books = await db.book.findMany();
  return (
    <main>
      <section className={"justify-center items-center pt-8"}>
        {books.map((b, i) => (
          <div key={b.id}
               className={"p-2 max-w-2/3 mx-auto text-center duration-200 hover:scale-101 ease-out hover:bg-zinc-200 hover:text-black " + (i % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800")}>
            <h2 className={"font-bold"}>{b.title}</h2>
            <p>{b.author}</p>
            <p>{b.summary}</p>
            <p>{b.publishedDate.toDateString()}</p>
            <a href={"/book/" + b.slug} className={"underline text-cyan-600"}>Go to book page</a>
          </div>
        ))}
      </section>
    </main>
  );
}
