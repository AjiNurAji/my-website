import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";

export const Route = createLazyFileRoute("/__guest/projects/")({
  component: () => (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl text-center">PROJECTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        <Card>
          <CardHeader>
            <div className="w-full h-full overflow-hidden rounded-md">
              <img
                src="https://www.zonareferensi.com/wp-content/uploads/2018/06/pengertian-algoritma.png"
                alt="image placeholder"
                className="w-full h-auto object-cover"
              />
            </div>
          </CardHeader>
          <CardContent>
            <h2 className="font-bold text-xl">Tugas Alpro Sem 2</h2>
            {/* <div className="flex flex-wrap gap-2 mt-2"> */}
              {/* <Badge variant="secondary" asChild>
                <Link to="/">React</Link>
              </Badge>
              <Badge variant="secondary" asChild>
                <Link to="/">Typescript</Link>
              </Badge>
              <Badge variant="secondary" asChild>
                <Link to="/">Tailwindcss</Link>
              </Badge>
            </div> */}
            <div className="mt-2">
              <p className="text-muted-foreground line-clamp-3">
                Disini adalah kumpulan tugas algoritma dan pemrograman dasar lanjut semester 2
              </p>
            </div>
          </CardContent>
          <CardFooter className="space-x-2">
            <Button
              size="sm"
              className="group w-fit transition-all duration-300 ease-linear"
              variant="default"
              asChild
            >
              <Link to="/task">
                Visit{" "}
                <ArrowUpRight className="group-hover:scale-y-100 perspective-normal scale-y-50 scale-3d transition-all duration-300 ease-linear sr-only group-hover:not-sr-only max-sm:not-sr-only max-sm:scale-y-100" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
});
