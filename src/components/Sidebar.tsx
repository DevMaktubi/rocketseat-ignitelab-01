import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8 ">
        {data?.lessons?.map((l) => (
          <Lesson
            key={l.id}
            title={l.title}
            slug={l.slug}
            availableAt={new Date(l.availableAt)}
            type={l.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
