import React from 'react'

const JumbotronFluid = ({heading, lead}) => (
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">{heading}</h1>
      <p class="lead">{lead}</p>
    </div>
  </div>
)

export default JumbotronFluid
