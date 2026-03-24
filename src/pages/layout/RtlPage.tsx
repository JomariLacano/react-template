import { useEffect } from 'react'
import { ShoppingCart, BarChart2, UserPlus, PieChart, Mail, Bookmark, Upload, ThumbsUp, ArrowLeft } from 'lucide-react'
import AppCallout from '../../components/ui/AppCallout'
import AppCard from '../../components/widgets/AppCard'

export default function RtlPage() {
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl')
    document.documentElement.setAttribute('lang', 'ar')
    return () => {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }, [])

  return (
    <div>
      <AppCallout variant="info" title="RTL (Right-to-Left) Layout">
        This page demonstrates the <strong>RTL layout</strong> for languages like Arabic, Hebrew, Farsi, and Urdu. The sidebar appears on the right, text flows right-to-left, and all UI elements are mirrored.
        <p className="mt-2">Usage: Add <code>dir="rtl"</code> and <code>lang="ar"</code> to the <code>&lt;html&gt;</code> tag.</p>
      </AppCallout>

      <AppCard title="How to Enable RTL">
        <p>To enable RTL layout, two changes are needed:</p>
        <ol className="list-decimal ml-5 mt-2 space-y-2 text-sm">
          <li>Set the <code>dir</code> and <code>lang</code> attributes on the <code>&lt;html&gt;</code> element:
            <pre className="bg-gray-800 text-green-400 p-3 rounded mt-1 text-sm"><code>{`<html lang="ar" dir="rtl">`}</code></pre>
          </li>
          <li>Include the RTL CSS overrides that mirror the grid layout, sidebar position, and icon directions:
            <pre className="bg-gray-800 text-green-400 p-3 rounded mt-1 text-sm overflow-x-auto"><code>{`[dir="rtl"] .app-wrapper {
  grid-template-areas:
    "header sidebar"
    "main sidebar"
    "footer sidebar";
  grid-template-columns: 1fr auto;
}`}</code></pre>
          </li>
        </ol>
        <p className="mt-3">Tailwind CSS utilities like <code>text-right</code>, <code>ml-*</code>, and <code>pl-*</code> are physical properties. For RTL support, prefer logical properties: <code>ms-*</code> (margin-start), <code>me-*</code> (margin-end), <code>ps-*</code> (padding-start), <code>pe-*</code> (padding-end).</p>
      </AppCard>

      {/* RTL Demo Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="small-box bg-primary">
          <div className="inner">
            <h3>150</h3>
            <p>{'\u0637\u0644\u0628\u0627\u062A \u062C\u062F\u064A\u062F\u0629'}</p>
          </div>
          <div className="small-box-icon">
            <ShoppingCart />
          </div>
          <a href="#" className="small-box-footer">
            {'\u0627\u0644\u0645\u0632\u064A\u062F'} <ArrowLeft className="inline w-4 h-4" />
          </a>
        </div>

        <div className="small-box bg-success">
          <div className="inner">
            <h3>53<sup className="text-xl">%</sup></h3>
            <p>{'\u0645\u0639\u062F\u0644 \u0627\u0644\u0627\u0631\u062A\u062F\u0627\u062F'}</p>
          </div>
          <div className="small-box-icon">
            <BarChart2 />
          </div>
          <a href="#" className="small-box-footer">
            {'\u0627\u0644\u0645\u0632\u064A\u062F'} <ArrowLeft className="inline w-4 h-4" />
          </a>
        </div>

        <div className="small-box bg-warning">
          <div className="inner">
            <h3>44</h3>
            <p>{'\u062A\u0633\u062C\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646'}</p>
          </div>
          <div className="small-box-icon">
            <UserPlus />
          </div>
          <a href="#" className="small-box-footer">
            {'\u0627\u0644\u0645\u0632\u064A\u062F'} <ArrowLeft className="inline w-4 h-4" />
          </a>
        </div>

        <div className="small-box bg-danger">
          <div className="inner">
            <h3>65</h3>
            <p>{'\u0632\u0648\u0627\u0631 \u0641\u0631\u064A\u062F\u0648\u0646'}</p>
          </div>
          <div className="small-box-icon">
            <PieChart />
          </div>
          <a href="#" className="small-box-footer">
            {'\u0627\u0644\u0645\u0632\u064A\u062F'} <ArrowLeft className="inline w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Arabic Sample Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AppCard title={'\u0645\u062D\u062A\u0648\u0649 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629'}>
          <p>{'\u0647\u0630\u0627 \u0645\u062B\u0627\u0644 \u0639\u0644\u0649 \u0645\u062D\u062A\u0648\u0649 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0641\u064A \u062A\u062E\u0637\u064A\u0637 \u0645\u0646 \u0627\u0644\u064A\u0645\u064A\u0646 \u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631. \u0644\u0627\u062D\u0638 \u0643\u064A\u0641 \u064A\u062A\u062F\u0641\u0642 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0627\u0644\u064A\u0645\u064A\u0646 \u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631\u060C \u0648\u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A \u0639\u0644\u0649 \u0627\u0644\u062C\u0627\u0646\u0628 \u0627\u0644\u0623\u064A\u0645\u0646 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629.'}</p>
          <p className="mt-2">{'\u064A\u062F\u0639\u0645 TailAdminLTE \u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0645\u0646 \u0627\u0644\u064A\u0645\u064A\u0646 \u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0639 \u062A\u0639\u062F\u064A\u0644\u0627\u062A CSS \u0628\u0633\u064A\u0637\u0629.'}</p>
        </AppCard>

        <AppCard title="English Content">
          <p>This is a sample card with English content in the RTL layout. Notice how the overall page structure is mirrored — sidebar on the right, content flowing right-to-left — but the English text within this card still reads left-to-right naturally.</p>
          <p className="mt-2">Mixed-language content works correctly because browsers handle bidirectional text natively.</p>
        </AppCard>
      </div>

      {/* Info Boxes in RTL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="info-box">
          <span className="info-box-icon bg-primary text-white">
            <Mail className="w-8 h-8" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">{'\u0627\u0644\u0631\u0633\u0627\u0626\u0644'}</span>
            <span className="info-box-number">1,410</span>
          </div>
        </div>
        <div className="info-box">
          <span className="info-box-icon bg-success text-white">
            <Bookmark className="w-8 h-8" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">{'\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629'}</span>
            <span className="info-box-number">410</span>
          </div>
        </div>
        <div className="info-box">
          <span className="info-box-icon bg-warning text-white">
            <Upload className="w-8 h-8" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">{'\u0627\u0644\u062A\u062D\u0645\u064A\u0644\u0627\u062A'}</span>
            <span className="info-box-number">13,648</span>
          </div>
        </div>
        <div className="info-box">
          <span className="info-box-icon bg-danger text-white">
            <ThumbsUp className="w-8 h-8" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">{'\u0627\u0644\u0625\u0639\u062C\u0627\u0628\u0627\u062A'}</span>
            <span className="info-box-number">93,139</span>
          </div>
        </div>
      </div>
    </div>
  )
}
