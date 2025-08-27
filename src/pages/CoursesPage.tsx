import { lazy } from "react"
const CoursesContent = lazy(() => import("../components/CoursesContent/CoursesContent"))
const Footer = lazy(() => import("../components/Footer/Footer"))


function CoursesPage() {
  return (
    <div>
      <CoursesContent />
      <Footer />
    </div>
  )
}

export default CoursesPage
