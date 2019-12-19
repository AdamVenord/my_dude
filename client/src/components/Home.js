import React from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react'

class Home extends React.Component {
  state = { dudes: [], }
  
  componentDidMount() {
    axios.get('/api/dudes')
      .then(res => this.setState({ dudes: res.data, }))
  }
  
  sample = () => {
    const { dudes, } = this.state

    if (dudes.length) {
      const index = Math.floor(Math.random() * dudes.length)
      return dudes[index]
    } else {
      return null;
    }
  }

  downVote = (id) => {
    const { dudes, } = this.state;
    this.setState({ dudes: dudes.filter( c => c.id !== id ), });
  }
  
  upvote = (id) => {
    const { dudes, } = this.state;
    axios.put(`/api/dudes/${id}`)
      .then( () => this.setState({ dudes: dudes.filter( c => c.id !== id ), }) )
  }


  render() {
    const dude = this.sample();
    if (dude) {
      return (
        <div>
          <br />
          <Header as='h1'>Add Friends</Header>
          <br />
          <Link to="/my_dudes">
            <br />
            <Button color="pink">
              View My Dudes
            </Button>
            <br />
          </Link>
          <br />
          <Card.Group itemsPerRow={4}>
            { this.state.dudes.map( dude =>
              <Card key={dude.id}>
                <Image src={dude.avatar} />
                <Card.Content>
                  <Card.Header>
                    { dude.name }
                  </Card.Header>
                  <Card.Description>
                    { dude.race }
                  </Card.Description>
                  <Card.Meta>
                    { dude.registry }
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button color="red" icon basic onClick={() => this.downVote(dude.id)}>
                    <Icon name="low vision" />
                  </Button>
                  <Button color="green" icon basic onClick={() => this.upvote(dude.id)}>
                    <Icon name="add user" />
                  </Button>
                </Card.Content>
              </Card>
            )}
          </Card.Group>
        </div>
        );
      } else {
        return <Header textAlign="center">No More Dudes</Header>
      }
  }
}

export default Home