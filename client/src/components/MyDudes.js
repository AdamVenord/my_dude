import React from 'react'
import axios from 'axios'
import { Card, Divider, Image, Button, Icon, } from 'semantic-ui-react'

class MyDudes extends React.Component {
  state = { dudes: [], }

  componentDidMount() {
    axios.get('/api/my_dudes')
      .then( res => this.setState({ dudes: res.data, }) )
  }

  removeDude = (id) => {
    const dudes = this.state.dudes.filter(dude => {
      return dude.id !== id && dude
    })
    this.setState({ dudes, })
  }
  

  render() {
    const { dudes, } = this.state
    return (
      <Card.Group itemsPerRow={4}>
        { dudes.map( dude =>
          <Card key={dude.id}>
            <Image src={dude.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { dude.name }
                <br />
                <br />
                <Button color="red" animated='vertical' onClick={() => this.removeDude(dude.id)}>
                  <Button.Content hidden>Remove</Button.Content>
                  <Button.Content visible>
                    <Icon name='remove user' />
                  </Button.Content>
                </Button>
                <br />
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyDudes