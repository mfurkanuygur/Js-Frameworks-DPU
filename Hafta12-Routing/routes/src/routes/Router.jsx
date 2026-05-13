import {Routes,Route} from 'react-router'
import { Anasayfa } from '../views/Anasayfa'
import { Sepetim } from '../views/Sepetim'

export const Router = () => {
  return (
    <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/sepetim" element={<Sepetim />} />  

    </Routes>
    )
}
