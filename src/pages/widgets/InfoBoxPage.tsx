import InfoBox from '@/components/widgets/InfoBox'

export default function InfoBoxPage() {
  return (
    <div>
      {/* Section: Basic Info Boxes */}
      <h4 className="text-lg font-semibold mb-3">Basic Info Boxes</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <InfoBox icon="mail" iconBg="bg-primary" label="Messages" value="1,410" />
        <InfoBox icon="bookmark" iconBg="bg-success" label="Bookmarks" value="410" />
        <InfoBox icon="upload" iconBg="bg-warning" label="Uploads" value="13,648" />
        <InfoBox icon="thumbs-up" iconBg="bg-danger" label="Likes" value="93,139" />
      </div>

      {/* Section: Info Boxes with Progress Bars */}
      <h4 className="text-lg font-semibold mb-3">With Progress Bars</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <InfoBox
          icon="cpu"
          iconBg="bg-primary"
          label="CPU Traffic"
          value="10%"
          progressValue={10}
          progressColor="bg-primary"
          progressDescription="10% Increase in 30 Days"
        />
        <InfoBox
          icon="thumbs-up"
          iconBg="bg-success"
          label="Likes"
          value="41,410"
          progressValue={70}
          progressColor="bg-success"
          progressDescription="70% Increase in 30 Days"
        />
        <InfoBox
          icon="shopping-cart"
          iconBg="bg-warning"
          label="Sales"
          value="760"
          progressValue={50}
          progressColor="bg-warning"
          progressDescription="50% Increase in 30 Days"
        />
        <InfoBox
          icon="users"
          iconBg="bg-danger"
          label="New Members"
          value="2,000"
          progressValue={30}
          progressColor="bg-danger"
          progressDescription="30% Increase in 30 Days"
        />
      </div>

      {/* Section: Additional Icon Variants */}
      <h4 className="text-lg font-semibold mb-3">Additional Variants</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <InfoBox icon="globe" iconBg="bg-info" label="Traffic" value="820,311" />
        <InfoBox icon="folder" iconBg="bg-secondary" label="Files" value="1,200" />
        <InfoBox
          icon="bell"
          iconBg="bg-info"
          label="Notifications"
          value="327"
          progressValue={85}
          progressColor="bg-info"
          progressDescription="85% Read Rate"
        />
        <InfoBox
          icon="hard-drive"
          iconBg="bg-secondary"
          label="Disk Usage"
          value="114 GB"
          progressValue={45}
          progressColor="bg-secondary"
          progressDescription="45% of 250 GB"
        />
      </div>
    </div>
  )
}
