import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
// import { useHistory } from 'react-router-dom'

export const COURSE_DATA = [
  { id: 'c1', title: 'Ionic + React - The Practical Guide', enrolled: new Date('03/14/2021'), goals: [
    { id: 'c1g1', text: 'Finish the course in a reasonable time' },
    { id: 'c1g2', text: 'Try to learn as much as possible' },
  ] },
  { id: 'c2', title: 'React.js - The Practical Guide', enrolled: new Date('03/20/2021'), goals: [
    { id: 'c2g1', text: 'Finish the course in a reasonable time' },
    { id: 'c2g2', text: 'Try to learn as much as possible' },
  ] },
  { id: 'c3', title: 'JavaScript - The Practical Guide', enrolled: new Date('03/30/2021'), goals: [
    { id: 'c3g1', text: 'Finish the course in a reasonable time' },
    { id: 'c3g2', text: 'Try to learn as much as possible' },
  ] },
]

const Courses: React.FC = () => {
  // useHistory() will return a history object
  // const history = useHistory()

  // const changePageHandler = () => {
  //   history.push('/course-goals')
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map(course => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{course.title}</IonCardTitle>
                    <IonCardSubtitle>Enrolled on {course.enrolled.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="ion-text-right">
                      <IonButton fill="clear"  color="secondary" routerLink={`/courses/${course.id}`}>View Course Goals</IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
          
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Courses

// <h2>This works - Courses Page!</h2>
// <div>
// <IonButton routerLink="/course-goals">To Course Goals</IonButton>
// {/* <IonButton onClick={changePageHandler}>To Course Goals</IonButton> */}
// </div>