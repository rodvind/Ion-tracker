import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
// import { useHistory } from 'react-router-dom'

export const COURSE_DATA = [
  { id: 'c1', title: 'Ionic + React - The Practical Guide' },
  { id: 'c2', title: 'React.js - The Practical Guide' },
  { id: 'c3', title: 'JavaScript - The Practical Guide' },
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
                  <IonCardContent className="ion-text-center">
                    <h2>{course.title}</h2>
                    <IonButton routerLink={`/courses/${course.id}`}>View Course Goals</IonButton>
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