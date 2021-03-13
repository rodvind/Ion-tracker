import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { create } from 'ionicons/icons'
import React from 'react'
import { useParams } from 'react-router-dom'

import { COURSE_DATA } from './Courses'

const CourseGoals: React.FC = () => {
  const deleteGoalHandler = () => console.log('Goal deleted...');
  const goalEditHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('Goal editted it....')
  };
  // useParams returns an object holding all the
  // params this page received as key-value pairs
  const selectedCourseId = useParams<{ courseId: string }>().courseId

  const selectedCourse = COURSE_DATA.find(course => course.id === selectedCourseId)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{selectedCourse ? selectedCourse.title : 'No Course with such a detail!'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {
          selectedCourse && 
          <IonList>{
            selectedCourse.goals.map(
              goal => 
              <IonItem key={goal.id} lines="full" button onClick={deleteGoalHandler} detail={false}>
                <IonLabel>{goal.text}</IonLabel>
                <IonButton fill="clear" color="dark" slot="end" onClick={goalEditHandler}>
                  <IonIcon slot="icon-only" icon={create} />
                </IonButton>
              </IonItem>
            )
          }
          </IonList>
        }
      </IonContent>
    </IonPage>
  )
}

export default CourseGoals