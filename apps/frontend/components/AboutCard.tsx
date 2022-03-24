import { Card } from "react-bootstrap"

export interface AboutData {
  title: string
  content: string[]
  createdAt: string
}

export const AboutCard = (aboutData: AboutData) => {
  const content = aboutData.content.map((value: string, index: number) => {
    return <li key={index}>{value}</li>
  })
  return (
    <Card>
      <Card.Body>
        <Card.Title>{aboutData.title}</Card.Title>
        <Card.Text>
          <ul>{content}</ul>
        </Card.Text>
        <Card.Footer>
          <small className="text-muted">Created at {aboutData.createdAt}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}