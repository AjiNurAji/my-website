import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/__guest/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/__guest/about/"!</div>
}
