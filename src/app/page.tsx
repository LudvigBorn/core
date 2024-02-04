import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";
import { CoursesList } from "@/features/courses-list/pub/courses-list";

const client = new PrismaClient();

export default async function Home() {
  const courses = await client.course.findMany();

  console.log(courses);
  return (
    <main className="flex min-h-screen flex-col p-24">
      <CreateCourseForm revalidatePagePath="/" className="max-w-[300px] mb-4"/>
      <CoursesList revalidatePagePath="/"/>
    </main>
  );
}
