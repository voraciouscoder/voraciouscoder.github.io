import React from 'react'
import Link from 'gatsby-link'

class Links extends React.Component {
  render() {
    return (
      <div>
      <h4><Link to="/about/">About</Link>{' - '}
      <Link to="/reading-challenges/">Reading Challenges</Link>
      </h4>
      <h4></h4>
      </div>
    )
  }
}

export default Links
