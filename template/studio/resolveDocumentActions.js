// import the default document actions
import React, { useMemo } from 'react'
import defaultResolve, {
  PublishAction,
  DuplicateAction,
  DiscardChangesAction
} from 'part:@sanity/base/document-actions'

import {
  PublishAction as PublishApprovedAction,
  RejectAction,
  Approve,
  RequestReview
} from './src/actions/workflow'

const actionsMap = {
  siteSettings: {
    siteSettings: [PublishAction, DiscardChangesAction]
  },
  page: {
    frontpage: [PublishAction, DuplicateAction]
  }
}

const filteredDefaultActions = props => {
  /*
  if (actionsMap[props.type]) {
    if (actionsMap[props.type][props.id]) {
      return actionsMap[props.type][props.id]
    }
  }
  */

  return defaultResolve(props)
}

export default function resolveDocumentActions(props) {
  console.log('resolveDocumentActions()', props.id)
  let actions
  if (props.type === 'post') {
    actions = [
      RequestReview,
      Approve,
      RejectAction,
      PublishAction,
      ...defaultResolve(props).filter(a => a !== PublishAction)
    ]
  } else {
    actions = filteredDefaultActions(props)
  }

  return actions.filter(r => r !== null)
}
