import { useState } from 'react'
import { User, Mail, Lock, Eye, Search, Send } from 'lucide-react'
import AppCard from '@/components/widgets/AppCard'

export default function GeneralFormsPage() {
  const [rangeVal, setRangeVal] = useState(50)
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <div className="w-full px-4">

      {/* Text Inputs & Textarea */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Text Inputs">
          <div className="space-y-4">
            <div>
              <label htmlFor="defaultInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Default Input</label>
              <input type="text" id="defaultInput" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="placeholderInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">With Placeholder</label>
              <input type="text" id="placeholderInput" placeholder="Enter your name..." className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500" />
            </div>
            <div>
              <label htmlFor="disabledInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disabled</label>
              <input type="text" id="disabledInput" defaultValue="Disabled input" disabled className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed" />
            </div>
            <div>
              <label htmlFor="readonlyInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Readonly</label>
              <input type="text" id="readonlyInput" defaultValue="Readonly value" readOnly className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="emailInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="emailInput" placeholder="user@example.com" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="passwordInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input type="password" id="passwordInput" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Number</label>
              <input type="number" id="numberInput" placeholder="0" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
          </div>
        </AppCard>

        <AppCard title="Textarea &amp; Select">
          <div className="space-y-4">
            <div>
              <label htmlFor="textarea1" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Textarea</label>
              <textarea id="textarea1" rows={4} placeholder="Write something..." className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400 resize-y"></textarea>
            </div>
            <div>
              <label htmlFor="select1" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Single Select</label>
              <select id="select1" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
                <option value="">-- Select an option --</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
            </div>
            <div>
              <label htmlFor="multiSelect" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Multiple Select</label>
              <select id="multiSelect" multiple size={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple</p>
            </div>
            <div>
              <label htmlFor="disabledSelect" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disabled Select</label>
              <select id="disabledSelect" disabled className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed">
                <option>Disabled option</option>
              </select>
            </div>
          </div>
        </AppCard>
      </div>

      {/* Input with Icons/Addons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Input with Icons">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Left Icon</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <User className="w-4 h-4" />
                </span>
                <input type="text" placeholder="Username" className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Right Icon</label>
              <div className="relative">
                <input type="email" placeholder="Email address" className="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Both Icons</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input type="password" placeholder="Password" className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </AppCard>

        <AppCard title="Input Groups">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Text Addon (Left)</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">@</span>
                <input type="text" placeholder="Username" className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Text Addon (Right)</label>
              <div className="flex">
                <input type="email" placeholder="Email" className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
                <span className="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md">@example.com</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Button Addon</label>
              <div className="flex">
                <input type="text" placeholder="Search..." className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
                <button type="button" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-r-md hover:bg-blue-700 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency Addon</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">$</span>
                <input type="number" placeholder="0.00" className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
                <span className="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md">.00</span>
              </div>
            </div>
          </div>
        </AppCard>
      </div>

      {/* Checkboxes & Radios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Checkboxes">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default Checkboxes</p>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700" /> Checkbox 1
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700" /> Checkbox 2 (checked)
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <input type="checkbox" disabled className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 cursor-not-allowed" /> Checkbox 3 (disabled)
                </label>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Inline Checkboxes</p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" /> Option A
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" /> Option B
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" /> Option C
                </label>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Toggle Switch</p>
              <div className="space-y-2">
                <label className="inline-flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-primary transition-colors"></div>
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-5"></div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Toggle switch off</span>
                </label>
                <label className="inline-flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-success transition-colors"></div>
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-5"></div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Toggle switch on</span>
                </label>
              </div>
            </div>
          </div>
        </AppCard>

        <AppCard title="Radio Buttons">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default Radio Buttons</p>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="radio" name="radio1" className="w-4 h-4 accent-primary border-gray-300 dark:border-gray-600" /> Option 1
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="radio" name="radio1" defaultChecked className="w-4 h-4 accent-primary border-gray-300 dark:border-gray-600" /> Option 2 (selected)
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <input type="radio" name="radio1" disabled className="w-4 h-4 border-gray-300 dark:border-gray-600 cursor-not-allowed" /> Option 3 (disabled)
                </label>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Inline Radio Buttons</p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="radio" name="radio2" className="w-4 h-4 accent-primary border-gray-300" /> Left
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="radio" name="radio2" defaultChecked className="w-4 h-4 accent-primary border-gray-300" /> Center
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="radio" name="radio2" className="w-4 h-4 accent-primary border-gray-300" /> Right
                </label>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Styled (Button Group)</p>
              <div className="flex">
                {(['daily', 'monthly', 'yearly'] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setBillingPeriod(period)}
                    className={`px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 transition-colors ${
                      period === 'daily' ? 'rounded-l-md' : period === 'yearly' ? 'rounded-r-md' : 'border-t border-b'
                    } ${
                      billingPeriod === period
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AppCard>
      </div>

      {/* File, Range, Sizes, Color, DateTime */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="File, Range &amp; Color Inputs">
          <div className="space-y-4">
            <div>
              <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">File Input</label>
              <input type="file" id="fileInput" className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-blue-700 file:cursor-pointer cursor-pointer" />
            </div>
            <div>
              <label htmlFor="multiFileInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Multiple Files</label>
              <input type="file" id="multiFileInput" multiple className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-secondary file:text-white hover:file:bg-gray-600 file:cursor-pointer cursor-pointer" />
            </div>
            <div>
              <label htmlFor="rangeInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Range Input</label>
              <input type="range" id="rangeInput" min="0" max="100" defaultValue="50" className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Range with Value: <span className="font-semibold text-primary">{rangeVal}</span></label>
              <input type="range" min="0" max="100" value={rangeVal} onChange={(e) => setRangeVal(Number(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary" />
            </div>
            <div>
              <label htmlFor="colorInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Color Picker</label>
              <input type="color" id="colorInput" defaultValue="#0d6efd" className="w-12 h-10 p-1 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer bg-white dark:bg-gray-700" />
            </div>
          </div>
        </AppCard>

        <AppCard title="Date &amp; Time Inputs">
          <div className="space-y-4">
            <div>
              <label htmlFor="dateInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
              <input type="date" id="dateInput" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="timeInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time</label>
              <input type="time" id="timeInput" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="datetimeInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date &amp; Time</label>
              <input type="datetime-local" id="datetimeInput" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="monthInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Month</label>
              <input type="month" id="monthInput" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="weekInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Week</label>
              <input type="week" id="weekInput" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
            </div>
          </div>
        </AppCard>
      </div>

      {/* Input Sizes & Floating Labels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Input Sizes">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Small</label>
              <input type="text" placeholder="Small input" className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Default</label>
              <input type="text" placeholder="Default input" className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Large</label>
              <input type="text" placeholder="Large input" className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
          </div>
        </AppCard>

        <AppCard title="Floating Labels">
          <div className="space-y-6">
            <div className="relative">
              <input type="text" id="floatName" placeholder=" " className="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
              <label htmlFor="floatName" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">Full Name</label>
            </div>
            <div className="relative">
              <input type="email" id="floatEmail" placeholder=" " className="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200" />
              <label htmlFor="floatEmail" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">Email Address</label>
            </div>
            <div className="relative">
              <select id="floatSelect" className="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
                <option value="" defaultChecked></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label htmlFor="floatSelect" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400">Category</label>
            </div>
          </div>
        </AppCard>
      </div>

      {/* Horizontal & Inline Form Layouts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title="Horizontal Form Layout">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center mb-4">
              <label htmlFor="hEmail" className="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-300 text-right pr-4">Email</label>
              <div className="w-2/3">
                <input type="email" id="hEmail" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="hPassword" className="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-300 text-right pr-4">Password</label>
              <div className="w-2/3">
                <input type="password" id="hPassword" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-1/3"></div>
              <div className="w-2/3">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" /> Remember me
                </label>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3"></div>
              <div className="w-2/3">
                <button type="submit" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">Sign in</button>
              </div>
            </div>
          </form>
        </AppCard>

        <AppCard title="Inline Form Layout">
          <form className="flex flex-wrap items-end gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 min-w-[150px]">
              <label htmlFor="inlineName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="inlineName" placeholder="Jane Doe" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label htmlFor="inlineEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="inlineEmail" placeholder="jane@example.com" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400" />
            </div>
            <div>
              <button type="submit" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                <Send className="w-4 h-4 inline mr-1" /> Submit
              </button>
            </div>
          </form>
        </AppCard>
      </div>

    </div>
  )
}
