import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { COURSE_DATA } from './Courses'

const CourseGoals: React.FC = () => {
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
        <h2>This works - course goals page!</h2>
      </IonContent>
    </IonPage>
  )
}

export default CourseGoals