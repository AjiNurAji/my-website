import { createLazyFileRoute } from '@tanstack/react-router'
import MaintenanceError from '~/features/errors/maintenance-error'

export const Route = createLazyFileRoute('/__guest/about/')({
  component: () => <MaintenanceError page={true} />,
})