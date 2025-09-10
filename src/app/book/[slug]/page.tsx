import {db} from "../../../../prisma/db";
import BackButton from "@/back-button";
import {Metadata} from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return db.book.findMany({select: {slug: true}});
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const book = await db.book.findUnique({where: {slug: (await props.params).slug}});

  return {
    title: "Next Prod Book Club | " +  book!.title,
    description: book!.summary.substring(0, 100)
  };
}

export default async function BookPage(props: Props) {
  const params = await props.params;
  const book = await db.book.findUnique({where: {slug: params.slug}});

  if (book) {
    return (
      <main>
        <BackButton/>
        <section>
          <h2 className={"p-8 text-center text-6xl p-4"}>Book: {book.title}</h2>
          <p className={"px-2 text-lg"}>Author: {book.author}</p>
          <p className={"px-2 text-lg"}>Published Date: {book.publishedDate.toDateString()}</p>
          <p className={"px-2 py-4 bg-zinc-900"}>{book.summary}</p>
        </section>
      </main>
    );
  }

  return <main>
    <h1 className={"text-center text-6xl p-4"}>Hmm, nothing at all?</h1>
    <a href={"/"}>Go back to homepage</a>
  </main>;
}