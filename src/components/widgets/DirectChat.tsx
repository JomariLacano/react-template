import { useState } from 'react'
import { Contact } from 'lucide-react'
import type { ChatMessage, ChatContact } from '@/types'

interface DirectChatProps {
  title: string
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  messages: ChatMessage[]
  contacts: ChatContact[]
  badgeCount?: number
  onSend?: (text: string) => void
}

export default function DirectChat({
  title,
  variant = 'primary',
  messages,
  contacts,
  badgeCount,
  onSend,
}: DirectChatProps) {
  const [contactsOpen, setContactsOpen] = useState(false)
  const [inputText, setInputText] = useState('')

  function send() {
    const text = inputText.trim()
    if (text) {
      onSend?.(text)
      setInputText('')
    }
  }

  return (
    <div
      className={`card direct-chat direct-chat-${variant}${contactsOpen ? ' direct-chat-contacts-open' : ''}`}
    >
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-tools">
          {badgeCount != null && (
            <span className="text-xs mr-2">{badgeCount} Messages</span>
          )}
          <button
            className="btn-tool"
            onClick={() => setContactsOpen(!contactsOpen)}
          >
            <Contact className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="direct-chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`direct-chat-msg${msg.side === 'right' ? ' right' : ''}`}
            >
              <img src={msg.avatar} className="direct-chat-img" alt="" />
              <div>
                <div className="direct-chat-infos">
                  <span className="direct-chat-name">{msg.name}</span>
                  <span className="direct-chat-timestamp">{msg.time}</span>
                </div>
                <div className="direct-chat-text">{msg.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="direct-chat-contacts">
          <ul className="direct-chat-contacts-list">
            {contacts.map((contact, index) => (
              <li key={index}>
                <img src={contact.avatar} alt="" />
                <div className="contacts-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-status">{contact.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="direct-chat-input-area">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Type Message ..."
          onKeyUp={(e) => e.key === 'Enter' && send()}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  )
}
