import SmallBox from '@/components/widgets/SmallBox'
import AppCallout from '@/components/ui/AppCallout'

export default function SmallBoxPage() {
  return (
    <div>
      {/* Section: Default Color Variants */}
      <h4 className="text-lg font-semibold mb-3">Color Variants</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SmallBox
          bgColor="bg-primary"
          value="150"
          label="New Orders"
          icon="shopping-cart"
        />
        <SmallBox
          bgColor="bg-success"
          value={'53<sup class="text-xl">%</sup>'}
          label="Bounce Rate"
          icon="bar-chart-2"
        />
        <SmallBox
          bgColor="bg-warning"
          value="44"
          label="User Registrations"
          icon="user-plus"
        />
        <SmallBox
          bgColor="bg-danger"
          value="65"
          label="Unique Visitors"
          icon="pie-chart"
        />
      </div>

      {/* Section: Additional Variants */}
      <h4 className="text-lg font-semibold mb-3">Additional Variants</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SmallBox
          bgColor="bg-info"
          value="2,307"
          label="Page Views"
          icon="eye"
        />
        <SmallBox
          bgColor="bg-secondary"
          value="18"
          label="Pending Tasks"
          icon="clock"
        />
        <SmallBox
          bgColor="bg-primary"
          value="$35,210"
          label="Total Revenue"
          icon="dollar-sign"
        />
        <SmallBox
          bgColor="bg-success"
          value="1,024"
          label="Downloads"
          icon="download"
        />
      </div>

      {/* Hover Effect Note */}
      <AppCallout variant="info" title="Hover Effect">
        Hover over any small box above to see the icon scale animation. The icon enlarges slightly on hover, powered by CSS transitions.
      </AppCallout>
    </div>
  )
}
