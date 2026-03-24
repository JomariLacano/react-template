import { useState } from 'react'
import AppCard from '../../components/widgets/AppCard'
import AppModal from '../../components/ui/AppModal'
import { Trash, Plus, CheckCircle, Info, AlertTriangle, Check } from 'lucide-react'

export default function ModalsPage() {
  const [showDefault, setShowDefault] = useState(false)
  const [showSmall, setShowSmall] = useState(false)
  const [showLarge, setShowLarge] = useState(false)
  const [showXL, setShowXL] = useState(false)
  const [showScrollable, setShowScrollable] = useState(false)
  const [showCentered, setShowCentered] = useState(false)
  const [showPrimary, setShowPrimary] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [showDanger, setShowDanger] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showSuccessConfirm, setShowSuccessConfirm] = useState(false)

  return (
    <div>

      {/* Default & Sized Modals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Default Modal">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Click the button to open a standard modal dialog.</p>
          <button onClick={() => setShowDefault(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Launch Default Modal</button>

          <AppModal open={showDefault} onOpenChange={setShowDefault} title="Default Modal"
            footer={
              <>
                <button onClick={() => setShowDefault(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Save Changes</button>
              </>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This is the default modal. It centers on the viewport and has a backdrop overlay. Click outside or press the X to close it.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Modals are built using React for state management and Tailwind CSS for styling. They support dark mode automatically.</p>
          </AppModal>
        </AppCard>

        <AppCard title="Modal Sizes">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Modals come in various sizes for different content needs.</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setShowSmall(true)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">Small Modal</button>
            <button onClick={() => setShowLarge(true)} className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm font-medium transition-colors">Large Modal</button>
            <button onClick={() => setShowXL(true)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">XL Modal</button>
          </div>

          <AppModal open={showSmall} onOpenChange={setShowSmall} title="Small Modal" size="sm"
            footer={
              <button onClick={() => setShowSmall(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This is a small modal (max-w-sm). Ideal for simple confirmations or brief messages.</p>
          </AppModal>

          <AppModal open={showLarge} onOpenChange={setShowLarge} title="Large Modal" size="lg"
            footer={
              <button onClick={() => setShowLarge(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This is a large modal (max-w-2xl). Useful for displaying detailed information, large forms, or data tables.</p>
          </AppModal>

          <AppModal open={showXL} onOpenChange={setShowXL} title="Extra Large Modal" size="xl"
            footer={
              <button onClick={() => setShowXL(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This is an extra large modal (max-w-4xl). Perfect for complex layouts, dashboards, or multi-step wizards that need maximum screen space.</p>
          </AppModal>
        </AppCard>
      </div>

      {/* Scrollable & Centered Modals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Scrollable Modal">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">When modal content is long, the body becomes scrollable while the header and footer remain fixed.</p>
          <button onClick={() => setShowScrollable(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Scrollable Modal</button>

          <AppModal open={showScrollable} onOpenChange={setShowScrollable} title="Scrollable Modal" scrollable
            footer={
              <>
                <button onClick={() => setShowScrollable(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Understood</button>
              </>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">This modal has a scrollable body. The content below demonstrates how the modal handles overflow content while keeping the header and footer fixed.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
          </AppModal>
        </AppCard>

        <AppCard title="Centered Modal">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">This modal is vertically centered in the viewport.</p>
          <button onClick={() => setShowCentered(true)} className="px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600 text-sm font-medium transition-colors">Centered Modal</button>

          <AppModal open={showCentered} onOpenChange={setShowCentered} title="Centered Modal" centered
            footer={
              <button onClick={() => setShowCentered(false)} className="px-6 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600 text-sm font-medium">Got it!</button>
            }
          >
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
                <Info className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Centered Modal</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">This modal is centered both vertically and horizontally. It uses a centered layout with an icon, useful for informational dialogs.</p>
            </div>
          </AppModal>
        </AppCard>
      </div>

      {/* Colored Header & Confirmation Modals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Colored Header Modals">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Modals with colored headers for different contexts.</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setShowPrimary(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Primary</button>
            <button onClick={() => setShowSuccess(true)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">Success</button>
            <button onClick={() => setShowWarning(true)} className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm font-medium transition-colors">Warning</button>
            <button onClick={() => setShowDanger(true)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">Danger</button>
          </div>

          <AppModal open={showPrimary} onOpenChange={setShowPrimary} title="Primary Modal" headerClass="bg-blue-600"
            footer={
              <>
                <button onClick={() => setShowPrimary(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Save</button>
              </>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This modal features a primary blue header, suitable for standard informational dialogs.</p>
          </AppModal>

          <AppModal open={showSuccess} onOpenChange={setShowSuccess} title="Success Modal" headerClass="bg-green-600"
            footer={
              <button onClick={() => setShowSuccess(false)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">OK</button>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This modal has a success green header, perfect for confirmation messages or success notifications.</p>
          </AppModal>

          <AppModal open={showWarning} onOpenChange={setShowWarning} title="Warning Modal" headerClass="bg-yellow-500 !text-gray-900"
            footer={
              <>
                <button onClick={() => setShowWarning(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
                <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm">Proceed</button>
              </>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This modal has a warning yellow header, ideal for cautionary messages or important notices.</p>
          </AppModal>

          <AppModal open={showDanger} onOpenChange={setShowDanger} title="Danger Modal" headerClass="bg-red-600"
            footer={
              <>
                <button onClick={() => setShowDanger(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm">Delete</button>
              </>
            }
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">This modal has a danger red header, used for destructive action confirmations or critical error messages.</p>
          </AppModal>
        </AppCard>

        <AppCard title="Confirmation Modal">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">A common pattern for destructive action confirmations.</p>
          <button onClick={() => setShowConfirmation(true)} className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">
            <Trash className="w-4 h-4" /> Delete Account
          </button>

          <AppModal open={showConfirmation} onOpenChange={setShowConfirmation} title="Are you sure?" centered size="sm"
            footer={
              <>
                <button onClick={() => setShowConfirmation(false)} className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm font-medium dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
                <button onClick={() => setShowConfirmation(false)} className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium">Yes, Delete</button>
              </>
            }
          >
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Are you sure?</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">This action cannot be undone. Your account and all associated data will be permanently deleted.</p>
            </div>
          </AppModal>
        </AppCard>
      </div>

      {/* Form Modal & Success Confirmation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <AppCard title="Form Modal">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">A modal containing a form for data entry.</p>
          <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" /> Add New User
          </button>

          <AppModal open={showForm} onOpenChange={setShowForm} title="Add New User"
            footer={
              <>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Create User</button>
              </>
            }
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" placeholder="Enter full name" className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" placeholder="Enter email" className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select a role...</option>
                  <option>Administrator</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <textarea rows={3} placeholder="Short bio..." className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="sendInvite" className="rounded border-gray-300 dark:border-gray-600" />
                <label htmlFor="sendInvite" className="text-sm">Send invitation email</label>
              </div>
            </form>
          </AppModal>
        </AppCard>

        <AppCard title="Success Confirmation Modal">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">A modal to confirm successful actions with a visual indicator.</p>
          <button onClick={() => setShowSuccessConfirm(true)} className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">
            <CheckCircle className="w-4 h-4" /> Submit Order
          </button>

          <AppModal open={showSuccessConfirm} onOpenChange={setShowSuccessConfirm} title="Success!" centered size="sm"
            footer={
              <button onClick={() => setShowSuccessConfirm(false)} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium">Continue</button>
            }
          >
            <div className="text-center py-4">
              <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h5 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">Success!</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your order has been submitted successfully. You will receive a confirmation email shortly.</p>
            </div>
          </AppModal>
        </AppCard>
      </div>

    </div>
  )
}
