import {db} from "./db";

async function main() {
  await db.book.deleteMany();
  await db.book.create({
    data: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      summary: "A novel about the American dream and the decadence of the Jazz Age.",
      publishedDate: new Date("1925-04-10"),
      slug: "the-great-gatsby"
    }
  });

  await db.book.create({
    data: {
      title: "1984",
      publishedDate: new Date("1949-06-08"),
      summary: "A dystopian novel about totalitarianism and surveillance.",
      author: "George Orwell",
      slug: "1984"
    }
  });
}

main()
  .then(() => console.log("Seeded Successfully"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => db.$disconnect());