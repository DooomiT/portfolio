import { Col, Row } from 'react-bootstrap'
import { AboutCard, AboutData } from '../components/AboutCard'
import styles from '../styles/Home.module.css'

const aboutData: AboutData[] = [
  {
    title: 'NAME',
    content: ['Florian Bufler'],
    createdAt: new Date(Date.now()).toDateString(),
  },
  {
    title: 'Education',
    content: ['B. Sc. Computer Science - IT Automotive'],
    createdAt: new Date(Date.now()).toDateString(),
  },
  {
    title: 'Experience',
    content: [
      'Cooperative Studies - Robert Bosch GmbH - 2018 | 2021',
      'DevOps responsible - DHBW Engineering - 2020 | 2021',
      'DevOps Engineer - Robert Bosch GmbH - 2021 | ~',
    ],
    createdAt: new Date(Date.now()).toDateString(),
  },
]

const AboutCards = (aboutData: AboutData[]) => {
  const aboutCards = Object.keys(aboutData).map(
    (name: string, index: number) => {
      return (
        <Col key={index}>
          <AboutCard key={index} {...aboutData[index]} />
        </Col>
      )
    }
  )
  return (
    <Row xs={1} md={1} className="g-4">
      {aboutCards}
    </Row>
  )
}

export const About = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Qualified DevOps Engineer</h1>
      <p className={styles.description}>Welcome to my portfolio</p>
      <AboutCards {...aboutData} />
    </main>
  )
}
