import Link from "next/link";
import prisma from "./db";
import TodoItem from "@/components/TodoItem";
function getTodos(){
  return prisma.todo.findMany();
}


/* need to add this async keyword when you're making db calls */
export default async function Home() {
  /* In react, we would have to fetch or do a useQuery from somewhere */
  // but, with server components inside NextJS, we dont need to do that
  // as long as we have the app router (which we had since we initialized the project), we have the abilioty to call server code inside components and just send data down to the client
  // directly call db here

  // uncomment below line to fake add a todo to our db
  // await prisma.todo.create({data:{title: "Test", complete: false}})

  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        {/* This is next's built in Link component that works just like an <a> tag */}
        {/* class names to make the link look like a button */}
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href='/new'>New</Link>
      </header>
      <ul className="pl-4">
        {
          todos.map((todo) => {
            return (
              <TodoItem key={todo.id} {...todo} />
            )
          })
        }
      </ul>
    </>
  )
}

/* NextJS: routing works based on folders. to add a new route, create a new folder and create a new file called Page.tsx inside of it
everything you put in that Page.tsx will be rendered when you navigate to that folder name.
Each page.tsx is like an index file for that route */