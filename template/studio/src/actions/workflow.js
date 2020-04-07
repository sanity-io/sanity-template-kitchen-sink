import React, { useMemo } from 'react'
import { useDocumentOperation } from '@sanity/react-hooks'
import { PublishAction } from 'part:@sanity/base/document-actions'
import client from 'part:@sanity/base/client'
import { icons } from '../structure/blog'

// Get the latest workflow status for a draft revision
async function workflowStatus(draft) {
  if (!draft) return null

  return client.fetch('* [_id == $id][0]{_rev}', { id: draft._id }).then(doc => {
    console.log('draft', draft, doc)
    return client.fetch(
      " *[_type == 'workflow.status' && draft == $id && revision == $revision] | order(_updatedAt desc)[0]",
      {
        id: draft._id,
        revision: doc._rev
      }
    )
  })
}

async function createReviewStatus(draft, status, reason) {
  const doc = await client.create({
    _type: 'workflow.status',
    draft: draft._id,
    revision: draft._rev,
    status,
    reason
  })
  return doc
}

export function PublishApprovedAction(props) {
  return PublishAction(props)
}

export function RejectAction({ id, type, published, draft, onComplete }) {
  if (!draft) return null
  const [reason, setReason] = React.useState('')
  const [isDialogOpen, setDialogOpen] = React.useState(false)
  const [status, setStatus] = React.useState(null)

  useMemo(async () => {
    const res = await workflowStatus(draft)
    setStatus(res)
  }, [draft])

  if (!status || status.status !== 'review') return null

  return {
    icon: icons.RejectedIcon,
    label: 'Reject',
    onHandle: () => {
      setDialogOpen(true)
    },
    dialog: isDialogOpen && {
      type: 'modal',
      content: (
        <>
          <h2>Reason</h2>
          <input type="text" onChange={event => setReason(event.target.value)} />
          <button
            onClick={async () => {
              await createReviewStatus(draft, 'rejected', reason)
              setDialogOpen(false)
              onComplete()
            }}
          >
            Done
          </button>
        </>
      )
    }
  }

  /*

  return {
    label: 'Reject',
    onHandle: () => {
      patch.execute([
      ])
      commit.execute()
      onComplete()
    }
  }
  */
}

export function Approve({ id, type, published, draft, onComplete }) {
  if (!draft) return null
  const [status, setStatus] = React.useState(null)
  useMemo(async () => {
    const res = await workflowStatus(draft)
    setStatus(res)
  }, [draft])

  if (!status || status.status !== 'review') return null

  return {
    label: 'Approve',
    onHandle: async () => {
      await createReviewStatus(draft, 'approved')
      onComplete()
    }
  }
}

export function RequestReview({ id, type, draft, onComplete }) {
  if (!draft) return null
  const [status, setStatus] = React.useState(null)
  useMemo(async () => {
    const res = await workflowStatus(draft)
    setStatus(res)
  }, [draft])

  if (status && ['review', 'approved'].includes(status.status)) return null

  return {
    disabled: !draft,
    label: 'Request review',
    onHandle: async () => {
      await createReviewStatus(draft, 'review')
      onComplete()
    }
  }
}

// Badges

export function WorkflowBadge({ draft }) {
  if (!draft) return null

  const [status, setStatus] = React.useState(null)
  useMemo(async () => {
    const res = await workflowStatus(draft)
    setStatus(res)
  }, [draft])

  if (!status) return null

  switch (status.status) {
    case 'rejected':
      return {
        label: 'Rejected',
        title: 'This draft has been rejected and need more editing',
        color: 'danger'
      }
    case 'review':
      return {
        label: 'Waiting review',
        title: 'This draft is waiting for someone to start a review',
        color: 'warning'
      }
    case 'approved':
      return {
        label: 'Approved',
        title: 'This draft is ready to be published',
        color: 'success'
      }
    default:
      return null
  }
}
