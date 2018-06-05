import Dental from './forms/Dental.vue'
import PersonalInfo from './forms/PersonalInfo.vue'
import SummaryPage from './forms/SummaryPage.vue'
import FormContainer from './elements/FormContainer.vue'
import Medical from './forms/Medical.vue'
import DependentInfomation from './forms/DependentInfomation.vue'
import HSA from './forms/HSA.vue'
import VoluntaryLife from './forms/VoluntaryLife.vue'
import Vision from './forms/Vision.vue'
import PCP from './forms/PCP.vue'

export default [

  {
    path: '/employee/benefits/Enrollment/Dental/NewHire',
    component: Dental
  },
  {
    path: '/employee/benefits/Enrollment/PersonalInformation/NewHire',
    component: PersonalInfo
  },
  {
    path: '/employee/benefits/Enrollment/Summary/NewHire',
    component: SummaryPage
  }, 
  {
    path: '/employee/benefits/Enrollment/Medical/NewHire',
    component: Medical
  }, 
  {
    path: '/employee/benefits/Enrollment/DependentInformation/NewHire',
    component: DependentInfomation
  }, 
  {
    path: '/employee/benefits/Enrollment/HSA/NewHire',
    component: HSA
  },
  {
    path: '/employee/benefits/Enrollment/VoluntaryLife/NewHire',
    component: VoluntaryLife
  }, 
  {
    path: '/employee/benefits/Enrollment/Vision/NewHire',
    component: Vision
  }, 
  {
    path: '/employee/benefits/Enrollment/PCP/NewHire',
    component: PCP
  }, 

]
