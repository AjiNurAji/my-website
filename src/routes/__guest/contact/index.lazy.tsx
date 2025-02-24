import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/__guest/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/__guest/contact/"!</div>
}
