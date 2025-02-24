import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/__guest/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/__guest/projects/"!</div>
}
