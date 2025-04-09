import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardTitle } from "~/components/ui/card";

export const Route = createLazyFileRoute("/__guest/task/")({
  component: () => (
    <Card className="px-6 py-4">
      <CardTitle className="border-b border-border pb-3">
        <h1>TUGAS ALPRO LANJUT SEMESTER 2</h1>
      </CardTitle>
      <CardContent>
        <div className="grid grid-col-1 gap-2">
          <Button asChild variant="default">
            <a href="https://github.com/AjiNurAji/alpro-lanjut/tree/pertemuan_2" target="_blank">Pertemuan 2</a>
          </Button>
          <Button asChild variant="default">
            <a href="https://github.com/AjiNurAji/pandas-alpro" target="_blank">Pertemuan 3</a>
          </Button>
          <Button asChild variant="default">
            <a href="https://github.com/AjiNurAji/alpro-lanjut/tree/pertemuan_4" target="_blank">Pertemuan 4</a>
          </Button>
          <Button asChild variant="default">
            <a href="https://github.com/AjiNurAji/alpro-lanjut/tree/pertemuan_6" target="_blank">Pertemuan 6</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
});
